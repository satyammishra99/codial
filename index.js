const express= require('express');
const cookieParser=require('cookie-parser');
const app= express();
const port = 8000;

const mongoose= require('./config/mongoose');

//used for session cookies
const session= require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

const sass = require('sass');

// app.use(sassMiddleware({
//     src:'/assets/scss',
//     dest:'/assets/css',
//     debug: true,
//     outputStyle:'exteneded',
//     prefix:'/css'
// }));



app.use(express.urlencoded());
app.use(cookieParser());
const expresslayout= require('express-ejs-layouts');
const { mongo } = require('mongoose');
const { db } = require('./models/user');
app.use(express.static('./assets'));
app.use(expresslayout);
//app express router

app.set('view engine','ejs');
app.set('views','./views');


app.use('/scss', (req, res, next) => {
    const filePath = './assets/scss/layout.scss';
    const result ='./assets/css/layout' ;
  
    res.setHeader('Content-Type', 'text/css');
    res.send(result.css);
  });
//mongo store is used to store the session cookies in the db
app.use(session({
    name:'codial',
    //todo change the secret before deployment
    secret:'blahsomething',
    saveUninitialized: false,
    resave:false,
    cookie:{
        maxAge:(1000 *60 *100)
    },
    store : new MongoStore(
        {
            mongoUrl: 'mongodb://127.0.0.1:27017/codial_development',
            autoRemove: 'disabled'
        },function(err){
            console.log(err || 'connect mongo-store setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticateduser);

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        // interpoolation of string ${err}
        console.log(`error in running server: ${err}`);
    }
    console.log(`server is running on port : ${port}`);
});