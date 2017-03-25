var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');
var flash = require('connect-flash');


var app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://callaborate:admin@ds035643.mlab.com:35643/callaborate-test');

app.use(express.static('public'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

require('./routes/user');

app.get("/", function(req, res, next){
  res.render('index');
});

app.listen(PORT, function(){
  console.log("App running");
});
