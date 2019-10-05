const express = require('express');
const authRouter = express.Router();
const path = require('path');
const loginRouter = require(path.resolve(__dirname, 'login', 'login.js'));
const signupRouter = require(path.resolve(__dirname, 'signup', 'signup.js'));


authRouter.login = loginRouter;
authRouter.signup = signupRouter;

module.exports = authRouter;