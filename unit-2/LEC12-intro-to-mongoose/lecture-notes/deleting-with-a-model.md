# Intro to Mongoose - Deleting with a model
## Deleting documents
Delete operations permanently remove a record from a database. Mongoose provides several methods for deleting documents, either individually or in bulk. 

## Deleting retrieved documents
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

## Simultaneous retrieval and delete. 
A more direct approach to deletion is the `findByIdAndDelete()` method. It allows you to find a document by its `_id` and delete it with a single operation. 

The `findByIdAndDelete()` method accepts the unique `_id` of the document as an argument, removes that document from the database, and returns the document that was removed. It the document cannot be found, the operation will return `null`.

For example:

```
const id = '6573745144784f6dc034e1df';
const removedTodo= await Todo.findByIdAndDelete(id);
```

## Implementing `findByIdAndDelete()`
Test some examples in the `queries.js` file.

### Build the `deleteTodo` function
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

## Run the `deleteTodo` function:
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