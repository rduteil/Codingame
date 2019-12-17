import sys
import math

n = int(input())

for i in range(n):
    x = input()
    xBis = str(x)
    y = 0
    while y != 1:
        for j in range(len(xBis)):
            y += int(xBis[j])**2
        if y == 4:
            print(str(x) + " :(")
            break
        if y == 1:
            print(str(x) + " :)")
            break
        xBis = str(y)
        y = 0
