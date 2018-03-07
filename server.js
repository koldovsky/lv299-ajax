const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
let db;

mongodb.MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    db = client.db('data');
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/post-client-data', function (req, res) {
    delete req.body._id; // for safety reasons
    db.collection('client-data').insertOne(req.body);
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/view-client-data',  function(req, res) {
    db.collection('client-data').find({}).toArray().then(function(clientData) {
        res.status(200).json(clientData);
    });
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
