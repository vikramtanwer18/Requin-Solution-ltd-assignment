const express = require("express");

const {handleUserSingUp,handleUserSignIn,handleUserDetails} = require("../controllers/user.controller");
const {verify} = require("../middleware/user.mw")

const router = express.Router()

router.post("/signUp",handleUserSingUp)

router.post("/signIn",handleUserSignIn)

router.get("/getDetails",verify,handleUserDetails)

module.exports = router