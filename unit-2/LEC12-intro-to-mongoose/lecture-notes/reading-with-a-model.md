# Intro to Mongoose - Reading with a model
Mongoose offers several methods for retrieving documents from a MongoDB database. Depending on the requirement, you can fetch a single document, multiple documents, or documents that match a certain criteria. 

## The `find()` method
The `find()` method is used to retrieve all document (or all documents that meet a certain criteria) from a collection. 

Lets take a look at an example:

```
const todos = await Todo.find({});
```

The `find()` method accepts a query object and returns an **Array** of documents from the relevant collection. The query object can outline the search criteria for the documents we wish to return. An empty object `({})` indicates that there are no serach criteria, and all documents in the `Todo` collection should be retrieved.

> The `find()` method will always return an array, even if the array only includes a single result. 

## The `findById()` method
The `findById()` method is used to fetch a **single document** based on its unique`_id`.

Here is an example:

```
const id = "657743d4c3b284c0ef6fd001";
const todo = await Todo.findById(id);
```

The `findById()` method accepts an `ObjectId` and retrieves the document with that unique identifier from the collection. If a `string` value is passed in, Mongoose will automatically convert it into a MongoDB `objectId`.

## The `findOne()` method
The `findOne()` method is useful for finding the **first document** that matches a given criteria. 

Example:

```
const todo = await Todo.findOne({ text: "Learn JS" });
```

The `findOne()` method accepts a query object that specifies the criteria by which to find the document. In the example above, the method will return the first `Todo` document with a `text` value of `Learn JS`.

## Reading Many todos
Let's test of these examples in our queries.js file.

### Build the `findTodos` function
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

## Run the `findTodos` function
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