# Restful Routing 

## Concepts:
### What is REST? 
Rest, for for REpresentational State Transfer is a guiding architectural style for web applications, focusing on the client-server relationship. It's a set of principles that simplifies how web resources are defined and addressed. 

#### Breaking Down REST
##### Resources and Representations:
At the hear of REST is the concept of a --resource--. In the context of a web environment, everything - from database data, HTML files, images, to videos - is considered a resource. You've encounters --URLS-- which are esstentially the addresses of where resources are located. 

The "Representational" aspect of REST is about how these resources are presented to a clent (like a browser). When a client requests a resource, the server responds with a --representation-- of it. This representation is not the resource itself, but a portryal of its --current state--, often in formats like JSON or XML.

##### State Transfer:
The "State Transfer" part of REST revolves around how the client and server communicate or exchange the state of resources. For instance, if you're interacting with a blog, retrieving all posts involves receiving their current state from the server. Conversely, adding a new post means sending its details to the server, which updates the blogs data.

##### REST's Universality:
What makes REST versatile is its independence from any specific programming language or framework. It's not about the resources themselves but how their states are represented and transferred in a web environment.

Systems adhering to REST principles are know as REST-compliant or --RESTful--. This architectural style underpins much of the internet's design, offering a standardized approach to structuring and handling web resources.

### RESTful Routing
RESTful routing is applying REST architecture to routing.

In REST, there is a clear separation between client and server. The client sends requests to retrieve or modify resources, and the server sends responses to those requests. 

In order to facilitate this, RESTful routes map HTTP verbs (get, post, put, and delete) to CRUD counterparts. 
- POST -> CREATE -> Adding a resource
- GET -> READ -> Viewing a resource
- PUT -> UPDATED -> Changing a resource
- DELETE -> DELETE -> Removing a resource.

### Why use RESTful routing conventions?:
REST is a convention that makes your application more predictable - it's a well understood architecture that other developers can easily adapt to and interpret. REST is also designed around server-client separation, which helps with both scalability and flexibility as the client and server can be changed and expanded separately. 

As mentioned above, REST is also language agnostic - even as lanbguages and frameworks change, the communication between client and server stays the same. 




## Routing for referenced resources
### Routing for Referenced resources (ONe: Many and Many:Many Relationships)
Below is a table demonstrating typical RESTful routing that you may experience when working with Reference Resources
> You may want to associate a blog with a subscriber. This would modify the `Subscriber` resource instead of the `Blog` resource. If this is the case, reverse the path above so that it begins with `/subscribers/:subscriberId/blogs
> If a route is marked as having a data payload, its means there is data that will be sent from the client to the server with the requests.
```
| HTTP Method (Verb) | Path/Endpoint/URI                        | CRUD Operation                          | Route Name    | Has Data Payload? | Purpose                                                                                                                         | Render/Redirect Action        |
| ------------------ | ---------------------------------------- | --------------------------------------- | ------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| POST               | /blogs/:blogId/subscribers/:subscriberId | Associate a _blog_ with a _subscriber_  | unpredictable | No                | Handles the user request to associate a subscriber to a blog                                                                    | `res.redirect('/you-choose')` |
| POST               | /blogs/:blogId/subscribers               | Associate a _blog_ with a _subscriber_  | unpredictable | Yes               | Handles the user request to associate a subscriber to a blog. The id of subscriber included in payload instead of the endpoint. | `res.redirect('/you-choose')` |

```

It's important to note that many applications can implement full CRUD on embedded resources without using all of the above routes. Often, embedded resources will be shown alongside their parent resources. For example, the comments on a blog might be shown on the blog show page, so there wouldn't be a need for a comment index view. Comments might not have an individual show view, so there might not be a need for a comment show page. The for to create a new comment might not need a deidicated view, so there may not be a new comment view. Your implementation will depend on your vision for your application. 