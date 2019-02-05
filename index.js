const express = require('express');
const app = express();

var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.send(JSON.stringify('Hello World!'))
});

app.post('/search', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    res.send(req.body)
});

app.listen(3000, '127.0.0.1', () => {
    console.log('Example app listening on port //127.0.0.1:3000!')
});
