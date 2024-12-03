# HTTP Request-Response Cycle

## Concepts:
HTTP is a set of rules apps follow on the internets to ensure communication between client/servers is effective. 

*Protocol* a set of rules or steps to achieve a goal.

Browser accepts and relays requests to the server, the server completes the task and sends it back to the client for use. 



## HTTP Methods:
There are for primary methods (verbs) that indicate the desired action to be performed by the server. 
- GET: Requests a resources from the server to get data
- POST: Sends data to the server, usually to create a new resources
- PUT: Sends data to the server to update an existing resources
- DELETE: Request to delete a resource in the database/server. 

Additional Methods: 
- PATCH: Provides partial modifications to a resource.
- TRACE 
- HEAD
     
## Anatomy of HTTP Request-Response Messages:
### Request Messages:
- Start line: Method (the type of request) and Path/Endpoint of the data. 
- Message Headers:  Act as the carriers of additional information as needed. 
- Message Body: Carries the actual data that needs to be communicated. 

### Response Messages:
- HTTP Status Codes: a 3 digit code represending how the server handled the request. 
    * 1XX Informational - Server got the request, but there is more action needed by the user. 
    * 2XX Success
    * 3XX Redirection - tells the client to make a new request at a new address
    * 4XX Client Error - like asking for something that doesnt exist. 
    * 5XX Server Error - Server couldnt complete because of a server issue. 

> MDN had a collection of all status codes and what it represents. 

## Sending HTTP Requests from the Browser:
### URLS
- Uniform Resource Locator: Primary function is to identify and locat a resource. 

#### Commonn URLS HTTPS://google.com
- Protocols(HTTPS://)
- Domain Name(google.com)
            
#### Local URLS http://localhost:3000/tacos
- Protocol (http://)
- Domain (localhost)
- PORT (:3000)
- Path (/tacos)

#### Complex URLs with query parameters: https://developer.mozilla.org/search?q=reduce
Used for dynamic requests on the internet. Common for interacting with online resources.
- Protocol: (https://)
- Subdomain: (developer.) Organize different areas of websites. Especially useful for different aspects of companies business. 
- Domain: (mozilla.org)
- Path: (/search)
- Query (?)
- Parameters (q=reduce)