const express = require('express')
const { reportRequest } = require('../middlewares/logger')
const router = express.Router()
const { deliverToken } = require('../controllers/loginControllers')
const { validateCredencia } = require('../middlewares/loginMiddlewares')
router.post('/login', reportRequest, validateCredencia, deliverToken)
module.exports = router
