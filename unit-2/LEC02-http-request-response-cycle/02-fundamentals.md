# HTTP Request Response Cycle - Fundamentals

## Explaining the Cycle: 
1. The user interacts with the client software (click a link, submit a form). Each action is a specific request.  
2. The client software proccess the user interaction and relays an HTTP request. Includes chosing the right request methods, data requested and browser information. 
3. The server software receives the request and decides what action to take.
4. The server prepares it's response. 
5. The server returns a response message, including a status code like 200. Status codes tell the brower the status of the request
6. The client processes the response. Clients job is to make sense of the response. 