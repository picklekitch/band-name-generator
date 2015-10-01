var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello, Universe");
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});

var Adjective = function(){
  this.wacky = true;
  this.unctuous = true;
  this.rapacious = true;
  this.moist = true;
}

var adjective = new Adjective();

function getRando(object){
  var randArray = Object.keys(object);
  var randomProp = randArray[Math.floor(Math.random()*randArray.length)];
  return{word: randomProp};
}

app.get('/adjective', function(req, res){
  res.json(getRandomWord(adjective));
});

