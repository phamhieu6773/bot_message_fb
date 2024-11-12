const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const POST = process.env.POST || 5000;


const bodyParser = require("body-parser");

app.get('/', function(req, res){
    res.send("Hello World");
})


app.listen(POST, () => {
  console.log(`Server is running on POST ${POST}`);
});
