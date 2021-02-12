const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;



var cors = require('cors')
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/form-app", () =>
{
  console.log("App works fine!!!");
});
app.use(bodyParser.json());
const db = mongoose.connection;


app.post('/api/feedback', (req,res) => {
    db.collection('feedback').insertOne(req.body);
    res.send(req.body);
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

