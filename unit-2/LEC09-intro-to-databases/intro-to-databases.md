# Intro to Databases
## Concepts
### What is a database? 
An application uses a database to interact with, organize, and save - or persist - data. There are many types of database systems. but they share common traits:
* **Data Storage**: This is the primary function of a database - to store data.
* **Data Retrieval**: Databases provide tools to query stored data.
* **Data Manipulation**: Data held in a database can be modified or deleted.
* **Data Integrity**: Most database systems use mechanisms to ensure the accuracy of their data. 

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-databases/concepts/assets/persistent-storage.png)

#### The importance of databases
Databases play a cruicial role in almost all applications by providing a persistent storage mechanism for data. Unlike temporary storage in data structures like arrays and objects, databases ensure that data is not lost when an application is closed or refreshed. This persistence is key to maintaining data integrity and consistency across application uses. 

Beyond this, databases enable applications to create, read, update and delete data (commonly abbreviated as CRUD). Most apps use CRUD operations as a part of their core functionality. For example, a social media application likely allows users to create posts, read posts, edit posts (update), and delete their posts. 

In short, databases let applications provide dynamic, personalized experiences to usets by allowing data to persist and evolve. Understanding how databases function is fundamental in producing robust, data-driven applications as you progress in your journey as a developer. 

## Relational Databases
### Introduction to relational databases
A relational database is a type of data management system (DBMS) that organizes data into tables, consisting of rows and columns. Data is stored in a structured way to help organized data and esablish relationships between different entities. 

#### SQL: The language of databases
[SQL(Structured Query Language)](https://developer.mozilla.org/en-US/docs/Glossary/SQL), typically pronounced "sequel" or "Ess-Que-Ell", is the standard programming language for interacting with relational databases. It's syntax is designed to be intuitive, resembling the English Language, which make SQL relatively straightforward to learn and use. 

##### SQL's functionality includes the ability to:
* Create, read, update and delete (CRUD) data within a database.
* Define and manipulate the structure of database tables.
* Manage and control access to the database.

It's important to note that while SQL is standardized, its implementation can vary slightly across different Relational Database Management Systems (RDBMS). Common RDBMS like ***SQLite*** and ***PostgreSQL*** might differ in terms of the specific SQL commands they support. 

#### Tables, rows, and columns.
These are the fundamental structural components of a relational database. 

* **Tables**: A table in a relational database is similar to a spreadsheet. It serves as the primary container for data and is organized into rows and columns.
* **Rows**: Each row in a table represents a unique instance or record of the entity being stored. For example, each row would represent a single employee in a table of employees.
* **Columns**: Columns define the specific attributes of fields of the data entity. For example, in a table of employees you could have columns for employee attributes such as `name`, `role`, and `start_date`. Every entry in the same column in a table must conform to the same data type. For example, every entry in the `name` column must be a string, and every entry in the `start_date` column must be a date.

![example table](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-databases/relational-databases/assets/table-diagram.png)

Understanding the relationship between tables, rows and columns is crucial for working with relational databases. These element work together to store data in an organized and accessible manner, making relational databaes a staple in data management across varius industries. 

## Non-Relational Databases
### What is a non-relational database?
Non-relational databases, commonly called NoSQL databases, break away from the traditional relational database model.

Instead of adhering to the fixed, table-based structure of relational databases, non-relational databases are designed to handle a variety of data models. These models are more flexible and can manage semi-structured or unstructured data efficiently. 

### Document-oriented databases
Among the types of a NoSQL databases, document-oriented systems stand out for their versatility in managing data. [MongoDB](https://www.mongodb.com/), a leading document-oriented database, exemplifies this approach. It is engineered to store, manage and retrieve data as documents. These documents can be complex records with varying structures.

#### Understanding collections and documents in MongoDB

![visual representation of a MongoDB Database](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-databases/non-relational-databases/assets/document-collection-hierarchy.png)

In MongoDB, data is stored a *documents*. These documents are similar to JSON objects and can contain a variety of key-value pairs. Documents are MongoDB's basic unit of data, analogous to a row in a relational database. Instead of tables, documents are stored in *collections*.
> A *collection* is a group of related documents within a MongoDB database. Collections serve as a container for organizing and storing documents. A *document* is a single record within a collection. 

Here's and example of a MongoDB document:
```
{
  _id: ObjectId("65cfbe85aa84a57a40363ad5"),
  name: "Alex",
  role: "Developer",
  startDate: ISODate("2018-03-19T00:00:00Z"),
}
```

## Comparing Relational and Non-Relational Databases
### Emploring the differences and use cases of different databases
While both relational and non-relational databases serve the purpose of persisting data, they do so using different methods. 

#### Schema vs. Schema-less databases 
![relational vs non-relational](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-databases/comparing-relational-and-non-relational-databases/assets/relational-vs-non-relational.png)

The core distinction between relational and non-relational databases lies in their approach to structuring data:

##### Schema in relational databases:
* A relational database uses a predefined schema to organize data into tables.
* Each table consists of rows and columns, where columns define the data type and structure.
* This rigid schema ensures consistent data entry and supports complex queries for data.

##### Schema-less in non-relational databases:
* Non-relational databases, like MongoDB, do not require a predefined schema. 
* They allow dynamic data storage, supporting various data formats without needing a fixed structure
* This flexibility is ideal for handling unstructured or semi-structured data and can quickly adapt to changes in application requirements.

#### Selecting the right database for your application
The choice between a relational or non-relational database largely depends on an application's specific needs:

##### Relational Databases for transaction-heavy applications:
* Relational Databases are ideal for financial applications (for example, banking or stock trading) where handling [*database transactions*](https://en.wikipedia.org/wiki/Database_transaction) with accuracy and consistency is paramount.
* These databases struggle with non-uniform data that cannot be neatly organized into structured tables. 

##### Non-relational databases for unstructured data:
* These databases are suited for applications dealing with large amounts of diverse data, like social media platforms.
* MongoDB, a popular document-based non-relational database, offers high flexibility. It is a great choice for rapidly changing and evolving data models, as often seen in prototyping stages. 