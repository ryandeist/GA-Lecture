# EJS - Syntax
## EJS Syntax
There are a variety of EJS Tags to embed JavaScript code directly into a template. The two primary tags youll be using are the *Scriptlet* tags and *output* tags. 
        
## Scriptlet tag

The scriptlet tag `<% %>` executes JavaScript code within an EJS file. Any code written between these tags is treated as regular JavaScript. This code won't directly produce any visible output in the HTML. 

This tag adds control flow logic to EJS templates.

### Using the scriptlet tag
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

## Output Tag
The output tag <%= %> allows you to display the results of JavaScript expressions directly in your HTML. 

You'll use this to insert dynamic data into your HTML. Use it to display variables, calculations, or anything that resilves to t a single value. 

### Using the output tag
To use this tag, write your JavaScript between <%= %>. Note that if you write the following code and refresh the page, you'll receive an error, but as an example:

`<p>Welcome, <%= player.name %></p>`

The output tag is ideal for accessing object properties, as shown above, or simple expressions like arithmetic operations. For example:

'<p>2 plus 2 is <%= 2 + 2 %><p>

This will display `2 plus 2 is 4` in the paragraph.

Note that the closing tags for EJS tags are the same %>

> Keep complex logic out of your templates to make them easier to understand. Complex logic is better handled on the back end. 
