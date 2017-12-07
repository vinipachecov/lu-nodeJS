var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    switch (req.url) {
        case '/json':
            res.writeHead(200, {
                'context-Type': 'application/json'
            });
            var obj = {
                Carname: 'Celta',
                year: 1994,
                Type: 'hatch',
                Brand: 'GM'
            }
            res.end(JSON.stringify(obj));
            break;
        case '/':
            fs.createReadStream(__dirname + '/index.html').pipe(res);
            break;
        default:
            console.log(req.url);   
            // res.writeHead(404);         
            fs.createReadStream(__dirname + '/404.html').pipe(res);            
            break;
    }


}).listen(1337, '127.0.0.1');