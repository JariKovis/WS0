const http = require('http');
const request = require("request");
const PORT = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML; charset=utf-8');
    res.write("<h1>Millainen on WEB arkkitehtuuri?</h1>"); //write a response to the client
    res.write("<h2>Tällaiselta se näyttää...</h2> ");
    /*res.write(
        " <img src='./web_sovellus_kuva.png'>"
    );*/

    var data =
        "<table border='5'><tr><td>Jari</td><td>Toka Jari</td></tr><tr><td>Kolmas Jari</td><td>Neljäs Jari</td></tr></table>";
    res.write(data);

    res.end("<strong>This is the end</strong>"); //end the response
});

server.listen(PORT);
