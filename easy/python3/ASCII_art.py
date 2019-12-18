import sys
import math

width = int(input())
height = int(input())
text = input()

letters = []

for i in range(height):
    row = input()
    split = [row[i : i + width] for i in range(0, len(row), width)]
    for j in range(len(split)):
        if len(letters) <= j:
            letters.append([])
        letters[j].append(split[j])


for i in range(height):
    output = ""
    for j in range(len(text)):
        index = ord(text[j].upper()) - 65
        if index < 0 or index > 26:
            index = 26
        output += letters[index][i]
    print(output)
