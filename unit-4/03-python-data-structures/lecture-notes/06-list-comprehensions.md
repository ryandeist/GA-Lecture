# Python Data Structures - List Comprehensions 

## What are list comprehensions?
***List comprehensions*** are a powerful feature in Python.

They provide a concise way to create and work with lists. They’ll likely seem confusing at first, but they are a favorite of Python fans, and you will probably come across them when googling.

## Numerical example
Say we needed to square all of the numbers in a list and put them into a new list, we might use a for loop like this:

```py
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = []

# we want 'n * n' for each 'n' in nums 
for n in nums:
    squares.append(n * n)

print(squares)
# prints [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

A list comprehension can reduce this code:

```py
squares = []
for n in nums:
    squares.append(n * n)
```

To this:

```py
squares = [n * n for n in nums]
```
> 🧠 List comprehensions always return a new list, leaving the original list unmodified.

## Basic syntax
Here’s the basic syntax of a list comprehension:

```py
# [<expression> for <item> in <list>]
# This reads as: I want <expression> for each <item> in <list>
```
As you can see, a list comprehension is basically a modified `for in` loop within square brackets, which returns a new list.

## Filtering the items
We just saw how list comprehensions are an excellent way to map a list, but they can be used for **filtering** too.

Again, let’s start with a non-comprehension approach by using a `for in` loop to map and filter `nums`:

```py
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = []

# we want 'n * n' for each 'n' in nums  if 'n * n' is even
for n in nums:
    square = n * n 
    if square % 2 == 0:
        even_squares.append(square)

print(even_squares)
# prints: [4, 16, 36, 64, 100]
```

Again, list comprehensions reduce the above from:

```py
even_squares = []
for n in nums:
    square = n * n 
    if square % 2 == 0:
        even_squares.append(square)
```

To this one-liner:

```py
even_squares = [n * n for n in nums if (n * n) % 2 == 0]
```