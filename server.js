var express = require('express');

var app = express();

cons PORT = process.env.PORT || 3000;

app.listen(PORT, function{
  console.log("It's work");
});
