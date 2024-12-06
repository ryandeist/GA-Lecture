# Mongoose Relationships
## Concepts
### MongoDB Relationoships
In MongoDB data is represented through documents and collections. Theses documents are akin to real-world entities, such `User`, `Post`, `Comment`, or `Purchase`. Each of these entities or data models, is defined by a unique set of attributes (fields) and can interact or relate to one another in various ways. 

A key aspect of MongoDB and its schema design is deciding how to structure these relationships. MongoDB, being schema-less at its core, offers flexibility in how you can link related data. 
> In MongoDB, a data entity represents a document in a MongoDB database, and corresponds with the shape of a schema. 

### Types of Data Relationships
There are three main types of relationships you will encounter when working with databases: 
1. One-to-one(1:1) Example: A User has a profile, and a Profile belongs to a User
2. One-to-Many(1:n) Example: A User has many purchases, a Purchase belongs to a User
3. Many-toMany(m:n) Example: A Person has visited many places; places have been visited by many people. 
> Cardinality refers to the number of elements in one dataset that can relate to the number of elements in another dataset. In the above example, "to-one" vs. "to-many" are the two possible cardinalities.

### Relationships in MongoDB
There are two approaches to modeling related data in MongoDB:
1. Using **embedding**, where parent documents hold sub-documents.
2. Using **referencing**, where a document contains just the related document's `ObjectId`.

Both approaches can be used simultaneously in the same document. 

### Modeling relationships with ERDs
An ERD (entity relationship diagram) is a flowchart that visually illustrates the relationship between data entities in a system. 

When diagramming a MongoDB database, data entities are the collections of documents. In other words, we need to account for all of the models and schemas that we will be working with. 

When creating an ERD, we first need to identify the data entities that are involved. We would draw them as rectangles, and label them as nouns - for example: `User`, `Fruit`, etc.

![tables of potential data entities for an ERD](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/mongoose-relationships/concepts/assets/entities.png)

The next step is to determine how the entities are related. Then draw lines between associated fields to show a relationship. 

For example, if `reviewSchema` is an embedded schema on a `Post` model, we would draw a line between the `reviews` field of our Post model and the `_id` firld on our Review model. As expected, not all entities will be related.

![determine how entities are related](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/mongoose-relationships/concepts/assets/logical-connections.png)

Finally, we need to indicate the type of relationship that these lines represent. In other words, we need to show their cardinality. There are multiple ways to demonstrate this, the simplest is to just have `one` be an undecorated line, and `many` have an endpoint that is a tree or a fork.

![visual representations of the different relationships](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/mongoose-relationships/concepts/assets/cardinality.png)

![indicate the type of relationship the different pieces of data](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/mongoose-relationships/concepts/assets/three-relationships.png)

## Embedding
### What is embedding?
Embedding is the practice of storing related data within a single document. This is achieved by nesting *sub-documents* or arrays of sub-documents inside a parent document.

Here is an example of what a document with embedded data looks like (assume a document from a people collection):

```
{
  _id: ObjectId("5099803df3f4948bd2e983a4"),
  name: "Joe Smith",
  contacts: [
    {
      _id: ObjectId("5099803df3f4948bd2e98fff"),
      type: "mobile",
      contact: "(555) 555-5555"
    },
    {
      _id: ObjectId("5099803df3f4948bd2e99005"),
      type: "email",
      contact: "joe@smith.com"
    }
  ]
}
```

This document represents **one** record in a MongoDB database. It shows a primary document for an individual named "Joe Smith," identified by a unique `_id`. Embedded within this document is an array named `contacts`, containing sub-documents for different types of contact information. 

Each contact entry is a sub-doument with its own `_id`, indicating that it is a distinct entity within the array. There are two types of contact information for Joe Smith:
* A mobile number: (555) 555-5555
* An email address: joe@smith.com

Notice that each contact object has a set of properties that are not the same as the parent object.

```
{
  _id: ObjectId("5099803df3f4948bd2e98fff"),
  type: "mobile",
  contact: "(555) 555-5555"
}
```

This means that subdocuments, in this case contacts, will have their own unique schema. 
> A sub-document is a document is a document nested withing another document. Sub-documents are very similar to regular documents - the difference is that they are not saved individually, but as a group when the parent object is saved. 

### Why use embedding
Embedding connected data in a single document can reduce the number of read operation required to obtain data. In general, you should structure your schema so your application recieves all of its required information in a single read operation. 

### Embedding sub-documents for `Todos`
Let's say we want to let users create sub-tasks under each `Todo` in our application. For instance, if a user created a `Todo` called "Pack for Vacation", the could have associated sub-tasks like "Toothbrush", "Swimsuit", and "Laptop"

In this scenario, we a one-to-many relationship where each `Todo` can include multiple items, but each item is specific to only one `Todo`. Therefore, it's logical to embed these items directly within the `Todo`. This approach is more organized, making it easier to manage and access the items associated with each `Todo`. This will help reduce the number of read operations required to obtain our data. 

First, we'll create a new schema for a our sub-tasks. They will need a `text` field and an `isComplete` field: 

```
const mongoose = require('mongoose');

// new
const subtaskSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
```

> Sub-documents have their own **schema**, but since sub-documents are not saved to their own collection, we **do not compile sub-document's schema into a Model**.

Now that we have two schemas, the next step is to give them a relationship.

To associate this data, we nest our `subtaskSchema` in our `todoSchema`.

Monoose represents an array of sub-documents as an embedded schema wrapped in square brackets `[schema]`. This indicates that subtasks will be an array whose elements conform to the `subtaskSchema`.

```
const mongoose = require('mongoose');

const subtaskSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
  subtasks: [subtaskSchema], // embedded subtask schema
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
```

> As with normal JavaScript conventions, the field name for this array should be a pluralized version of the elements it contains. In this case, it makes sence to refer to an array full of individual subtask elements as `subtasks`.

### Adding a subtask
Let's create a new function for creating subtasks at the bottom of the **Query Functions** section in the `queries.js` file, under our exisiting functions:

```
const createSubtask = async () => {
  // Assume that the todo we want to create a
  // sub-task for has the following id:
  const todoId = "657b25adc8146427465857d7";
  // Look up the todo by id, assign the returned object to `todo`
  const todo = await Todo.findById(todoId);

  const subtaskData = {
    text: "Learn how props work",
    isComplete: false,
  };

  // Push the new sub-task data into the subtasks array on the todo:
  const subtask = todo.subtasks.push(subtaskData);
  // Save the parent document:
  await todo.save();
  console.log("Modified todo:", todo);
};
```

Test the new `createSubtask` function and review the `todo` logged in the console. You can test the functions in the `queries.js` file using node: 

```
node queries.js
```
```
// queries.js

const runQueries = async () => {
  console.log("Queries running.");
  await createSubtask();
};
```

You should see an embedded sub-document in the `todo.subtasks` array. 

```
Modified todo: {
  _id: new ObjectId('657b25adc8146427465857d7'),
  text: 'Learn React',
  isComplete: false,
  __v: 1,
  subtasks: [
    {
      text: 'Learn how props work',
      isComplete: false,
      _id: new ObjectId('6580677cf30bfef697ae046f')
    }
  ]
}
```

## Locating Embedded Sub-Documents
### The problem with embedded documents 
While embedding documents in Mongoose has many advantages, it introduces complexity when modifying embedded subdocuments. This is because subdocuments are not compiled into models and therefore lack model methods. 

In order to perform database operations on a subdocument, developers must interact with the parent document in which the subdocument is held. 

### Finding a subdocument in a document array
Before modifying of removing a subdocument, you first have to find it withing the parent document. Mongoose's subdocument arrays have an `id()` method that allows you to find a specific subdocument by its `_id`. 

For example:

```
const subtask = todo.subtasks.id(subtaskId);
```

Once you have retrieved the specific subdocument, you can perform various operations on it. To save changes, we'll always need to call `save()` on the parent, as the subdocument does not exist in its own collection.

> The `id()` method on a document array is different from the `_id` property of a document. Every subdocument still has its own unique `_id`.

### Implementing the `_id` method
Let's create a function to demonstrate finding a subdocument in an array. Add the following to `queries.js` at the bottom of the **Query Function** section: 

```
const findSubtask = async () => {
  // Replace 657b25adc8146427465857d7 with an existing Todo ID
  const todoId = '657b25adc8146427465857d7';
  // Replace 6580677cf30bfef697ae046f with an existing Subtask ID
  const subtaskId = '6580677cf30bfef697ae046f'; 

  const todo = await Todo.findById(todoId);
  const subtask = todo.subtasks.id(subtaskId);

  console.log('Subdocument:', subtask);
};
```
> Make sure you replace `todoID` and `subtaskId` with actual `ObjectIds` from your database. 

Next, call upon `findSubtask` withing `runQueries`:

```
const runQueries = async () => {
  console.log('Queries running.');
  await findSubtask();
};
```

Run the queries.js file with the following command.

```
node queries.js
```

You should see something like this in the terminal:

```
Subdocument: {
  text: 'Learn how props work',
  isComplete: false,
  _id: new ObjectId('6580677cf30bfef697ae046f')
}
```

## Removing Embedded Sub-Documents
### Removing subdocuments
Similar to adding subdocuments with the `push()` method, Mongoose provides a method for removal called `pull()`. Once a subdocument has been pulled, we must call `save()` on the parent to reflect those changes in the database. 

For example:

```
const todo = await Todo.findById(todoId);

todo.subtasks.pull(subtaskId); 
await todo.save();
```

> Note: If a non-existent `ObjectId` is provided, the `pull()` method will not throw an error. If the method is unable to locate the subdocument in the array, the parent document simply goes unmodified. 

### Implementing a Delete Operation:
Let's build out a function to remove a specific `subtask`. Add the following function to the `queries.js` file at the bottom of the **Queries Functions** section:

```
const removeSubtask = async () => {
  const todoId = '657b25adc8146427465857d7';
  const subtaskId = '6580677cf30bfef697ae046f';

  const todo = await Todo.findById(todoId);
  todo.subtasks.pull(subtaskId);
  await todo.save();

  console.log('Updated document:', todo);
};
```

> Make sure to replace `todoId` and `subtaskId` with actual `ObjectIds` from your database. 

Next, call `removeSubtask` with the `runQueries` function:

```
const runQueries = async () => {
  console.log('Queries running.');
  await removeSubtask();
};
```

Run the `queries.js` file in the terminal:

```
node queries.js
```

You should see something similar to the below output in the terminal:

```
Updated document: {
  _id: new ObjectId('657b25adc8146427465857d7'),
  text: 'Learn React',
  isComplete: false,
  __v: 2,
  subtasks: []
}
```

## Updating Embedded Subdocuments
### Updating Subdocuments
There are a few approaches to updating subdocuments in Mongoose. The most straightforward approach involves the following steps. 

1. Find the parent document
2. Locate the desired subdocument withing the parent.
3. Modify the properties of the subdocument. 
4. Save the parent document to apply the changes. 

For example:

```
// Find the parent:
const todo = await Todo.findById(todoId);

// Locate the subdocument within the parent:
const subtask = todo.subtasks.id(subtaskId);

// Update the subdocument by marking it complete
subtask.isComplete = true;

// Save the parent document to persist changes:
await todo.save();
```

In the code snippet above, we modify the `isComplete` property of a subdocument like we would a typical JavaScript object. After updating the subdocument, calling `save()` on the parent ensures the changes are reflected in the database. 

### Implementing an update
To demonstrate the process in more detail, let's create a function to update a subdocument. 

Add the following to `quieries.js` at the bottom of the **Query Functions** sections:

```
const updateSubtask = async () => {
  const todoId = '657b25adc8146427465857d7';
  const subtaskId = '6580677cf30bfef697ae046f';

  const todo = await Todo.findById(todoId);
  const subtask = todo.subtasks.id(subtaskId);

  subtask.isComplete = true;
  await todo.save();

  console.log('Updated document:', todo);
};
```
> Make sure to replace `todoId` and `subtaskId` with actual `ObjectIds` from your database. 

Next, call `updateSubtask` with the `runQueries` function:

```
const runQueries = async () => {
  console.log('Queries running.');
  await updateSubtask();
};
```

The the `queries.js` file in the terminal.

```
node queries.js
```

You should see a similar output in the terminal

```
Updated document: {
  _id: new ObjectId('657b25adc8146427465857d7'),
  text: 'Learn React',
  isComplete: false,
  __v: 1,
  subtasks: [
    {
      text: 'Learn how props work',
      isComplete: true,
      _id: new ObjectId('6580677cf30bfef697ae046f')
    }
  ]
}
```


## Finding a parent from a child
### Finding a parent from a child.
Imagine you need to find a parent document, but your starting point is a property held within one of its child documents. Thankfully, Mongoose query methods are sophisticated enough to filter results based the properties of subdocuments. 

For example of the `findOne()` method:

```
const todo = await Todo.findOne({
  'subtasks.text': 'Learn how props work'
})
```

Notice the syntax used. We specify a property (`text`) of an object within the `subtasks` array, and the value we're searching for. This operation returns the parent `todo` that contains a `subtask` that matches that criteria. 

With access to the parent `todo`, we can now use a JavaScript array method like `find()` to access the appropriate `subtask`: 

```
const todo = await Todo.findOne({
  'subtasks.text': 'Learn how props work'
})

const subtask = todo.subtasks.find((subtask) => {
  return subtask.text === 'Learn how props work'
})
```

### Real-world scenario
Consider an application where a user can see a list of all the subtasks. The user wants to delete a specific subtask, but each document has been removed from the context of its parent. To achieve this functionality, we need to first find the correct parent document, and then find and remove the appropriate subtask within. 

Let's build out the relevant pieces now. Add the following to `queries.js` at the bottom of the **Query Functions** section:

```
const findParentAndRemoveSubtask = async () => {
  const foundTodo = await Todo.findOne({
    'subtasks.text': 'Learn how props work'
  });

  const foundSubtask = foundTodo.subtasks.find((subtask) => {
    return subtask.text === 'Learn how props work'
  });

  foundSubtask.deleteOne();

  await foundTodo.save();
  console.log('Updated todo:', foundTodo);
};
```
> The `deleteOne()` method is accessible on all mongoose subdocuments

Next, call `findParentAndRemoveSubtask` in the `runQueries` function:

```
const runQueries = async () => {
  console.log('Queries running.');
  await findParentAndRemoveSubtask();
};
```

Finally, run `queries.js` in the terminal:

```
node queries.js
```

You should see that the relavant `subtask` has been removed from the `subtasks` array.

## Referencing 
### What is Referencing
Referencing is an alternate approach to creating relationships between data entities in MongoDB. It is the practice of creating relationships by storing a **reference** (in the form of an `ObjectId`) to a related document, rather than embedding the data directly.

Referencing differs from embedding in a few key ways. With embedding, a parent document ***contains the sub-documents***, whereas with referencing a document ***only contains the related document's `ObjectId`***. Whenever a document needs to access information on the document that it references, it can utilize the referenced `ObjectId` to locate the appropriate document in a separate collection. 

![diagram of referencing](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/mongoose-relationships/referencing/assets/referencing.png)
> Both embedding and referencing can be used simultaneously in the same document.

### Deciding which document should hold the reference:
When using Mongoose or reference data in MongoDB, you can store the reference (`ObjectId`) in either of the two related documents or even both. This decision depends upon the design and functionality of your application, and it's not always clear which is best. 

In a typical **one-to-many relationship**, it's common for the **many** side (`Todo`) to hold the reference to the **one** side (`User`). This approach is practical because it's more efficient to store a single reference in many documents, rather than storing countless references in a single document. 

However, certain scenarios might call for the opposite approach, where the `User` document holds an array of references to the associated `Todo` documents. For example, if your application frequently retrieves a user along with all their assigned tasks, this inverse reference could be beneficial. Mongoose is versatile enough to support both approaches. 

### Why choose referencing over embedding?:
While embedding can be more efficient for read operations, referencing has it's advantages. 

Referencing may be beneficial if:
* The amount of data stored can exceed the 16MB size limit for a document. Exceeding this size is quite uncommon though - all of Shakespeare's works combined are smaller than 5MBs. 
* Multiple parent documents need access to the same child document and that child's data changes frequently. For example, a document modeling a *bank account* should be referenced becuase it could be "owned" by more than once individual. Suppose the account data were embedded in two or more parent documents. Can you imagine how difficult it would be to keep the transactional and balance data synced?
* Say you wanted to view all *posts* on a landing page, regardless of the user who posted them, it would take more effort to extract the *posts* from each user if they were embedded. However, it would be quick to get *all posts* from their own collection. 

### Implementing references
In this section, we'll explore how to implement references between two models: `Todo` and `User`. Our goal is to establish a `one-to-many` (1:M) relationship where a single `User` can be associated with multiple `Todo` items. 

In this updated `todoSchema`, we've added an `assignee` field. This field is structured to hold an `ObjectId`, which is unique identifier for MongoDB documents. The `ref` attribute indicates that this `ObjectId` references documents from the `User` model. 

This property will store a reference to the `User` Model: 

```
// models/todo.js

const mongoose = require('mongoose');

// Embedded data schema
const subtaskSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean
})

const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
  // subtasks: [subtaskSchema]

  // Add a new field to reference a User:
  assignee: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' // Reference to the User model
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
```

> Note: we previously worked with embedded subtasks in the `Todo` model. For this particular lession of referencing, we won't be needing these subtasks. Feel free to comment out the subtask-related code. This will help keep our focus on referencing without deleting the work you've already done with embedding. 

Next, create a new file to store our `User` model: 

```
touch models/user.js
```

In `models/user.js`, we'll define the `userSchema`, compile it into a model, and export it: 

```
// models/user.js

const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
```

In this scenario, each `todo` document can reference one `user` through the `assignee` field. This field stores the `ObjectId` of the `user` document being referenced. Conversely, a single `user` can be referenced by multiple `todo` documents, which establishes our **one-to-many** (1:M) relationship.

In an applicaiton, this would mean one user can have multiple tasks assigned to them. Whenever a `todo` document requires information on the associated `user`, its `ObjectId` reference can be used to locate the appropriate document. 