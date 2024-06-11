// Create web server
var http = require('http');
var server = http.createServer(function (req, res) {
    var url = req.url;
    if (url === '/comments') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Comments');
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Not Found');
    }
});
server.listen(3000, function () {
    console.log('Server running at http://localhost:3000/');
});