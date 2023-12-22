const express = require("express")
const router = express.Router()
const passport = require("passport")
// const UsersModels=require("../models/users.model")
// const {IP2Location }= require('ip2location-nodejs');
// const http=require("http")

const authController = require("../controllers/auth.controller")

router.get("/login/success", authController.loginSuccess)

router.get("/login/failed", authController.loginFailed)

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login/failed",
    }),
    (req, res) => {


        res.redirect(process.env.CLIENT_URL);

    }
);



router.get("/logout", authController.logout)



module.exports = router




