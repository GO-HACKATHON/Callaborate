var express     = require('express'),
    ejs         = require('ejs'),
    engine      = require('ejs-mate'),
    session     = require('express-session'),
    mongoose    = require('mongoose'),
    MongoStore  = require('connect-mongo')(session);

var app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://callaborate:admin@ds117859.mlab.com:17859/callaboratedb');

app.use(express.static('public'));
app.engine('ejs', engine);
app.set('view enginejs', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));


app.listen(PORT, function(){
  console.log("It's work");
});
