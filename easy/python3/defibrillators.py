import sys
import math

victimLon = float(input().replace(',','.'))
victimLat = float(input().replace(',','.'))

n = int(input())

dMin = -1;
idMin = ""

for i in range(n):
    id, name, address, phone, lon, lat = input().split(';')
    lon = float(lon.replace(',','.'))
    lat = float(lat.replace(',','.'))
    x = (lon - victimLon) * math.cos((victimLat + lat) / 2)
    x = x ** 2
    y = (lat - victimLat)
    y = y ** 2
    d = math.sqrt(x + y)
    if dMin == -1 or d < dMin:
        dMin = d
        idMin = name
        
print(idMin)
