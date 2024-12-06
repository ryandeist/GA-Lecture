# EJS - The Locals object
## Passing Data into Templates
When using `res.render()` in Express, an optional object, known as the *Locals Object*, can be included as the seond argument after the template that will be rendered. At it's simplest, it looks like this: 

```
// server.js

app.get('/', (req, res) => {
    res.render('home.ejs', {});
});
```
> The locals object is how we get data in our into the template/ Anything we put into this object will be available to use in the view. 
        
This object defines variables accessible to the view being rendered. When you ass a property to the object, the key will match the variables name that you'll have access to in the EJS file, and the value is what that variable will hold. For Example:

```
// server.js

app.get('/', (req, res) => {
    res.render('home.ejs', { 
        msg: 'Welcome to the home page' 
    });
});
```

## Using data in views
We can now access the `msg` variable within `home.ejs`

```
<!-- views/home.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>We are rendering a page!</h1>
    <p><%= msg %></p> 
</body>
</html>
```

If we refresh the page, we will see the "Welcome to the Home Page" text.

### Handling Complex Data Structures
The locals object is versatile and can handle different data types, including arrays and objects.

Let's pass an object to the page and show the value of one of its properties. 

```
// server.js

app.get('/', (req, res) => {
    res.render('home.ejs', { 
        msg: 'Welcome to the home page' ,
            player: {
                name: "friend"
            }
    });
});
```

Feel free to update the value of `player.name` to something of your choosing and access it in `home.ejs`:

```
<!-- views/home.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>We are rendering a page!</h1>
    <p><%= msg %>, <%= player.name %>!</p> 
</body>
</html>
```

Refresh the page and you should see the "Welcome to the home page, friend!" text.

Next, let's pass an example array of objects representing an inventory of items. Note - we'll also change the value of message. 

```
// server.js

app.get('/', (req, res) => {
    res.render('home.ejs', { 
        msg: 'Here is your inventory',
        player: {
            name: "friend"
        },
        inventory: [
            { name: 'Candle', qty: 4 },
            { name: 'Cheese', qty: 10 },
            { name: 'Phone', qty: 1 },
            { name: 'Tent', qty: 0 },
            { name: 'Torch', qty: 5 }
        ]
    });
});
```

In your EJS file, loop through the `inventory` array to displat each item. 

```
<!-- views/home.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>We are rendering a page!</h1>
    <p><%= msg %>, <%= player.name %>!</p> 
    <ul>
        <% inventory.forEach((item) => { %>
        <li><%= item.name %>: <%= item.qty %></li>
        <% }); %>
    </ul>
</body>
</html>
```

> The locals object is used to pass data to your EJS templates. It's the key to creating interactive and personalized web pages. 