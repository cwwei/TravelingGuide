var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/main.html'));
})

app.get('/main.js' , function (req, res) {
    res.sendFile(path.join(__dirname, 'js/main.js'));
})

app.get('/data.json', function (req, res) {
    res.sendFile(path.join(__dirname, '/json/data.json'));
})

app.listen(8080, function () {
    console.log('Node server is running..');
});
//8080 is port number