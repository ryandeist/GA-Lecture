# Intro to Mongoose - Concepts
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









# Intro to Mongoose - Updating with a model
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

# Intro to Mongoose - Deleting with a model
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

# Intro to Mongoose - Query Options
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

# Intro to Mongoose - Advanced Querying
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