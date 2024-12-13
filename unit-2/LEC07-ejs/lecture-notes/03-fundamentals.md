# EJS - Fundamentals 
## Getting started with EJS `views`
In the context of EJS (Embedded JavaScript) and web development, *views* are template files that contain a mix of HTML and JavaScript. These files are used generate HTML content dynamically.

### Installing EJS
To add EJS to your project, you need to install using `npm`:

`npm i ejs`
> EJS and other view engines are unique - we don't need to require them in server.js to use them - Express knows how to find them on their own. 

## Organizing `.ejs` files.
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

## EJS rendering in Express
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