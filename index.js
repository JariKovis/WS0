const http = require('http');
const favicon = require('serve-favicon');
const express = require('express');
const app = express();
const request = require("request");
const PORT = process.env.PORT || 3000;

//app.use(favicon('favicon-16x16'));
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML; charset=utf-8');
    res.write("<h1>Millainen on WEB arkkitehtuuri?</h1>"); //write a response to the client
    res.write("<h2>Tällaiselta se näyttää...</h2> ");
    res.write(
        " <img src='https://casamedia.fi/sites/default/files/services/casamedia-sovelluskehitys.jpg'>"
    );

    var data =
        "<table border='5'><tr><td>Jari</td><td>Toka Jari</td></tr><tr><td>Kolmas Jari</td><td>Neljäs Jari</td></tr></table>";
    res.write(data);

    res.end("<strong>This is the end</strong>"); //end the response
});

server.listen(PORT);
