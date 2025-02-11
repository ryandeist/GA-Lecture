# Python Control Flow - Ternary Expressions

## Ternary expressions
In JavaScript, we used the ternary expression to return one of two values concisely, depending on the result of evaluating a conditional expression. For example:

```js
// With a ternary expression
let timeOfDay = 9
let morning = timeOfDay < 12 ? true : false;

// Without a ternary expression
let timeOfDay = 9
let morning;
if (timeOfDay < 12) {
  morning = true;
} else {
  morning = false;
}
```

Python does not have a dedicated ternary operator. Instead, Python uses a modified syntax of `if`/`else`, which results in a ternary expression instead of a control flow construct.

The Python ternary expression equivalent to the JavaScript example above is:

```py
time_of_day = 9
morning = True if time_of_day < 12 else False
print(morning)
# prints: True
```