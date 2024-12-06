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