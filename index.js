const express= require('express');
const app= express();
const port = 8000;


const expresslayout= require('express-ejs-layouts');
app.use(express.static('./assets'));
app.use(expresslayout);
//app express router
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        // interpoolation of string ${err}
        console.log(`error in running server: ${err}`);
    }
    console.log(`server is running on port : ${port}`);
});