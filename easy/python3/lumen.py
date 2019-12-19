import sys
import math

size = int(input())
light = int(input())

candles = []

for i in range(size):
    line = input().replace(' ', '')
    for j in range(size):
        if line[j] == "C":
            candles.append([j, i])

darkNumber = 0
dark = True
for i in range(size):
    for j in range(size):
        for k in range(len(candles)):
            if abs(candles[k][0] - j) < light and abs(candles[k][1] - i) < light:
                dark = False
                break;
        if dark:
            darkNumber += 1
        dark = True

print(darkNumber)
