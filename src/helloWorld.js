var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Hello World app listening at http://%s:%s", host, port)
})
