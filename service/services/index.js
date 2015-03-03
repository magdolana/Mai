var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var helloService = require('./helloworld');
var InstrumentService = require('./Instruments');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req,res){
    res.send('Home');
});


app.post('/HelloWorld', function(req,res) {
    var s = new helloService();
    s.post(req, res);

});

app.get('/Instruments', function(request, response){
    var Instruments = new InstrumentService();
    Instruments.getInstruments(request, response);
});

app.post('/Instruments', function(request, response) {
    var Instruments = new InstrumentService();
    Instruments.getInstruments(request, response);
});

var server = app.listen(9090, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Ls-seed Backend listening at http://%s:%s', host, port);
});