# Intro to SPAs - Core Technologies

## JavaScript
SPAs rely extensively on JavaScript to construct and update the user interface, allowing content on a page to change dynamically. JavaScript handles the user interactions and can suppress default browser behavior that would typically load a new HTML page. 

## Routing on the Client Side
Despite the application being a single page, it can mimic the behavior of a multi-page application using client-side routing. This differs from traditional server-side routing, where each request loads a new HTML page. 

## Asynchronous JavaScript and XML (AJAX)
AJAX allows applications to make HTTP requests to servers asynchronously using JavaScript. This means that data used by an application can be delivered seperately from HTML and JavaScript files themselves. Although XML (a data format) is in the name, the primary format we'll use to exchange data is JSON.

## JavaScript Object Notation (JSON)
JSON is not only a format for configuring settings for an application, like you may be familiar with. It can also be used as a data interchange format to structure data send between a server and a web application. 

## Client-Side Rendering 
In a SPA, the UI for a page isn't constructed by a server. Instead, it is constructed by the client's browser - this is client side-side rendering. JavaScript dynamically manipulates the DOM (Document Object Model) to update the UI, typically in response to user actions or AJAX operations. This leads to a more responsive user experience, similar to native applications. 

## State Management 
SPAs maintain an application's state on the client side. This involves tracking user interactions and data changes across the applications life-cycle. This is critical for ensuring the UI remains consistent with the applications state. 

Often, JSON data retrieved using AJAX is stored in a state. This data can be accessed, modified, or deleted. Because the application keeps the UI synchronized with the state, these changes are reflected on the client without needing a server to generate new HTML. 

## ECMAScript Modules (ESM)
ECMAScript modules are native to JavaScript and allows code to be packaged and reused. This means code can be better structured and organized into reusable components, facilitating the development of large-scale applications without excessive code duplications