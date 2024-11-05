# ejs

## Concepts
### Templating for full-stack applications
Learning a templating like EJS is an important step in your full stack development journey. Templates help bridge the gap between back-end logic and front-end presentation. This is because templates allow developers to generate HTML pages dynamically. If any data changes, users can immediately see those changes when the visit a page because the data its self hasnt been hard coded into HTML. 

For Example, consider a social media platform. Each user has their own home page showing their name, photos, updates, etc. Instead of creating unique homepages for each user, templates enable you to design a single layout with placeholders for each users unique data. 

### What is EJS?
Ejs is a templating tool that mixes regular HTML with JavaScript. It's not a framework or a language; it's a method to execute JavaScript within your HTML page. 

Like the social media example. 
> Instead of creating unique homepages for each user, templates enable you to design a single layout with placeholders for each users unique data. 

EJS ulilizes JavaScript to fill these placeholders with user specific data. When a user visits the site, EJS on the server fills in the placeholders with personalized details. The server then sends the complete HTML Page to the user's browser. This process enables the display of tailored information on the website without manually creating new pages for every change.

### Why learn EJS?
EJS is great for creating web application like blogs or e-commerce sites that need content to change based on user interactions or data. It simplifies displaying this dynamic content on your webpages. Learning EJS increases your versatility as a full-stack developer, enabling you to build more complex and interactive web applications using JavaScript. 

Because EJS embeds JavaScript directly into HTML, it is a natural choice for existing JavaSCript Developers to learn. Using JavaScript also makes it easier to manage the webpage's content dynamically, offering options for conditional rendering and complex page layouts. 

## Fundamentals 
### Getting started with EJS `views`
In the context of EJS (Embedded JavaScript) and web development, *views* are template files that contain a mix of HTML and JavaScript. These files are used generate HTML content dynamically.

#### Installing EJS
To add EJS to your project, you need to install using `npm`:

`npm i ejs`
> EJS and other view engines are unique - we don't need to require them in server.js to use them - Express knows how to find them on their own. 

### Organizing `.ejs` files.
In Express Applications, there's a convention for organizing your ejs templates. Express automatically searches for these templates in a specific folder named `views` Store all your EJS template files in this directory and its sub directories to keep things organized and functioning correctly. 

> This is a repeatable pattern. template engines will always search for a views directory inside of the root directory. 

1. First, crete a new directory name 'views' in your project. This is where all of your `.ejs` files will live.

    `mkdir views`

2. Next, create your first .ejs template. Let's name it `home.ejs` This file will serve as the template for your homepage. 

    `touch views/home.ejs`
    > EJS files will always have a .ejs extension

3. Finally, inside of `home.ejs`, add some HTML boilerplate with ! + tab. 

Change the `<title>` to `Home` Inside the body, add an `<h1>` with the text content `We are rendering an EJS page!` 
            
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
    <h1>We are rendering an EJS page!</h1>
</body>
</html>
```

### EJS rendering in Express
When working with Express and EJS, we transition from using `res.send()` to send plain text responbses to using `res.render()` to display complete HTML pages created with EJS templates.

1. Open `server.js` and take a look at the example route. Here, we used `res.send()` to send back responses. 

```
// server.js

app.get('/', (req, res) => {
    res.send('The server is running!');
});
```

2. To render EJS, we'll replace `res.send()` with `rex.render()`. This informs Express to generate a full HTML page using an EJS template and then respond to the client with the generated template. 

The `res.render()` function requires one argument - the name of the EJS file or -view- you want to use. For example, we can render our templete file named `home.ejs` located in the views directory. 

```
// server.js

app.get('/', (req, res) => {
    res.render('home.ejs');
});
```
        
> `res.render('home.ejs')` instructs Express to look for `home.ejs` in the `view` directory and use it to create the HTML response. We don't need to include the `views` directory here because Express knows to look inside that directory to find templates to render automatically. 

Refresh your browser to see the updated header. 

## Syntax
### EJS Syntax
There are a variety of EJS Tags to embed JavaScript code directly into a template. The two primary tags youll be using are the *Scriptlet* tags and *output* tags. 
        
### Scriptlet tag

The scriptlet tag `<% %>` executes JavaScript code within an EJS file. Any code written between these tags is treated as regular JavaScript. This code won't directly produce any visible output in the HTML. 

This tag adds control flow logic to EJS templates.

#### Using the scriptlet tag
To use the scriptlet tag, write JavaScript logic between <% %>.

Do this (scriptlet for each line of JS)
```javascript
<% if(true) { %>
    <p>This shows up!</p>
<% } else { %>
    <p>Something else!</p>
<% } %>
```


Not this,
            
```javascript
<% if(true) {
    <p>This shows up!</p>
} else {
    <p>Something else!</p>
} %>
```

### Output Tag
The output tag <%= %> allows you to display the results of JavaScript expressions directly in your HTML. 

You'll use this to insert dynamic data into your HTML. Use it to display variables, calculations, or anything that resilves to t a single value. 

#### Using the output tag
To use this tag, write your JavaScript between <%= %>. Note that if you write the following code and refresh the page, you'll receive an error, but as an example:

`<p>Welcome, <%= player.name %></p>`

The output tag is ideal for accessing object properties, as shown above, or simple expressions like arithmetic operations. For example:

'<p>2 plus 2 is <%= 2 + 2 %><p>

This will display `2 plus 2 is 4` in the paragraph.

Note that the closing tags for EJS tags are the same %>

> Keep complex logic out of your templates to make them easier to understand. Complex logic is better handled on the back end. 

## The Locals object
### Passing Data into Templates
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

### Using data in views
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

#### Handling Complex Data Structures
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

## Adding a Show route
### Show route
Next, we'll add a show route to our app. The end goal is for each of the <li>s in our inventory list to become clickable links that take us to a page with information about the specific item we clicked on. This is typically referred to as a `show` page. 

We'll begin by organizing our data and setting up our show route. This route will enable users to view details of specific items by clicking on them in a list. 

### Organizing Data
In `server.js`, move the `inventory` array from the route handler to a global variable called `inventory`. This maske the data accessible to other route functions. 
 ```
// server.js

const express = require('express');
const app = express();

// add the following:
const inventory = [
    { name: 'Candle', qty: 4 },
    { name: 'Cheese', qty: 10 },
    { name: 'Phone', qty: 1 },
    { name: 'Tent', qty: 0 },
    { name: 'Torch', qty: 5 }
]

app.get('/', (req, res) => {
    res.render('home.ejs', { 
        msg: 'Here is your inventory',
        player: {
            name: "friend"
        },
        // change the following line to: 
        inventory: inventory,
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
```

> Nothing has changed in terms of functionality; you can refresh the home page and every thing is the same as before. However, now the other functions can also access the data held in inventory. 

### Updating home.ejs 
Next, in `home.ejs`, modify the list items to be clickable links, each directing to a unique route based on the item's index.

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
        <!-- Add the index parameter -->
        <% inventory.forEach((item, index) => { %>
        <!-- Wrap each li in an <a> tag -->
        <a href="/<%= index %>">
            <li><%= item.name %>: <%= item.qty %></li>
        </a>
        <% }); %>
    </ul>
</body>
</html>
```

### Establishing the `show` route
At the moment, these links will all throw errors. This is because we have not established a route for them yet. 

Create a new route in `server.js` that listens for requests /:itemId and logs the reqs.params object.
        
```
// server.js

app.get('/:itemId', (req, res) => {
    console.log(req.params);
});
```

For now, all this route will do is listen for a request and then console.log the attached req.params. Click on a few of the links in the browser and examine your terminal. You should see that reqs.params is an object that looks something like {itemId: 1}, where 1 will be replaced by the item you clicked on. 

#### Pass data to `show` page
We've established that 'req.params.itemId' holds the index value of whichever index object was clicked on. Lets make a new vaiable called index and set it equal to that. 

Modify the '/:itemId' route to render a `show.ejs` page with the corresponding *item data* based on the clicked items `index`. We haven't created the show page for this yet, but we will soon. 

```
// server.js

app.get('/:itemId', (req, res) => {
    const index = req.params.itemId;
    // render show.ejs, and pass it a single item object 
    res.render('show.ejs', {
        item: inventory[index]
    });
});
```

Because the list on our index page is generated from the `inventory` array, we can safelt predict the order of the links will be identical to the of the objects in the array. If we click *Candle* - the first element in our `inventory` - we expect `req.params.itemId` to equal `0`

> In real world applications, we'd use something more sophisitcated to retrieve data rather than relying on the index, however for the purposes of this demo indices will work. 

### Rendering the `show` page
Next, our goal is to ensure that when a user clicks on an item in our list, our application will display a page speifically dedicated to that item. This page will show detailed information about the item clicked.

To achieve this, we first need to create a new EJS template file. Create a new EJS file named `shoe.ejs` in the views directory:

`touch views/show.ejs`

Add HTML content to `show.ejs`, making use of the `item` object to display specific details. 

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

## Expressions in EJS Output Tags
### Expressions vs. Statements in JavaScript
Remember, we can only write JavaScript expressions inside the EJS output tags <%= %>. JavaScript expressions evaluate to a single value. They can be: 

- Assigned to a variable.
- Provided as an argument to a function
- Returned from a function
- Passed to a `console.log`

### Using conditional expressions
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

## Partial Templates
### Why use partial templates?
Imagine an app with several different pages, each needing a navigation bar at the top. You **might** initially copy and paste the same HTML for the nav bar across all these pages. But what happens when you need to update the nav bar? Updating manually is tedious and can lead to errors. 

EJS includes the ability to make out views more DRY by using **partial** templates. Partial templates are essentially reuseable bits of template code that can be included in any EJS file. With a partial template, you can define you nab bar just once, and then include it in each view. Even better, if we need to make a change to the `nav`, we only need to touch one file. 

### Inserting partial templates. 
The `<%- %> EJS tags allow us to output HTML, meaning we can directly inject HTML code from the other files into our views. 

To include a partial template, use the following syntax. 

`<%- include('filename') %>`

### Creating Partial Templates
To demonstrate, let's create some partial templates

```
mkdir views/partials
touch views/partials/html-head.ejs
touch views/partials/nav.ejs
``` 
        
#### Creating a partial for HTML head
Since our HTML boilerplate is consistent across views, we'll create a partial for it. 

In `partials/html-head.ejs`, add: 

```
<!-- partials/html-head.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventory App</title>
</head>
<body>
```

> Note that we dont close the `<html>` or `<body>` tags - that's okay, these are called partial for a reason. It will be closed in the file where parital is imported. This concept is important - it lets your partials be very flexible. 

For example, if we wanted to customize what's in the html's <head> on each page (so we could do things like use page specific stylesheets) you may prefer to the closing </head> out of this file.

#### Creating a nav bar partial
Next, in `partials/nav.ejs`, add the following: 

```
<nav>
    <a href="/">Home</a>
    <a href="/link-two">Example Link 2</a>
    <a href="/link-three">Example Link 3</a>
</nav>
```

These example links will not work just yet. 

#### Refactoring `home.ejs` with partials
With these partials created, we can refactor `home.ejs`

Replace existing boilerplate in `home.ejs` with partial templates:

```
    <%- include('./partials/html-head') %>
    <%- include('./partials/nav') %>
    <h1>We are rendering a page!</h1>
    <p><%= msg %></p>
    <ul>
        <% inventory.forEach((item, index)=>{ %>
        <a href="/<%= index %>">
            <li>
                <%= item.name %>: <%= item.qty %>
            </li>
        </a>
        <% }) %>
    </ul>
</body>
</html>
```

#### Using Partials in `show.ejs`
Finally, let's reuse the same partials to include our nav bar in `show.ejs`:

```
<%- include('./partials/html-head') %>
<%- include('./partials/nav') %>
    <h1>Welcome to the <%= item.name %> page!</h1>
    <p>There are <%= item.qty %> left.</p>
</body>
</html>
```

#### Updating the nav bar
Now that we have a nav bar that is resuable across our view, we can make a change to the nav bar on every view just by editing `nav.ejs`

For example:
            
```
<nav>
    <a href="/">Home</a>
    <a href="/0">Candle Page</a>
    <a href="/1">Cheese Page</a>
</nav>
```

If we check the browser, we can see that this is updated everywhere. Now, when the user navigates to a `show` route, they can use the `home` link rather than the back button. 




