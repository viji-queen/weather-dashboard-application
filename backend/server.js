var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to GeeksforGeeks Node.js Tutorial');
}).listen(8080);
console.log('Hello this is the console-based application');

console.log('This all will be printed in console');

// The above two lines will be printed in the console.
