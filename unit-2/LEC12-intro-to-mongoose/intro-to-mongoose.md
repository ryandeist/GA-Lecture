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

## Updating with a model
Updating a document involves modifying its existing data while maintaining data integrity. Mongoose provides several methods for updating documents, each suitable for different scenarios.

### Updating retrieved documents
One common approach to updating a document is to first retrieve the document, and then apply the neccessary changes. This can be useful when you need to check the authorship of a resource before performing an operation. 

The approach involves two steps:

1. **Retrieve the document**: Use the `findBy()` method to fetch the document you want to update. 
2. **Apply the changes and save**: Modify the document's properties as needed and then save the changes using the `save()` method. 

For example: 

```
const id = '6573745144784f6dc034e1df';
const todo = await Todo.findById(id);
todo.isComplete = true;
await todo.save();
```

After retrieving the `todo` document, we update the `isComplete` property in the same way we would modify any regular JavaScript object property. Once this modification is made, the *`save()`* method is called on the `todo` instance to persist the changes to the database.

> The *`save()`* method is available on a Mongoose document instance (a retrieved document). When called on a document instance, it either inserts or updates the document in the database. 

### Simultaneous retrieval and update
Another approach to updating documents is using the `findByIdAndUpdate()` method. This method allows you to find a docuement by is `_id` and update it. It has the advantage of completing an update with a single operation.

The `findByIdAndUpdate()` method accepts 3 arguments and returns a single document:
1. **`ObjectId`**: The unique identifier (`_id`) of the document you to update.
2. **Update Object**: An object that specifies the changes to apply to the document.
3. **Options Object**: An optional object used to specify various settings for the operation. 

For example:

```
const id = '6573745144784f6dc034e1df';
const updatedTodo = await Todo.findByIdAndUpdate(
  id,
  { isComplete: true },
  { new: true }
);
```

In this example, we are finding a specific document with the value of the `id` variable. The second argument is our **update object**, which sets the document's `isComplete` property to `true`. The third argument is an *options object* `{new: true}`, specifiying that the modified document should returned, not the original.

### Implementing `findByIdAndUpdate()`
To test some examples in our `queries.js` file.

#### Build an `updateTodo` function
Firstly, build a function for updating our todo:

```
// queries.js

const updateTodo = async () => {
  const id = '6573745144784f6dc034e1df';
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { isComplete: true },
    { new: true }
  );
  console.log("Updated todo:", updatedTodo);
};
```

Next, call `updateTodo` within the `runQueries` function:

```
// queries.js

const runQueries = async () => {
  console.log('Queries running.');
  await updateTodo();
};
```
> Ensure that other previous methods in this function have been commented out or removed for the sake of this exercise. 

### Run the `updateTodo` function
To execute the `updateTodo` function, run the `queries.js` file with the following command:

```
node queries.js
```

Check the terminal for the following output:

```
Updated todo: {
  _id: new ObjectId('6573745144784f6dc034e1df'),
  text: 'Learn JS',
  isComplete: true,
  __v: 0
}
```

## Deleting with a model
### Deleting documents
Delete operations permanently remove a record from a database. Mongoose provides several methods for deleting documents, either individually or in bulk. 

### Deleting retrieved documents
One approach is to first retrieve the document, and then remove it from the database using the document instance. This can be useful when you need to check the authorship of a resource beforming a delete operation. 

The approach involves two steps:
1. **Retrieve the document:** Use the `findById()` method to fetch the document you want to delete. 
2. **Call upon the `deleteOne()` method:** Once the document is retrieved, call upon its `deleteOne()` method to delete it from the database. 

For example:

```
const id = '6573745144784f6dc034e1df';
const todo = await Todo.findById(id);
await todo.deleteOne();
```
> The *[`deleteOne()`](https://mongoosejs.com/docs/api/model.html#Model.deleteOne())* method is available on a Mongoose document instance (a retrieved document). It removes the document from the database and returns an object with metadata on the status of the operation.

### Simultaneous retrieval and delete. 
A more direct approach to deletion is the `findByIdAndDelete()` method. It allows you to find a document by its `_id` and delete it with a single operation. 

The `findByIdAndDelete()` method accepts the unique `_id` of the document as an argument, removes that document from the database, and returns the document that was removed. It the document cannot be found, the operation will return `null`.

For example:

```
const id = '6573745144784f6dc034e1df';
const removedTodo= await Todo.findByIdAndDelete(id);
```

### Implementing `findByIdAndDelete()`
Test some examples in the `queries.js` file.

#### Build the `deleteTodo` function
Firstly, build a function to delete todo:

```
// queries.js

const deleteTodo = async () => {
  const id = '6573745144784f6dc034e1df';
  const removedTodo = await Todo.findByIdAndDelete(id);
  console.log('Removed todo:', removedTodo)
}
```

Next, call the `deleteTodo` function within the `runQueries` function:

```
// queries.js

const runQueries = async () => {
  console.log('Queries running.');
  await deleteTodo();
};
```
> Ensure that any other methods in the runQueries function have been removed or commented out for the sake of this exercise. 

### Run the `deleteTodo` function:
To execute the `deleteTodo` function, run `queries,js` in the terminal. 

```
node queries.js
```

Check the terminal for the following output:

```
Removed todo: {
  _id: new ObjectId('6573745144784f6dc034e1df'),
  text: 'Learn JS',
  isComplete: true,
  __v: 0
}
```

## Query Options
Mongoose offers a variety of options for manipulating database queries. When you call upon a method like `find()`, it returns an instance of a [Query](https://mongoosejs.com/docs/api/query.html#Query()). You can then then built-in query methods, such as `limit()`, `sort()`, or `skip()`, to refine the query's results. 

Below is a list of some common methods for augmenting queries:
1. **`sort()`**: This option specifies the order in which documents are returned. You can sort a collection of documents by any field, in ascending or descending order. 
```
const todos = await Todo.find({ }).sort({ text: 'asc' })
```

2. **`limit()`**: This limits the number of documents returned by the operation, which is useful for pagination or reducing server load. 
```
const todos = await Todo.find({ }).limit(10)
```

3. **`skip()`**: Used alongside `limit()` for pagination, the `skip()` method determines the number of documents to skip before starting to return results. In the example below, only documents after the first 10 results will be included in what returns. 
```
const todos = await Todo.find({ }).skip(10)
```

4. **`select()`**: This option specifies which fields to include or exclude in the documents that are returned. It can help reduce the amount of data we need to send over networks.
```
const todos = await Todo.find({ }).select('text');
```

All of these options can be combines to create precise queries, tailored to specific need in your application:

```
const todos = await Todo.find({ }).skip(10).limit(5).select('text')
```

Visit the [Mongoose Docs](https://mongoosejs.com/docs/api/query.html) for more information and a full list of available query methods. 

## Advanced Querying
Mongoose and MongoDB offer various tools for retrieving data based on complex criteria. These more advanced querying techniques can be useful for optimizing you applications or implementing robust searching and filtering features. 

On example of an advanced querying technique is using *regex* within a `find()` operation.

```
const todos = await Todo.find({ text: /learn/i });
```

In the example above we use a *regex* pattern to find all `todos` where the `text` field contains the word `learn`, regardless of case sensitivity. The pattern within regex is defined between the two `/` symbols. In `/learn/i`, 'learn' is the pattern we're matching against, and the `i` at the end makes the search case-insensitive. This means it will math 'Learn', 'LEARN', 'learn', and any other variations of the word. This approach can be particularly useful if you wish to implement a search functionalality. 

> Regular expressions, or *regex* for short, are patterns used to match character combinations in strings. Regular expressions are a standard feature in many programming languages and tools, not specific to Mongoose or MongoDB. 

In addition to regex, Mongoose can utilize **MongoDB Operators** for advanced querying. Let's explore two key categories of these operators: Logical and comparison. 

### Logical Operators
MongoDB logical operators are used to query with multiple conditions. With logical operators, we can conduct more targeted searches in the database. 

Some commonly used logical operators include:
* **`$and`**: Combines multiple conditions that must all be true.
* **`$or`**: Combines multiple conditions and checks if at least one is true. 
* **`$not`**: Returns documents that do not meet the condition. 

You can view a full list of logical operators in the [MongoDB Documentation](https://www.mongodb.com/docs/v7.0/reference/operator/query-logical/)

### Comparison Operators 
MongoDB comparison operators are used to compare values against one another. Comparison operators determine whether the value held in a document's field mathces a certain condition. The condition is specified by the operator itself. If the condition is met, the document is included in the results of the query. 

For example, using the `$eq` operator, MongoDB will return documents where the field in question **equals** a specified value. Similarly, `$gt` can be used to return documents where the field's value is **greater** than a specified value. 

For example:

```
// Query to find items where price is greater than 20

const items = await Item.find({ 
  price: { $gt: 20 } 
});
```

Some commonly used comparison operators include: 
* **`eq`**: Returns documents where a target field EQUALS the specified value
* **`$gt`**: Returns documents where a target field is GREATER than a specified value.
* **`$gte`**: Returns documents where a target field is GREATER THAN OR EQUAL TO a specified value
* **`$nin`**: Returns documents that do not contain a certain value in their target array field. 

A full list of comparison operator in MongoDB can be found [here](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/)