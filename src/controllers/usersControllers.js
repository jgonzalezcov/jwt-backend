const { insertCredentials, selectUser } = require('../models/usersModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()
/****************Crea usuario***************/
const postUser = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body
    await insertCredentials(email, password, rol, lenguage)
    res.send('Usuario creado con éxito')
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario' })
  }
}

/************************entregar usuario***************************/
const loadUser = async (req, res) => {
  try {
    const Authorization = req.header('Authorization')
    const token = Authorization.split('Bearer ')[1]
    jwt.verify(token, process.env.KEY)
    const { email } = jwt.decode(token)
    resp = await selectUser(email)
    res.json(resp)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los token' })
  }
}

module.exports = {
  postUser,
  loadUser,
}
