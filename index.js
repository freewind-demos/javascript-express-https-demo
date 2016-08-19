const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
// extended
// - true: use https://www.npmjs.com/package/qs
// - false: use https://www.npmjs.com/package/querystring
app.use(bodyParser.urlencoded({ extended: true }));

const users = [];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/user', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  users.push({
  	name: name,
  	email: email
  })
  res.sendStatus(201);
});

app.get('/users', function(req, res) {
  res.send(users);
})

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});