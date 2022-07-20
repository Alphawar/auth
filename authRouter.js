const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require("express-validator")
const authMiddleware = require("./middleware/authMiddleware")
const roleMiddleware = require("./middleware/roleMiddleware")

router.post('/registration', controller.registration, [
    check('username', 'Name can not be an empty field').notEmpty(),
    check('password', 'Password must be between 4 and 10 symbols').isLength({ min: 4, max: 10 }),
])
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['Admin']), controller.getUsers)

module.exports = router
