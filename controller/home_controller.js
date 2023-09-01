const Post= require('../models/post');

module.exports.home= async (req,res) =>{
    //res.end('<h1>Express is running up for coidal <h1>');

    //console.log(req.cookies);
    
    // res.cookie('user_id',25);
    // res.render('home',{
    //     title:"home"
    // });

    const posts = await Post.find({}).populate('user').exec(); 
    res.render('home',{
        title:"Codial | home",
        posts:posts
    });
}