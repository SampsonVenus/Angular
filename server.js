var express = require('express');
var app = express();
app.use('/', express.static('./'));
app.listen(7777);
console.log('Up: http://127.0.0.1:7777/');