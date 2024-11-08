# Intro to Mongoose
## Concepts
### What is Mongoose?
Mongoose is an *ODM* (Object Document Mapping) library, used to brigde the gap between MongoDB and the Node.js environment. It helps developers translate JavaScript objects to MongoDB documents and vice versa. It accomplishes this through a process called mapping, where the properties of JavaScript objects are aligned with the structure of MongoDB documents. Mongoose also acts as an interface for executing database operations with MongoDB, simplifying the code required for these tasks.

> An ODM, or Object Document Mapping Library, is a a tool that helps convert and manage data between the format used in an application (like JavaScript objects) and the format used in a database (like documents in MongoDB).

Below is a diagram illustrating how Mongoose fits in the full-stack development workflow:

![Diagram showing how Mongoose fits in the Full Stack WF](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-mongoose/concepts/assets/mongoose-diagram.png)

### Why use Mongoose?
MongoDB is a document-oriented database. Instead of storing rigid, table-like structures as in *relational databases*, MongoDB stores data in documents. These documents resemble JavaScript objects and can be highly flexible. Each document in MongoDB can have its own unique structure, which is great for rapid development and managing continuously evolving datasets. However, this flexibility also brings challenges, particularly in maintaining consistency with an applications data. 

This is where Mongoose comes in. Mongoose is used to impose structures on MongoDB documents. It does this through the use of *schemas*, essentially blueprints for the shape of a MongoDB document. With Mongoose providing a structure for our documents, we gain several benefits.

**Data Validation**: Ensures new data adheres to the shape of a schema, promoting consistency within the database.
**Type Casting**: Automatically aligns data types with the type specified within the schema
**Simplified CRUD Operations**: Streamlines creating, reading, updating, and deleting records using familiar JavaScript patterns.

Mongoose not only simplifies complex database operations but also ensures that your data is consistent and reliably structured. 

> A Mongoose *schema* defines the structure of a document within a MongoDB collection, including its fields and data types. 

## Schemas and Models
### Mongoose schemas
Mongoose schemas are like instruction manuals that tell MongoDB how to organize and store your data. When you use Mongoose with MongoDB, a schema is your way of describing what each piece of data should look like. 

A schema in Mongoose is a regular JavaScript object. The values next to each key tell MongoDB what type of data to expect (like text or numbers) and any special rules (like if a field must always have data).

Take a look at the Mongoose schema example below:
```
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});
```

In this example, we define a `todoSchema` with two properties. Each property is assigned a specific data type, like `String`, `Boolean`, or `Number`. These values are known as [`schemaTypes`](https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype), special configuration objects that Mongoose uses to specify the data type of a property.

Mongoose provides eight built-in `schemaTypes`:
* `String`
* `Number`
* `Boolean`
* `Date`
* `[]` (Array)
* `mongoose.Schema.Types.ObjectId`
* `mongoose.Schema.Types.Buffer`
* `mongoose.Schema.Types.Mixed`

> Note that the last three types are specific to Mongoose, not standard JavaScript types
> In JavaScript, the *new* keyword is used before a Mongoose schema to create an instance of that schema. This process constructs a new schema object, applying the structure and rules defined in the schema blueprint to the data that will be stored in the database. Schema is a class provided by Mongoose, with all of the prebuilt options for what data *could* look like. 

### Mongoose models
After establishing a schema with Mongoose, the next step is to compile this schema into a model. The model in Mongoose is akin to an interactive interface, bringing the schema's blueprint to life. It's the practical tool we use to interact with the database for various operations. 

* Models are essential for performing database operations like creating, reading, updating, and deleting (CRUD) records. The provide an array of built-in methods for these tasks.
* The model ensures that any new data introduced to the database conforms to the predefined structure laid out by the schema. This keeps your data consistent and reliable.

To better understand the relationship between a schema and a model, let's use an analogy. Imagine the schema as a detailed architectural blueprint for a house, outlining its structure, the types of materials to be used, and specific design elements. The model, in this context, is like the construction team equipped with tools and knowledge to build the house. They follow the blueprint to construct the house (creating and manipulating documents in the database), ensuring everything is as per the design (schema). Just as a construction team can modify parts of the house or even demolish it, the model can update or delete data in the database, all while adhering to the blueprint's guidelines. 

To compile a schema into a model, we use the [`mongoose.model`](https://mongoosejs.com/docs/models.html#compiling) method. This method takes two primary arguments: 
* A string that specifies in the singular version of the model's name.
* The schema to be compiled into a model.

For example:
```
// Compile the schema into a model:
const Todo = mongoose.model('Todo', todoSchema);

// Export the model:
module.exports = Todo;
```

> When you create a model, Mongoose automatically translates the model's name into the corresponding MongoDB collection name. It pluralizes the name and converts it to lowercase. For instance, a model named 'Todo' would correspond to a collection names 'todos' in MondoDB.

## Defining a Model 
### Getting Started
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

### Define a Schema
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

### Compile the Schema into a model
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

## Creating with a model
### The `create()` method
Mongoose models provide various methods to perform CRUD (Create, Read, Update, Delte) operations. These methods are **asynchronous**, and facilitate the creation, retrieval, modification, and deletion of documents in the database.

A model's [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create()) method is used for adding new documents to the database. It's an asynchronous function that takes an object as an argument and returns the newly created document up successful execution. 

> For the `create()` method to execute successfully, the input object must adhere to the structure defined by the model's schema. If the object does not match the schema, Mongoose will respond with an error

See below the anatomy of the `create()` method:

![anatomy of create()](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-mongoose/creating-with-a-model/assets/create-method.png)

1. **Document Returned**: The newly created document based on the schema
2. **Model**: The Mongoose model (`Todo`) used for the operation.
3. **Model Method**: The `create()` method of the model. 
4. **Object Argument**: The data used to create the document. 

### Creating a new todo
For this demonstration, we'll work within `queries.js`. Our setup here differs from a typical Node/Express application to focus on gaining a familiarity with Mongoose.

#### Import the model
Import the `Todo` model at the top of the `queries.js`:

```
// queries.js
const Todo = require('./models/todo.js');
```

#### Build the `createTodo` function
Build out a function to handle the creation of our new `todo`:"

```
// queries.js

const createTodo = async () => {

  const todoData = {
    text: "Learn JS",
    isComplete: false,
  };
  
  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};
```

> Note: Data will typically arrive on the server via the `request` object, but for this example, we've hard coded some todo data in the function

In the `createTodo` function, we first define an object called `todoData`. It contains the details for our new todo. We then use the `Todo` models `create()` method to add this data as a docuement in the database. If the operation succeeds, the function outputs the newly created `todo` to the console. 

Next, we'll call `createTodo` within the `runQueries` function

```
// queries.js
const runQueries = async () => {
  console.log('Queries running.');
  await createTodo();
};
```

### Running the `createTodo` function
To execute the `createTodo` function, run the `queries.js` file with the following command:

```
node queries.js
```

Check your terminal for the following output:

```
New todo: {
  text: 'Learn JS',
  isComplete: false,
  _id: new ObjectId('65777e33f4a45a8462ae3054'),
  __v: 0
}
```

This output shows the newly created `todo` document. It includes the properties we specified, along with an automatically generated `_id` (a unique identifier assigned by MongoDB) and `_v`(a version key used to keep track of how many updates have been made to the document).

> In Mongoose, every document automatically gets and `_id` property, even if it's not explicitly defined in the schema. The `_id` is a unique identifier generated by Mongoose using MongoDB's `ObjectId` type. It ensures that each document in the database has at least one unique property that we can use to easily find/update/delete it, without affecting other documents. 

## Reading with a model
Mongoose offers several methods for retrieving documents from a MongoDB database. Depending on the requirement, you can fetch a single document, multiple documents, or documents that match a certain criteria. 

### The `find()` method
The `find()` method is used to retrieve all document (or all documents that meet a certain criteria) from a collection. 

Lets take a look at an example:

```
const todos = await Todo.find({});
```

The `find()` method accepts a query object and returns an **Array** of documents from the relevant collection. The query object can outline the search criteria for the documents we wish to return. An empty object `({})` indicates that there are no serach criteria, and all documents in the `Todo` collection should be retrieved.

> The `find()` method will always return an array, even if the array only includes a single result. 

### The `findById()` method
The `findById()` method is used to fetch a **single document** based on its unique`_id`.

Here is an example:

```
const id = "657743d4c3b284c0ef6fd001";
const todo = await Todo.findById(id);
```

The `findById()` method accepts an `ObjectId` and retrieves the document with that unique identifier from the collection. If a `string` value is passed in, Mongoose will automatically convert it into a MongoDB `objectId`.

### The `findOne()` method
The `findOne()` method is useful for finding the **first document** that matches a given criteria. 

Example:

```
const todo = await Todo.findOne({ text: "Learn JS" });
```

The `findOne()` method accepts a query object that specifies the criteria by which to find the document. In the example above, the method will return the first `Todo` document with a `text` value of `Learn JS`.

### Reading Many todos
Let's test of these examples in our queries.js file.

#### Build the `findTodos` function
First we build a function that retrieves a list of `todos`:

```
// queries.js

const findTodos = async () => {
  const todos = await Todo.find({});
  console.log("All todos:", todos);
};
```

Next, we'll call `findTodos` within the `runQueries` function:

```
// queries.js

const runQueries = async () => {
  console.log("Queries running.");
  await findTodos();
};
```

> Make sure to comment out or remove `createTodo() from our last example for the purpose of this exercise. 

### Run the `findTodos` function
To execute the `findTodos` function, run the `queries.js` file with the following command:

```
node queries.js
```

Check the terminal. You should see something similar to what you see below. 

```
All todos: [
  {
    _id: new ObjectId('6573745144784f6dc034e1df'),
    text: 'Learn JS',
    isComplete: false,
    __v: 0
  },
  {
    _id: new ObjectId('6573745bfb58313f9376efe5'),
    text: 'Learn HTML',
    isComplete: false,
    __v: 0
  },
  {
    _id: new ObjectId('6573746529759ca5e8f2779b'),
    text: 'Learn CSS',
    isComplete: false,
    __v: 0
  }
]
```



