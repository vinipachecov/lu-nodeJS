
var moment = require('moment');
var bodyParser = require('body-parser');
console.log(moment().format("ddd, hA"));
console.log(moment().format("DD/MM/YYYY hh:mm:ss"));


var express = require('express');
var app = express();

// check for environment variable port or set 3000 default
var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended : false});

var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function(req, res, next){
    console.log('Request URl' + req.url);
    next();
})

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    //res.send(fs.createReadStream(__dirname + '/index.html')._read());
    // res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title> <link href=assets/style.css type=text/css rel=stylesheet/></head> <body><h1>{ Message }</h1><p>This is my first Template for nodeJS!</p></body></html>')        
    res.render('index');
    
});

app.get('/person/:id', function(req, res){
    //res.send(fs.createReadStream(__dirname + '/index.html')._read());
    //res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><h1>{ Message }</h1><p>' + 'iD IS ' +req.params.id  +' !</p></body></html>');
    // http://localhost:3000/person/5?qstr=123
    res.render('person', {ID : req.params.id , Qstr : req.query.qstr})
    
});

app.post('/person', urlencodedParser, function(req, res){
    res.send('Thank you!');
    console.log('First name = ' + res.body.firstname);
    console.log('Last name = ' + res.body.lastname);
});

app.post('/personjson', jsonParser, function(req,res ) {
    res.send('thank you for json data');

    console.log(req.body.firstname);
    console.log(req.body.lastname);
});


app.post('/api/person/:id', jsonParser, function(req,res ) {
    res.json({ firstname : 'John', lastname: 'Doe'});
});


app.get('/json', function(req, res){
    //res.send(fs.createReadStream(__dirname + '/index.html')._read());
    res.json({ firstname : 'Jonas', lastname : 'Macgregor'});
});

app.listen(port);