const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
console.log('Request for ' + req.url + ' by method ' + req.method);

if(req.url=='/')
        {
            console.log(req.url);
            fileurl='/index.html';
        }
        else
        {
            fileurl=req.url;
        }
    fs.readFile('.'+fileurl+'', function (err, html) {
        
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>'+req.url+'not found</h1></body></html>');
        }      
        else
        {
            res.writeHeader(200, {"Content-Type": "text/html"});  
            res.write(html);  
            res.end();  
        }
    });

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});