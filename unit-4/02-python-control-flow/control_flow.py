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
