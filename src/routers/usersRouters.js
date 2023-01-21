const express = require('express')
const { reportRequest } = require('../middlewares/logger')
const router = express.Router()
const { postUser, loadUser } = require('../controllers/usersControllers')
const {
  validateToken,
  validateFields,
} = require('../middlewares/usersMiddlewares')
router.post('/usuarios', reportRequest, validateFields, postUser)
router.get('/usuarios', reportRequest, validateToken, loadUser)
module.exports = router
