# Exposing an API - Elements of an API   
## Elements of an API
In this lesson, we're going to explore the esstential elements that make up an API. Understanding these components us critical in building and interacting with APIs effectively. 

Building an API involves three main concepts:
- Endpoints
- Requests 
- Responses
        
Each of these elements plays a specific role in how an API functions, from defining access points to habndling data exchange. 
    
## Endpoints 
Endpoints are specific paths or routes defined in your API that determin how it interacts with the outside world. Each endpoint will map to a function in our application that will handle the request and send back a response. This would be as simple as sending back a string of as complex and sending back a JSON object.

When designing an API, it's important to organize your endpoints in a clear and logical manner. One effective way to do this is by using a base URL. The base URL acts as a consistent starting point for all the endpoints in your API, and it's typically named after the primary resource or service your API provides. 

For example, if we create an API for a calculator, we could use the base URL of `/calculator`. This means all out endpoints will start with `/calculator`/

Best Practice:
* It's good to follow a standard naming convention for your endpoints. Using REST architecture can be beneficial for consistency and clarity. 

## Requests
A request if what a client sends to your API when it wants to interact with it. 

Each request consists of:
* HTTP Method: This indicates the action type, such as GET (retrieve data), POST (send data), PUT (update data), etc.
* URL: Composed of the base URL and the specific endpoint, it specifies where the request is being sent. 
* Data: This is the payload or information sent by the client, commonly in formats like `JSON` or `XML`
        
As we build an API, we must determine what data we are expecting from the requester. This will help us decide what data send back as a response. 

During development, we will use a tool called Postman for interacting with our API. Postman allows us to both make requests and see the responses that are sent back. 

## Responses
A response is what your API sends back to the client after processing a request. 

It includes: 
* Status Code - This numeric indicates the result of the request (the most common are 200, 201, 204, 400, 401, 403, 404, 500, and 503). Status codes help clients quickly understand the outcome of their request. 
* Data: The actualy information sent back to the client. In our case, we'll primarily use JSON, a format resembling JavaScript object but with specific rules (like keys enclosed with double quotes.)

Here is an example of a JSON object:
```
{
    "name": "Kira Nerys",
    "species": "Bajoran",
    "rank": "Colonel",
    "isOnDeepSpaceNine": true,
    "numberOfMissions": 173,
    "knownFor": ["Bajoran Militia Officer", "Resistance Fighter"],
    "relationships": {
        "closeFriend": "Odo",
        "mentor": null
        },
    "quote": "I'm a soldier, Major. I'm not used to relaxing."
}
```

JSON is an ideal format for APIs due to its readability and compatibility with various programming languages. 