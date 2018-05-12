var express = require('express');

// Express Instance
var app = express();


app.get('riby/', function (request, response) {
    response.send({
        dami: "swag riby",
        chucks: "i am groot",
    });
})

var port = '8080';
app.listen(port);
console.log("Server Running on localhost://" + port)
