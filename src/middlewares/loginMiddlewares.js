const { selectCredentials } = require('../models/loginModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()
/**************************Valida credencial**********************/
const validateCredencia = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const resp = await selectCredentials(email, password)
    if (resp == false) {
      res
        .status(400)
        .json({ message: 'Nombre de usuario o contraseña es incorrecta' })
    } else {
      next()
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al validar credenciales de usuario' })
  }
}
module.exports = { validateCredencia }
