print(7 == 7)
# prints: True
# 7 is equal to 7

print(7 == "7")
# prints: False 
# 7 is an integer, and "7" is a string

print(7 != 7)
# prints: False
# 7 is equal to 7

print(7 != "7")
# prints: True 
# 7 is an integer, and "7" is a string; therefore, they cannot be equal

print(8 > 8)
# prints: False 
# 8 is not greater than 8

print(8 >= 8)
# prints: True 
# 8 is greater than or equal to 8 (equal)

print(8 < 8)
# prints: False 
# 8 is not less than 8

# or
# returns the first truthy operand, or the last operand

print(True or False)
# prints: True

print(False or True)
# prints: True

print(False or False)
# prints: False

print('hello' or 0)
# prints: 'hello'

print(0 or 'hello')
# prints: 'hello'

print('hello' or 'tacos')
# prints: 'hello'

# and
# returns the first falsy operand, or the last operand

print(True and False)
# prints: False

print(False and True)
# prints: False

print('hello' and 0)
# prints: 0

print(0 and 'hello')
# prints: 0

print('hello' and 'tacos')
# prints: 'tacos'

# or
# returns the first truthy operand, or the last operand

print(True or True or True)
# prints: True

print(True or True or False)
# prints: True

# and
# returns the first falsy operand, or the last operand

print(True and True and True)
# prints: True

print(True and True and False)
# prints: False

print(not False)
# prints: True

print(not 'hello')
# prints: False

floor = "sticky"
walls = "clean"

# notice the colon ':' after the conditional expression
# it indicates the start of the if block
if floor == "sticky":
    print("Clean the floor! It's sticky!")
    # this is where you would add more lines of code related to the condition
    # each line must be indented to be part of the 'if' block

# unindented code indicates that we have returned to normal code execution
print("This will always print, it's not inside of an if block!")

# parentheses are not required around the conditional expression
if walls == "sticky":
    print("Clean the walls! They're sticky!")
    
    val = 3

# if path
if val == 1:
    print('val is one')
# else path
else:
    print('val is not one')
    # prints: val is not one
    # since val is not 1, the else path is taken

val = 3

if val == 1:
    print('val is one')
elif val == 2:
    print('val is two')
elif val == 3:
    print('val is three')
    # prints: val is three
    # since val is 3, this elif path is taken
else:
    print('not one, two, or three')
