# EJS - Expressions in EJS Output Tags
## Expressions vs. Statements in JavaScript
Remember, we can only write JavaScript expressions inside the EJS output tags <%= %>. JavaScript expressions evaluate to a single value. They can be: 

- Assigned to a variable.
- Provided as an argument to a function
- Returned from a function
- Passed to a `console.log`

## Using conditional expressions
Let's examine the code for our show page. 

```
<!-- views/show.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= item.name %></title>
</head>
<body>
    <h1>Welcome to the <%= item.name %> page!</h1>
    <p>There are <%= item.qty %> left.</p>
</body>
</html>
```

There is a slight grammatical error when we visit a page if there is only one item left - you can see this on the phone's page in our example. 

This can be fixed with some conditional logic using an expression, like a ternary. 

```
<!-- views/show.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= item.name %></title>
</head>
<body>
    <h1>Welcome to the <%= item.name %> page!</h1>
    <p>There <%= item.qty === 1 ? "is" : "are" %> <%= item.qty %> left.</p>
</body>
</html>
```
        
With this ternary, the proper grammer will be used for pural or singlar on our items show page. Most logic should be handled outside of the view, but for smaller logic we can express it in the view. 