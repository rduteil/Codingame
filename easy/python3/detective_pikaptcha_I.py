import sys
import math

dimensions = input().split()

width = int(dimensions[0])
height = int(dimensions[1])

lines = []

for i in range(height):
    lines.append(input())

grid = [[0 for i in range(height)] for j in range(width)]

for i in range(width):
    for j in range(height):
        if lines[j][i] == "0":
            if i > 0 and grid[i - 1][j] != -1:
                grid[i - 1][j] += 1
            if i < width - 1 and grid[i + 1][j] != -1:
                grid[i + 1][j] += 1
            if j > 0 and grid[i][j - 1] != -1:
                grid[i][j - 1] += 1
            if j < height - 1 and grid[i][j + 1] != -1:
                grid[i][j + 1] += 1
        else :
            grid[i][j] = -1
            
for i in range(height):
    output = ""
    for j in range(width):
        if(grid[j][i] == -1):
            output += "#"
        else:
            output = output + str(grid[j][i])
    print(output)
