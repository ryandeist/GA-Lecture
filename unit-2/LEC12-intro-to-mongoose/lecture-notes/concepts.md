# Intro to Mongoose - Concepts
## What is Mongoose?
Mongoose is an *ODM* (Object Document Mapping) library, used to brigde the gap between MongoDB and the Node.js environment. It helps developers translate JavaScript objects to MongoDB documents and vice versa. It accomplishes this through a process called mapping, where the properties of JavaScript objects are aligned with the structure of MongoDB documents. Mongoose also acts as an interface for executing database operations with MongoDB, simplifying the code required for these tasks.

> An ODM, or Object Document Mapping Library, is a a tool that helps convert and manage data between the format used in an application (like JavaScript objects) and the format used in a database (like documents in MongoDB).

Below is a diagram illustrating how Mongoose fits in the full-stack development workflow:

![Diagram showing how Mongoose fits in the Full Stack WF](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-mongoose/concepts/assets/mongoose-diagram.png)

## Why use Mongoose?
MongoDB is a document-oriented database. Instead of storing rigid, table-like structures as in *relational databases*, MongoDB stores data in documents. These documents resemble JavaScript objects and can be highly flexible. Each document in MongoDB can have its own unique structure, which is great for rapid development and managing continuously evolving datasets. However, this flexibility also brings challenges, particularly in maintaining consistency with an applications data. 

This is where Mongoose comes in. Mongoose is used to impose structures on MongoDB documents. It does this through the use of *schemas*, essentially blueprints for the shape of a MongoDB document. With Mongoose providing a structure for our documents, we gain several benefits.

**Data Validation**: Ensures new data adheres to the shape of a schema, promoting consistency within the database.
**Type Casting**: Automatically aligns data types with the type specified within the schema
**Simplified CRUD Operations**: Streamlines creating, reading, updating, and deleting records using familiar JavaScript patterns.

Mongoose not only simplifies complex database operations but also ensures that your data is consistent and reliably structured. 

> A Mongoose *schema* defines the structure of a document within a MongoDB collection, including its fields and data types. 
