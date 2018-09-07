require('./config/config');

const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const app = express();
const PORT = process.env.PORT || 3000;

// passport.use(new GoogleStrategy());

console.log(process.env.googleClientID);

app.listen(PORT, () => {
	console.log('App is running on 3000');
});