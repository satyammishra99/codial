
const User= require('../models/user');

module.exports.profile= function(req,res){
    //res.end('<h1> Profile section');
    console.log(req.body);

    res.render('user_profile',{
        title:"Profile"
    });
}

module.exports.signUp=function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }
    console.log('in sign up');
    //res.end('<h1> Profile section');
    return res.render('user_signUp',{
        title:"Codial | Sign Up"
    });
}

module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }
    return res.render('user_signIn',{
        title:"Codial | Sign In"
    });
}

module.exports.create= async function(req,res){
    console.log(req.body);
    //res.end('<h1> Profile section');
    try{

        
        if(req.body.password != req.body.confirm_password){
            return res.redirect('back');
        }
        let user=await User.findOne({email: req.body.email});
        console.log(user);
        if(!user){
                User.create(req.body);
                res.redirect('/user/sign-in');
        }
        else{
            console.log('in else');
            res.redirect('back');
        }
    }
    catch(err){
        console.log("error");
    }
}

//     User.findOne({email: req.body.email},async(err,user) => {
//         console.log(user);
//         if(err){console.log('error in finding user while sign up'); return;}
//         if(!user){
//             User.create(req.body,function(err,user){
//                 if(err){console.log('error while creating user');return;}
//                 res.redirect('/user/sign-in')
//             })
//         }
//         else{
//             console.log('in else');
//             res.redirect('back');
//         }
//     });
// }

module.exports.createSession= function(req,res){
    console.log(req.body);
    return res.redirect('/');
}

module.exports.destroySession = function(req,res,next){
    req.logout(function(err){
        return next(err);
    });
    return res.redirect('/');
}