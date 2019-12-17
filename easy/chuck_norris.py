import sys
import math

def tobits(s):
    result = []
    for c in s:
        bits = bin(ord(c))[2:]
        # seven zeroes because the characters are coded on 7 bits
        bits = '0000000'[len(bits):] + bits
        result.extend([int(b) for b in bits])
    return result

message = tobits(input())

output = ""
i = 0
while i < len(message):
    output += "00 " if message[i] == 0 else "0 "
    j = 0
    while (i + j) < len(message) and message[i + j] == message[i]:
        output += "0"
        j += 1
    output += " "
    i += j
    
print(output[:-1])
