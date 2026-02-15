
## The title is harsh, but the size of my data easily caches INSIDE the FastAPI container, so theres ZERO reason to lose milliseconds to traversing to a Redis container

I am back today with 3 goals:
1. cache all route path json polylines on user app on upload for instantaneous displaying of paths
2. extricate redis from the system
3. send 'next_stop_name' and 'expected_arrival_time' along with vehicle
4. BONUS - start fetching BART locations for posterity

## 1. Client side caching
This work brings me right back to a the **pesky dilemma** of how to properly relate vehicles, routes, and shapes - when shapes include Inbound and Outbound specific paths. Currently the map displays shapes based on vehicles/routes (indescriminate of IB/OB) displayed on the map; this requires a state variable called displayedRoutes. However, it would be a whole lot nicer to connect vehicle IDs to their shape so that IB/OB shapes are only displayed corresponding to active IB/OB vehicles. 

### 1.1 How to structure the vehicle and path information
I will cache shapes in json form, corresponding to a shape_id:
```
const availablePaths = {shape_id: str, route_id: str, direction_id: int, shape_json: str}
```

This paths list will be used in two ways:
1. vehicles are displayed on map. User wants to see corresponding paths:
```    
        displayedVehicles is looped through. 
        displayedPaths is updated based on all unique (route_id, dir_id) pairs in the filteredVehicles
```
2. shape(s) chose based on path-finding algorithm. Map should display vehicles on those shapes:
``` 
        displayedPaths is directly updated by path-finding algo.
        buses is looped through.
            -> displayedVehicles is updated based on all vehicles with shape_id in displayedPaths
```

So what data representations do I need?:
**availablePaths**: All paths ever used by muni. In order to connect the path-finding algorithm to the path to display, availablePaths must have a way to 
**buses**: All live vehicles - a list of json objects - fetched every 60s. Needs to have 
**displayedVehicles**: A curated subset of **buses** json objects, this is what's displayed on the map and is influenced by user actions. Must have  
**displayedPaths**:

### 1.2 Route-planning preparation

The way data is stored is going to be important when I add route-planning functionality and the user asks for routes to 'destination X'. Then appropriate shape_ids will be found (ideally by locating nearby stops and connecting stops to shape_ids) and then using shape_ids to filter the vehicles displayed

``` 
origin X -------> nearby stop ids --+
                                    |--> shapes with both stop ids (display) --> vehicles on those shapes (display)
destination X --> nearby stop ids --+
```

Only hiccup here is that the algorithm will need to filter selected shape_ids by direction user is going - i.e. stops near DX must come after stops near OX in the shape sequence.

**Important Use Case for Redis**: during path-finding, the frontend will hit: 
```api.post("/route-planning", {locations: [A, B]})```
and it should return
```[shape_id1, shape_id2, ...]```
stop_id pairs should be fetched and their details **cached in redis**. These details are: stops_near_A: List, stops_near_B: List, shapes 
--
**Anyways**, 