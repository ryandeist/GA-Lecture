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




