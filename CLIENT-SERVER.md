How a request gets served in client server architecture?

first of all we have to know what is client and server so,


Client: A client is a program that runs on the local machine requesting service from the server. A client program is a finite program means that the service started by the user and terminates when the service is completed.

Server: A server program is an infinite program means that when it starts, it runs infinitely unless the problem arises. The server waits for the incoming requests from the clients. When the request arrives at the server, then it responds to the request.



In the client server architecture, when the client computer sends the request for data to the server through the internet, the server accepts the requested process and deliver the data packets requested back to the client. client do not share any of their resources, for example: email, world wide web etc.
![](https://media.geeksforgeeks.org/wp-content/uploads/20191016114416/801.png)

HTTP REQUEST METHOD: 

HTTP works as a request-response protocol between a client and server.For Example,  A client (browser) sends an HTTP request to the server, then the server returns a response to the client. The response contains status information about the request and may also contain the requested content.

HTTP Methods:

GET
POST
PUT
PATCH
HEAD
DELETE
OPTIONS

The two most common HTTP methods are: GET and POST.

GET: GET is used to request data from a specified resource.
	 GET requests can be cached.
	 GET requests remain in the browser history.
	 GET requests can be bookmarked.
	 GET requests should never be used when dealing with sensitive data.
	 GET requests have length restrictions.
	 GET requests are only used to request data (not modify).
	 
POST: POST is used to send data to a server to create/update a resource.
	  POST requests are never cached
      POST requests do not remain in the browser history
      POST requests cannot be bookmarked
      POST requests have no restrictions on data length

	
