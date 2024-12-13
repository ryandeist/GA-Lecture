# Intro to Mongoose - Defining a Model 
## Getting Started
When working with Mongoose, it's good practice to store model definitions in a dedicated `models` directory. Let's create that directory and a file for our `todos` model

```
mkdir models
touch models/todo.js
```

> Model files are always named singularly

In `model/todo.js`, we'll want to accomplish the following: 
1. We define a schema
2. Compile a schema into a model.
3. Export the model

## Define a Schema
First, import `mongoose` into our `models/todo.js` file:

```
// models/todo.js
const mongoose = require('mongoose');
```

Next, define the following schema:

```
const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});
```

## Compile the Schema into a model
Next, compile the `todoSchema` into a model:

```
// models/todo.js
const Todo = mongoose.model('Todo', todoSchema);
```
> Reminder: Models, not schemas, contain the functionality to perform CRUD on a MongoDB collection.

Finally, export the `Todo` model, so that we can access its various model methods throughout the application:

```
module.exports = Todo;
```