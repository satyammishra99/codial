const express= require('express');
const app= express();
const port = 8000;

//app express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        // interpoolation of string ${err}
        console.log(`error in running server: ${err}`);
    }
    console.log(`server is running on port : ${port}`);
})