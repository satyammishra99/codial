const passport = require('passport');
//const password= require('passport');
const LocalStrategy= require('passport-local').Strategy;
const User= require('../models/user');

//authontication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
    }, async function(email,password,done){
        let user= await User.findOne({email:email});
        if(user==null){
            return done(null,false);
        }
        //console.log(user.password);
        try{
            if(!user || user.password != password){
                console.log('Invalid username or password');
                return done(null, false);
            }
            return done(null, user);
        }
        catch(err){
            return done(err);
        }

       
    }
));


// serialize the user to decide which key kept to cookies

passport.serializeUser(function(user,done){
    
    done(null,user.id);
})

// deserialize the user from the cookies

passport.deserializeUser( async function(id,done){
    //console.log(id);
    let user= await User.findById(id)
    console.log(user);
       if(user){       
        return done(null,user);
       }else{
        return done(err);
       }
        
    
});


passport.checkAuthenticate=function(req,res,next){
    // if user signed in to pass on next function(controller)
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/user/sign-in');
}

passport.setAuthenticateduser= function(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user.email);
        res.locals.user = req.user;
    }
    next();
}





module.exports= passport;