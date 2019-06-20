var exp = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes= require('./routes/routes.js');

var app = exp();

// This is a middleware to access public folder
// if any file called index.html exits, it wil be called for localhost:3000/ address
app.use(exp.static(__dirname+"/public"));
// Another middleware to read post/submitted values through body of the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 

app.use(session({secret:"secret",resave:true,saveUninitialized:false}));
// for cluster servers, give true to both..when the app is used by many users 1 lakh+


app.set('view enjine','ejs'); // no need for require function on top as it is done internally

app.get('/',routes.loginPageHandler);
app.get('/toLanding',routes.landingPageHandler);
app.post('/toCity',routes.cityPageHandler);



app.listen(3000,function(){
    console.log(" ** HTTP server is up & listening **");
})