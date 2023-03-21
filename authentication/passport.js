const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const User = require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure express-session middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res) => {
    if(req.user == undefined )
    {
        res.redirect('/failure');
    }
    else
    {
        res.redirect('/success');
    }
})

app.post('/login', passport.authenticate('local', { successRedirect : '/success', failureRedirect : '/failure'}), (req, res) => {
    res.send("form login post")
});

app.get('/success', (req, res) => {
    res.send(req.session);
})

app.get('/failure', (req, res) => {
    res.send('Failure');
})

passport.use(new LocalStrategy(
    async function (username, password, done) {
        try{
            let user = await User.findOne({ email: username });
            if (!user) {return done(null, false)};
            if(user.password != password) {return done(null, false)} // make function to authenticate function when it is encrypted form
            return done(null, user);
        }catch(err)
        {
            return done(err);
        }
    
    }
));

// passport.serializeUser is a function provided by the Passport library to define how user objects should be serialized into the session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// In the express-session middleware, by default, the session information is stored in memory on the server-side. 
// This means that the session data is stored in the server's RAM and is lost when the server is restarted or crashes.
// Passport calls the deserializeUser method to retrieve the user data from the session and make it available on the req.user property.
// A session is typically identified by a unique session ID that is sent to the user's browser in a cookie or as part of the URL.
passport.deserializeUser(async (id, done) => {
    try{
        const user = await User.findById(id);
        done(null, user);
    }catch(err){
        done(err,false)
    }
})

app.listen(8000);