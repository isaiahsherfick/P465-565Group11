from places import *
chicago_long, chicago_lat = -87.672902, 41.8891078
chicago = Place(chicago_lat, chicago_long)
#print(chicago.getLongitude())
#print(chicago.getLatitude())
chicago.initFromAPI(20000)
print(chicago.getUnfilteredAPIResults())