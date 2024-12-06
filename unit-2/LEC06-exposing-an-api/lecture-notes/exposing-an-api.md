# Exposing an API - Concepts
## What's an API?:
An API (Application Program Interface) is a set of rules and definitions that allows one ssoftware application to interact with another. In web development, we typically refer to --as-- an API is actually a resource or set of resources --governed-- by an API.

APIs by this definition, provide a set of data or functionality that developers can use when building their own applications.

### Types of APIs:
- Third Party APIs: Created by a company or organization that is not the same company or organization that is using the API.
- Internal APIs: Used within a company to enable different teams or parts of a systems to communicate. 

### Examples:
##### Third-Party APIs:
- PokeAPI: Developers can use this API to create applications, games or websites that require detailed Pokemon information without needing to gather and manage this extensive data themselves. 
- Google Maps API: The Google Maps API is a set of interfaces provided by Google that allow developers to integrate mapping services into their applications.
- Stripe API: The Stripe API is esstential for ecommerce websites, subscription-based services, and any online platform that needs to process payments securely and efficiently. 
            
#### Internal APIs
- A banks internal account management systems
- A healthcare company patient records systems

## How APIs control data
Imagine you're developing an app for users to track their pokemon card collections. Instead of manually entering all pokemon card data into your database, you can integrate the PokeAPI. This simplifies the process significantly as the API already contains the comprehensive Pokemon Data, and your task is merely accessing this data using the API. 

### Why not access the database directly? 
You might wonder why tne developers of the PokeAPI didnt just share the database access URL for direct queries . There are two main reasons:
- Security: Direct database access can pose significant security risks. It could expose the database to unautorized access and potential malicious attacks. 
- Controlled Access: By building an API, the developers of PokeAPI have more control over how the data is accessed and used. The can optimize data delivery, manage traffic and ensure that the database remains secure and efficient. 






  



