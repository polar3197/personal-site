
## Tables

[**vehicles**](#vehicles) - continuously updated, weekly-partitioned table of live vehicle records. Connects vehicles to trips and to routes

[**trips**](#trips) - static table connecting trips to shapes

[**shapes**](#shapes) - static table connecting shapes to PostGIS polylines

[**routes**](#routes) - static table connecting routes to route names, colors and list of stops

[**stops**](#stops) - static table connecting stops to positions and stop names

[**neighborhoods**](#neighborhoods) - static table connecting neighborhood names to geometric multigons

### Vehicles
```
COLUMN              TYPE              
----------------------------------
timestamp           timestamptz
vehicle_id          smallint                
lat                 numeric(10,7)           
lon                 numeric(10,7)           
occupancy           smallint                
direction_id        smallint                
bearing             smallint                
current_status      smallint                
current_stop_seq    integer                 
stop_id             integer                 
active              boolean                 
route_id            varchar(20)   
speed_mph           numeric(6,2)            
trip_id             varchar(50)   
neighborhood        varchar       
next_stop           text               
```
### Trips
```
COLUMN              TYPE      
-------------------------------
route_id            varchar(20)  
trip_id             varchar(20)  
shape_id            varchar(10)  
direction_id        integer                
```

### Shapes
```
 COLUMN             TYPE         
----------------------------------------------
shape_id            text                     
route_line          geometry(LineString,4326)
total_distance      numeric(10,3)            
```

### Routes
```
COLUMN              TYPE        
--------------------------------------------
route_id            character varying(20)
name                text                 
type                smallint             
color               character varying(7) 
stops               integer[]            
```
### Stops
```
COLUMN              TYPE        
-----------------------------------
stop_id             integer       
name                text          
neighborhood        text          
description         text          
lat                 numeric(10,7) 
lon                 numeric(10,7) 
```

### Neighborhoods
```
COLUMN              TYPE        
-----------------------------------------------
ogc_fid             integer                     
wkb_geometry        geometry(MultiPolygon,4326) 
:id                 character varying           
:version            character varying           
:created_at         timestamp with time zone    
:updated_at         timestamp with time zone    
nhood               character varying    

```