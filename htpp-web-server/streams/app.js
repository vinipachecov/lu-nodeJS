var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){

    res.writeHead(200, {'context-Type' : 'text/plain'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);        

}).listen(1337,'127.0.0.1');