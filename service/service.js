const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;


const users = [];
var router = express.Router();
var request = require('request');
var config = require('config.json');


var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://swatiDahiya:Checkbox@123@cluster0.v1fc6.mongodb.net/db?retryWrites=true&w=majority", () =>
{
  console.log("App works fine!!!");
});
app.use(bodyParser.json());

//app.get('/api/users', (req, res) => {
//  res.json(users);
//});

//app.post('/api/user', (req, res) => {
//  const user = req.body.user;
//  users.push(user);
//  res.json("user addedd");
//});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

