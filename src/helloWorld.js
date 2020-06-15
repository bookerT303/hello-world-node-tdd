const http = require('http');
var url = require('url');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if ( url.parse(req.url).pathname !== '/' ) {
        res.writeHead( 404, 'Not Found' );
        res.end( 'Not Found' );
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});