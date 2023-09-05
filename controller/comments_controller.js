const Comments = require('../models/comments');
const Post= require('../models/post');

module.exports.create= async function(req, res){
   // console.log(req.body.post);
    const post = await Post.findById(req.body.post);
    //console.log(post);
    if(post){
        const comment= await Comments.create({
            content:req.body.content,
            post: req.body.post,
            user: req.user._id
        });
        //console.log(comment);
         post.comments.push(comment);
         post.save(); // once get update something save tha database
         res.redirect('/');
    }
    
}