
# Today is the day I set up Redis for the MUNI Api
This blog is my *Redis Tabula Rasa*.

I updated my docker compose file: added the redis service. I am using `image: redis:7-alpine` cause everything must stay small. Making the muni-api container aware of the change was as simple as adding some new environment variables for host: redis and port: 6379

## Obstacle 1
First obstacle: Redis only takes json strings --> json.dump doesnt like DECIMAL types of NUMERIC psql values so I searched for solutions and discovered that PostGIS provides a really good type for representing locations:

`location = GEOMETRY(Point, SRID=4326)`
 - GEOMETRY: A type in PostGIS. It accepts 
 - Point: A spatial object that disregards shape or size. Can be of more than 2 dimensions, but when it is used for only 2, you can use `ST_X(location)` and `ST_Y(location)` to fetch individual coordinates.
 - SRID=4326: The `Spatial Reference ID` specifies the coordinate system the point uses. This defines how spatial objects interact and are interpretted. For example, it will define how distance calculations are measured. In particular, `4326` uses spherical coordinates of the earths surface and is designed for lat/lon pairs. This is the SRID used by GPS.

Making this change does mean I will have inconsistencies between the first few months of historical data and the rest that persists onwards. But I often try to opt for the choice that ensures robustness into the future rather than nursing deficits of the past. Lol. 

**geometry point will make spatial queries for vehicles (e.g. "find vehicles near me") easier in the future**

Anyways, This change is taking forever to process in my 10M+ row vehicles table, so as I wait I am modifying everything in queries.py and in the api.py to handle this new type. BE WARY! ST_X = lon, ST_Y = lat (seemingly breaking the nice way lat/lon rolls off the tongue -- lon/lat? yuck)

Now when I fetch, I use the query below and this returns floats, which will be accepted by json.
```
SELECT 
    route_id, 
    vehicle_id, 
    ST_X(location) as lon, 
    ST_Y(location) as lat, 
    timestamp, 
    occupancy 
FROM vehicles 
WHERE timestamp = (SELECT MAX(timestamp) FROM vehicles);
```

## Obstacle 2
Queries for current vehicles take a little bit longer. This brings me face to face with a problem I've been avoiding: creating a single table for the current vehicle records. Then fetch_current_vehicles won't even be a query, it'll just be a fetch of <600 rows. What this entails:
    1. create new table current vehicles
    2. update automated fetching script to additionally overwrite previous content of current vehicles

Even better, though more work because of Docker networking :(, I should add logic in the fetch script to push the new current vehicles directly into the redis cache. This would skip querying the database for current vehicles entirely. I'm in a pickle: Do I containerize the fetch script and DB and only use docker network? Or do I handle them nitty-gritty of opening up the redis container to be reached from the rpi? I think the latter: its a learning experience and I don't have to do unnecessary containerization (overhead on rpi).

This might be easier than I though. The ports are already bound for Redis, so it's probably just using the localhost and the Redis bound port 6379. Wanna bet? ... it worked

## Obstacle 3
Obstacle three: Even after adding redis and pushing current vehicles immediately into the cache upon each fetch, seeing fetch hits in <2ms, Locust with 100 users sets a median of 1600ms AHHHH

I feel like a fool using redis in another container when the space I need for static files is so minimal I can just cache locally on the FastAPI container's memory. So I did that and got down to a median of **430ms at 100 users** for fetching current vehicles. **Still too slow**, and the 99percentile is still at 15000ms(15seconds) which is **horrible**. So I think, since min is 83ms and average is only 430 ms maybe.

It was Cloudflare slowing everything down. No more free tier cloudflare... I need a real solution. At least running Locust behind the cloudflare resulted in median current vehicles request time of **
```
Response time percentiles (approximated)
Type     Name                           50%    66%    75%    80%    90%    95%    98%    99%  99.9% 99.99%   100% # reqs
--------|----------------------------------|------|------|------|------|------|------|------|------|------|------|------
GET      /vehicles/current               39     57     86    140    530    860   1200   1400   2900   3200   3200   5380
--------|----------------------------------|------|------|------|------|------|------|------|------|------|------|------
         Aggregated                      39     57     86    140    530    860   1200   1400   2900   3200   3200   5380
```
which is borderline acceptable... although not super lovely.

I think I need to minimize the size of the vehicles being sent over. Maybe gzip? 
How will this work for data that cant be shrunk? **WHERE IS THE REAL BOTTLENECK????**