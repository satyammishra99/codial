module.exports.home=function(req,res){
    //res.end('<h1>Express is running up for coidal <h1>');

    console.log(req.cookies);
    res.cookie('user_id',25);
    res.render('home',{
        title:"home"
    });
}