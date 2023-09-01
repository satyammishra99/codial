const express= require('express');
const router=express.Router();


const postsController= require('../controller/posts_controller');
const passport = require('passport');

router.post('/create',passport.checkAuthenticate,postsController.create);

module.exports=router;