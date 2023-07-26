const express =require('express');
const router = express.Router();
const homecontroller = require('..//controller/home_controller');

router.get('/',homecontroller.home);
router.use('/user', require('./user'));
console.log('router loaded');

module.exports=router;