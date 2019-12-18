# You must determine whether a given expression has valid brackets.
# This means all the parentheses (), square brackets [] and curly brackets {} must be correctly paired & nested.

import sys
import math

expression = input()
stack = [];

for i in range(len(expression)):
    if expression[i] == "(":
        stack.append("(")
    elif expression[i] == "[":
        stack.append("[")
    elif expression[i] == "{":
        stack.append("{")
    elif expression[i] == ")":
        if len(stack) == 0 or stack.pop() != "(":
            print("false")
            exit()
    elif expression[i] == "]":
        if len(stack) == 0 or stack.pop() != "[":
            print("false")
            exit()
    elif expression[i] == "}":
        if len(stack) == 0 or stack.pop() != "{":
            print("false")
            exit()

if len(stack) != 0:
    print("false")
else:
    print("true")
