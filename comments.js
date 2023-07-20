// Create web server with Node.js
// Run with node comments.js

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('Request was made: ' + req.url);
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	} else if(req.url === '/api/comments'){
		var comments = [{name: 'John', age: 25}, {name: 'Jane', age: 30}];
    }
});