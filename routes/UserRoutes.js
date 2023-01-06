const router = require('express').Router()
const controller = require('../controllers/UserController')

router.post('/login', controller.userLogin)
router.post('/register', controller.userRegister)
router.post('/update', controller.UpdatePassword)
router.get('/profile', controller.SeeOneUser)
router.get('/allusers', controller.SeeAllUsers)

module.exports = router