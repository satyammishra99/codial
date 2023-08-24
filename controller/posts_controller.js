const Post= require('../models/post');

module.exports.create = function(req,res){
    console.log('reachec post controler');
    console.log(req.user._id);

    try{
        const post = Post.create({
            content:req.body.content,
            user: req.user._id
        })
        if(post){
            return res.redirect('back');
        }
        else{
            console.log('error');
            return;
        }
    }
    catch(err){
        console.log(err);
    }
}