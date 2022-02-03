var http = require("http");
//create a server object:
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.write("Huomenta tulevat Devaajat!\n"); //write a response to the client
    response.end("On tosi kylmä ja kaunis talviaamu, eikö olekin?"); //end the response
  })
  .listen(8080); //the server object listens on port 8081;
  console.log("Serveri käynnissä osoitteessa http://127.0.0.1:8080");