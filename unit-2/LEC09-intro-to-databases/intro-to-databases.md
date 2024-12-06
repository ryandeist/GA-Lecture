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