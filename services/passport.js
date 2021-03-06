const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require ('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleCLientSecret,
    callbackURL: '/auth/google/callback'
}, 
(accessToken, refreshToken, profile, done) =>{
    new User({ googleId: profile.id }).save();
    console.log('accessToken', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile:', profile);
})
);