import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())  # Number of elements which make up the association table.
q = int(input())  # Number Q of file names to be analyzed.
d = {}

for i in range(n):
    ext, mt = input().split()
    d[ext.lower()] = mt;

for i in range(q):
    fname = input()
    ext = fname.split(".")
    
    if len(ext) < 2 or ext[len(ext) - 1].lower() not in d.keys():
        print("UNKNOWN")
    else:
        print(d[ext[len(ext) - 1].lower()])
