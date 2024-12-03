# HTTP Request Response Cycle - Anatomy of HTTP Request-Response Messages:
## Request Messages:
- Start line: Method (the type of request) and Path/Endpoint of the data. 
- Message Headers:  Act as the carriers of additional information as needed. 
- Message Body: Carries the actual data that needs to be communicated. 

## Response Messages:
- HTTP Status Codes: a 3 digit code represending how the server handled the request. 
    * 1XX Informational - Server got the request, but there is more action needed by the user. 
    * 2XX Success
    * 3XX Redirection - tells the client to make a new request at a new address
    * 4XX Client Error - like asking for something that doesnt exist. 
    * 5XX Server Error - Server couldnt complete because of a server issue. 

> MDN had a collection of all status codes and what it represents. 