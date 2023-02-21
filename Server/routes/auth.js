const express =  require("express");
const {signup, signin,confirmation} = require("../controllers/auth.js");
const {lightController} = require('../controllers/light')
const router = express.Router()

// create a user
router.post('/signup', signup)
// Sign in
router.post('/signin', signin)
// confirm code route
router.post('/confirmCode/:userId', confirmation)
// smart light route
router.post('/smartLight', (req, res) => {
    console.log(req.body)
    res.send('ok')
})


module.exports = router