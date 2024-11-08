// Require Express
const express = require("express");
// Create Router (capital R on Router means it is a class.)
const User = require('../models/user');
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/sign-up", (req, res) => {
    res.render("auth/sign-up.ejs");
});

router.post('/sign-up', async (req, res) => {
    // res.send("Form Submission Accepted");
    //grab the data from the form req.body
    // check is user exists    
    const userInDatabase = await User.findOne({ username: req.body.username });
    if (userInDatabase) {
        return res.send("Username or Password is Invalid");
    }
    // check if the data submitted is valid
    if (req.body.password !== req.body.confirmPassword) {
        return res.send("Password and Confirm Password must match");
    }
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;
    // if they don't, create the user. 
    // validation logic

    const user = await User.create(req.body);
    res.send(`Thanks for signing up ${user.username}`);

    // else, tell front end error occured. 
});

router.get("/sign-in", (req, res) => {
    res.render("auth/sign-in.ejs");
});

router.post("/sign-in", async (req, res) => {
    const userInDatabase = await User.findOne({ username: req.body.username });
    if (!userInDatabase) {
        return res.send("Login failed. Please try again.");
    }
    const validPassword = bcrypt.compareSync(
        req.body.password,
        userInDatabase.password
      );
      if (!validPassword) {
        return res.send("Login failed. Please try again.");
      }
      req.session.user = {
        username: userInDatabase.username,
        _id: userInDatabase._id
      };
      res.redirect("/");
});

router.get("/sign-out", (req, res) => {
    req.session.destroy();
    res.redirect("/");
  });
  

module.exports = router;
// You will only require a model in a controller. Should be the only place where we talk with the e