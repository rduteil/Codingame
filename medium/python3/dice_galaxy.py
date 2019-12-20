import sys
import math

w = int(input())
h = int(input())

ones = []
sixes = []
dices = []

for i in range(h):
    line = input()
    for j in range(w):
        if line[j] == ".":
            continue
        elif line[j] == "#" or line[j] == "6":
            dices.append([j, i])
        else:
            ones.append([j, i])
            
for i in ones:
        # Right right
        if ([item for item in dices if item[0] == i[0] + 1 and item[1] == i[1]] and
            [item for item in dices if item[0] == i[0] + 2 and item[1] == i[1]]):
            sixes.append([i[0] + 2, i[1]])
            continue
        # Left left
        elif ([item for item in dices if item[0] == i[0] - 1 and item[1] == i[1]] and
              [item for item in dices if item[0] == i[0] - 2 and item[1] == i[1]]):
            sixes.append([i[0] - 2, i[1]])
            continue
        # Top top
        elif ([item for item in dices if item[0] == i[0] and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] and item[1] == i[1] - 2]):
            sixes.append([i[0], i[1] - 2])
            continue
        # Bottom bottom
        elif ([item for item in dices if item[0] == i[0] and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] and item[1] == i[1] + 2]):
            sixes.append([i[0], i[1] + 2])
            continue
        # Left top left
        elif ([item for item in dices if item[0] == i[0] - 1 and item[1] == i[1]] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] - 2 and item[1] == i[1] - 1]):
            sixes.append([i[0] - 2, i[1] - 1])
            continue
        # Left bottom left
        elif ([item for item in dices if item[0] == i[0] - 1 and item[1] == i[1]] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] - 2 and item[1] == i[1] + 1]):
            sixes.append([i[0] - 2, i[1] + 1])
            continue
        # Right top right
        elif ([item for item in dices if item[0] == i[0] + 1 and item[1] == i[1]] and
              [item for item in dices if item[0] == i[0] + 1 and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] + 2 and item[1] == i[1] - 1]):
            sixes.append([i[0] + 2, i[1] - 1])
            continue
        # Right bottom right
        elif ([item for item in dices if item[0] == i[0] + 1 and item[1] == i[1]] and
              [item for item in dices if item[0] == i[0] + 1 and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] + 2 and item[1] == i[1] + 1]):
            sixes.append([i[0] + 2, i[1] + 1])
            continue
        # Bottom left bottom
        elif ([item for item in dices if item[0] == i[0] and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] + 2]):
            sixes.append([i[0] - 1, i[1] + 2])
            continue
        # Bottom right bottom
        elif ([item for item in dices if item[0] == i[0] and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] + 1 and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] + 1 and item[1] == i[1] + 2]):
            sixes.append([i[0] + 1, i[1] + 2])
            continue
        # Top left top
        elif ([item for item in dices if item[0] == i[0] and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] - 2]):
            sixes.append([i[0] - 1, i[1] - 2])
            continue
        # Top right top
        elif ([item for item in dices if item[0] == i[0] and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] + 1 and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] + 1 and item[1] == i[1] - 2]):
            sixes.append([i[0] + 1, i[1] - 2])
            continue
        # Bottom right right bottom
        elif ([item for item in dices if item[0] == i[0] and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] + 1 and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] + 2 and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] + 2 and item[1] == i[1] + 2]):
            sixes.append([i[0] + 2, i[1] + 2])
            continue
        # Bottom left left bottom
        elif ([item for item in dices if item[0] == i[0] and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] - 2 and item[1] == i[1] + 1] and
              [item for item in dices if item[0] == i[0] - 2 and item[1] == i[1] + 2]):
            sixes.append([i[0] - 2, i[1] + 2])
            continue
        # Top right right top
        elif ([item for item in dices if item[0] == i[0] and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] + 1 and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] + 2 and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] + 2 and item[1] == i[1] - 2]):
            sixes.append([i[0] + 2, i[1] - 2])
            continue
        # Top left left top
        elif ([item for item in dices if item[0] == i[0] and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] - 2 and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] - 2 and item[1] == i[1] - 2]):
            sixes.append([i[0] - 2, i[1] - 2])
            continue
        # Left top top left
        # Left bottom bottom left
        # Right top top right
        # Right bottom bottom right
        # Left top top top left
        elif ([item for item in dices if item[0] == i[0] - 1 and item[1] == i[1]] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] - 1] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] - 2] and
              [item for item in dices if item[0] == i[0] - 1 and item[1] == i[1] - 3] and
              [item for item in dices if item[0] == i[0] - 2 and item[1] == i[1] - 3]):
            sixes.append([i[0] - 2, i[1] - 3])
            continue
        # Left bottom bottom bottom left
        # Right top top top right
        # Right bottom bottom bottom right
        # Bottom left left left bottom
        # Bottom right right right bottom
        # Top left left left top
        # Top right right right top
        
        # A true solution should act as a trie, starting from each one of the 4 directions and testing all paths
        # from there, ie testing if the case on the left is valid only once
        

for i in range(h):
    line = ""
    for j in range(w):
        if [item for item in ones if item[0] == j and item[1] == i]:
            line += "1"
        elif [item for item in sixes if item[0] == j and item[1] == i]:
            line += "6"
        elif [item for item in dices if item[0] == j and item[1] == i]:
            line += "#"
        else:
            line += "."
    print(line)
