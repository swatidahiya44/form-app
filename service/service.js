const express = require('express');
const {post} = require('./feedback/feedback.controller');
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require('mongoose');

const port = 3080;
const app = express();
app.use(cors())
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/form-app");


const catchErrors = action => (req, res, next) => action(req, res).catch(next)

//controllers
app.post('/api/feedback', catchErrors(post));
//app.get('/api/feedback', get);

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

