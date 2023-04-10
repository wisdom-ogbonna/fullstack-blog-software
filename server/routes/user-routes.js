const express = require('express')
const { signup, login, verifytoken, getUser } = require('../controllers/user-controller')

const router = express.Router()


router.post('/signup', signup)
router.post('/login', login)
router.get('/user', verifytoken,getUser)


router.get('/', (req, res) =>{
    res.send("Hello from servcer")
})

module.exports = router