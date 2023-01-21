const jwt = require('jsonwebtoken')
require('dotenv').config()
const { duplicateUser } = require('../models/usersModel')

/**********************Valida Token**********************/
const validateToken = async (req, res, next) => {
  try {
    const Authorization = req.header('Authorization')
    const token = Authorization.split('Bearer ')[1]
    jwt.verify(token, process.env.KEY)
    next()
  } catch (error) {
    res.status(500).json({ message: 'Error al validar credenciales Token' })
  }
}
/**********************Valida creacion de usuario**********************/
const validateFields = async (req, res, next) => {
  try {
    const { email, password } = req.body
    resp = await duplicateUser(email)
    if (email != '' && password != '' && resp == 0) {
      next()
    } else {
      res
        .status(400)
        .json({
          message:
            'El usuario ya existe, o no ingreso el nombre de usurio o pasword',
        })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al crear un nuveo usuario' })
  }
}
module.exports = { validateToken, validateFields }
