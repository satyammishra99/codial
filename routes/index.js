const express =require('express');
const router = express.Router();
const homecontroller = require('..//controller/home_controller');

router.get('/',homecontroller.home);
router.use('/user', require('./user'));
router.use('/posts',require('./posts'));
router.use('/comment',require('./comments'));
console.log('router loaded');


//for any furthur request access from here
//router.use('routername',require(./routerfile));

module.exports=router;