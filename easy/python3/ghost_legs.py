import sys
import math

width, height = [int(i) for i in input().split()]

topLabels = input().split("  ")

grid = [[0 for i in range(len(topLabels) - 1)] for j in range(height - 2)]

for i in range(height - 2):
    line = input()
    k = 0
    for j in range(1, width, 3):
        if line[j] == "-":
            grid[i][k] = 1
        k += 1
      
bottomLabels = input().split("  ")

for i in range(len(topLabels)):
    column = i
    for j in range(height - 2):
        if column > 0 and grid[j][column - 1] == 1:
            column -= 1
        elif column < (len(topLabels) - 1) and grid[j][column] == 1:
            column += 1
    print(str(topLabels[i]) + str(bottomLabels[column]))
