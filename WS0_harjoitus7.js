const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML; charset=utf-8');
    res.write("<h1>Miten menee?!<h1>"); //write a response to the client
    res.write("<h2>How are you today</h2>");
    res.write(
        " <img src='https://www.cs.helsinki.fi/u/laine/tikas/material/web_sovellus.png'>"
    );

    var data =
        "<table border='1'><tr><td>Eka solu</td><td>Toka solu</td></tr><tr><td>Eka solu</td><td>Toka solu</td></tr></table>";
    res.write(data);

    res.end("<strong>This is the end</strong>"); //end the response
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
