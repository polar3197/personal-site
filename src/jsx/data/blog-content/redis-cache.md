### What is Redis?
Redis is a software suite offering management for in memory caching, rate-limiting and LLM caching

### Why is it warranted here?

1. Speeding up queries. The main queries at this point in development are for,
    1. current vehicles
    2. fetching geometric paths corresponding to routes
        - Currently this can take up to 1.5 seconds because GEOMETRY types must be converted to GeoJSON for the map. Even on a warm cache, this conversion makes a 1.9ms query into a 27.6ms query. Caching the preconverted GEOMETRIES will allow for spatial queries within PostgreSQL and then the ability to use corresponding IDs to identify the JSON stored in the cache. 
    3. spatial joins with neighborhoods (soon to be more spatial connections)

    current_vehicles oscilates between 100-600 rows

    static tables, all told, are approximately **4.5MB**

    the Raspberry Pi that runs this whole app has **4GB** RAM and with all other MUNI processes running, there is still a free **3.7GB**

2. Rate limiting
    1. Need to understand NGINX before understanding how Redis will fit in

3. Increasing LLM querying functionality
    1.

### What functionality of Redis will the MUNI Map make use of?


### What performance is achieved via Redis? (actually timing)