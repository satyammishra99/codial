module.exports.profile= function(req,res){
    //res.end('<h1> Profile section');

    res.render('user_profile',{
        title:"Profile"
    });
}