# Python Control Flow - Truthy and Falsy

## Truthy and falsy in Python
Like JavaScript, every piece of data in Python is considered either ***truthy*** or ***falsy***.

Conditional expressions used to construct branching and looping code rely on an expression evaluating to `True`/truthy or `False`/falsy to determine which path the code will follow.

Just like in JavaScript, most things in Python are considered to be truthy, so it’s easier to remember what is falsy instead.

Here’s what’s ***falsy*** in Python:

- `False`
- `None`
- Zero in any numeric type: `0` `0.0`
- Empty sequences or collections:
    - `''` (empty string)
    - `[]` (empty list)
    - `()` (empty tuple)
    - `{}` (empty dictionary)
    - `range(0)` (empty range)

> 🧠 The first thing you might notice here is how closely this aligns with what is falsy in JavaScript. Note that `[]` and `{}`in JavaScript are truthy, but falsy in Python.