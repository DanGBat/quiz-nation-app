const { promisify } = require("util");
const jwt = require('jsonwebtoken');
const User = require('../models/user');



exports.isLoggedIn = async (req, res, next) => {
    console.log("inside middleware")
    if(req.cookies.jwt) {
        const decoded = await promisify (jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
        console.log(decoded)
        req.user = await User.findById(decoded.id);
    }
    next();
} 


exports.logout = (req, res, next) => {
    res.cookie('jwt', 'logout', {
        expires: new Date ( Date.now() + 2 * 1000),
        httpOnly: true
    })
    next();
}