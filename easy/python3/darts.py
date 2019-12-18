# A group of your friends want to have a dart throwing competition with a unique target.
# They've asked you, their tech savvy friend, to automate the scoring as they often squabble over scoring,
# and have trouble keeping track of who's turn it is to throw.

# The target is a square. The square has a circle inscribed within whose diameter matches the width of the square.
# The circle, in turn, encompasses a diamond whose width from corner to corner matches the circle's diameter.
# The diamond can be thought of as a square rotated by 1/4 PI so that the corners of the square are on the x and y axes.

# Darts landing within the square but not within the circle or diamond are worth 5 points.
# Darts landing within the circle but not within the diamond are worth 10 points.
# Darts landing within the diamond are worth 15 points.

# In the event of a tie, competitors should be ordered as they were in the name list,
# so competitors appearing earlier in the name list are listed earlier in ties.

# Note: Darts landing on the edge of a shape are considered within the shape.
# Note: The center of the square, circle and diamond is at (0,0).

import sys
import math

def in_diamond(x, y, size):
    return (abs(x) + abs(y)) <= size

def in_circle(x, y, size):
    return math.sqrt(x ** 2 + y ** 2) <= size
    
def in_square(x, y, size):
    return abs(x) <= size and abs(y) <= size

size = int(input()) / 2

participants = int(input())

names = {}
for i in range(participants):
    names[input()] = 0
    
throws = int(input())

for i in range(throws):
    throw_name, throw_x, throw_y = input().split()
    throw_x = int(throw_x)
    throw_y = int(throw_y)
    if in_diamond(throw_x, throw_y, size):
        names[throw_name] += 15
    elif in_circle(throw_x, throw_y, size):
        names[throw_name]  += 10
    elif in_square(throw_x, throw_y, size):
        names[throw_name]  += 5
        
scores = [(value, names[value]) for value in sorted(names, key = names.get, reverse = True)]

for i in range(len(scores)):
    print(scores[i][0] + " " + str(scores[i][1]))
