const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('Hello http & https!');
});

const httpServer = https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app);

app.listen(3000, function () {
  console.log('http://localhost:3000');
});

httpServer.listen(8443, function () {
  console.log('https://localhost:8443');
});

