
const http = require('http');
const fileSystem = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	fileSystem.readFile('./index.html', function(error, fileContent){
		if(error){
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end('Error');
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(fileContent);
			res.end();
		}
	});
});

app.get('/hello/:name', (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(`Hello ${req.params.name}`);
	res.end();
})

const server = app.listen(8080, () => {
	const host = server.address().address;
	const port = server.address().port;

	console.log(`Demo app listening on http://${host}:${port}`);
});


