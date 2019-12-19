import sys
import math

x = int(input())
n = int(input())

bricks = []

for i in input().split():
    bricks.append(int(i))
    
bricks.sort(reverse = True)

work = 0
level = 0
for i in range(n):
    if i > 0 and i % x == 0:
        level += 1
    work += ((level * 6.5 / 100) * 10 * bricks[i])
        
print('%.3f' % work)
