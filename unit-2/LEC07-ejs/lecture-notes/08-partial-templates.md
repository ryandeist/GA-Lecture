# EJS - Partial Templates
## Why use partial templates?
Imagine an app with several different pages, each needing a navigation bar at the top. You **might** initially copy and paste the same HTML for the nav bar across all these pages. But what happens when you need to update the nav bar? Updating manually is tedious and can lead to errors. 

EJS includes the ability to make out views more DRY by using **partial** templates. Partial templates are essentially reuseable bits of template code that can be included in any EJS file. With a partial template, you can define you nab bar just once, and then include it in each view. Even better, if we need to make a change to the `nav`, we only need to touch one file. 

## Inserting partial templates. 
The `<%- %> EJS tags allow us to output HTML, meaning we can directly inject HTML code from the other files into our views. 

To include a partial template, use the following syntax. 

`<%- include('filename') %>`

## Creating Partial Templates
To demonstrate, let's create some partial templates

```
mkdir views/partials
touch views/partials/html-head.ejs
touch views/partials/nav.ejs
``` 
        
### Creating a partial for HTML head
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

### Creating a nav bar partial
Next, in `partials/nav.ejs`, add the following: 

```
<nav>
    <a href="/">Home</a>
    <a href="/link-two">Example Link 2</a>
    <a href="/link-three">Example Link 3</a>
</nav>
```

These example links will not work just yet. 

### Refactoring `home.ejs` with partials
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

### Using Partials in `show.ejs`
Finally, let's reuse the same partials to include our nav bar in `show.ejs`:

```
<%- include('./partials/html-head') %>
<%- include('./partials/nav') %>
    <h1>Welcome to the <%= item.name %> page!</h1>
    <p>There are <%= item.qty %> left.</p>
</body>
</html>
```

### Updating the nav bar
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
