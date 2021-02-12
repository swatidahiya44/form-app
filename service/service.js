const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;


const users = [];
//var router = express.Router();
//var request = require('request');
//var config = require('config.json');
var cors = require('cors')

app.use(cors({
  origin: (o, c) => {c(null, true)},
  credentials:true
}))

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/form-app", () =>
{
  console.log("App works fine!!!");
});
app.use(bodyParser.json());
const db = mongoose.connection;
//app.get('/api/users', (req, res) => {
//  res.json(users);
//});

//app.post('/api/user', (req, res) => {
//  const user = req.body.user;
//  users.push(user);
//  res.json("user addedd");
//});

app.post('/feedback', (req,res) => {
    db.collection('feedback').insertOne(req.body);
    res.send(req.body);
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

