const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codial_development');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error connection to mongodb"));
db.once('open',function(){
    console.log('connected to database:: MongodB');
});
mongoose.expots= db;