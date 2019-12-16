# Given a rugby score, your program must compute the different
# scoring combinations that lead to that particular score.

import sys
import math

n = int(input())

for i in range(0, n + 1, 5):
    remainder = n - i
    for j in range(0, i//5 + 1):
        second = remainder - (j * 2)
        if second >= 0 and second % 3 == 0:
            print(str(i//5) + " " + str(j) + " " + str(second//3))
