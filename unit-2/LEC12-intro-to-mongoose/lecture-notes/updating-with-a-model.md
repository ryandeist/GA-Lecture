# Intro to Mongoose - Updating with a model
Updating a document involves modifying its existing data while maintaining data integrity. Mongoose provides several methods for updating documents, each suitable for different scenarios.

## Updating retrieved documents
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

## Simultaneous retrieval and update
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

## Implementing `findByIdAndUpdate()`
To test some examples in our `queries.js` file.

### Build an `updateTodo` function
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

## Run the `updateTodo` function
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