import sys
import math

n, m, c = [int(i) for i in input().split()]

toggles = [False for i in range(n)]

consumptions = []

for i in input().split():
    consumptions.append(int(i))
    
maxConsumption = 0
currentConsumption = 0 


for i in input().split():
    index = int(i) - 1
    toggles[index] = not toggles[index]
    if toggles[index]:
        currentConsumption += consumptions[index]
    else:
        currentConsumption -= consumptions[index]
    if currentConsumption > c:
        print("Fuse was blown.")
        exit()
    maxConsumption = max(currentConsumption, maxConsumption)
    
print("Fuse was not blown.")
print("Maximal consumed current was " + str(maxConsumption) + " A.")
