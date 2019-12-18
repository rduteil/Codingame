import sys
import math

def sum_digits(n):
    s = 0
    while n:
        s += n % 10
        n //= 10
    return s

n = int(input())

for i in range(n):
    card = input()
    j = 0
    sumEven = 0
    sumOdd = 0
    for k in range(len(card) - 1, -1, -1):
        if card[k] == " ":
            continue
        if j % 2 == 1:
            sumEven += sum_digits(int(card[k]) * 2)
        else:
            sumOdd += int(card[k])
        j += 1
        
    if (sumEven + sumOdd) % 10 == 0:
        print("YES")
    else:
        print("NO")
