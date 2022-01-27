var http = require("http");
//create a server object:
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Huomenta Paavo!\n"); //write a response to the client
    response.end("On kaunis"); //end the response
  })
  .listen(8081); //the server object listens on port 8081