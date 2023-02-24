const express =  require("express");
const {signup, signin,confirmation,resendPin} = require("../controllers/auth.js");
const {lightController} = require('../controllers/light')
const router = express.Router()

// create a user
router.post('/signup', signup)
// Sign in
router.post('/signin', signin)
// confirm code route
router.post('/confirmCode/:token', confirmation)

// resend code
router.post('/resendCode/:token', resendPin)


module.exports = router