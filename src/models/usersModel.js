const { pool } = require('../helpers/connectDb')
const bcrypt = require('bcryptjs')
const { response } = require('express')
/************************Crea la credencial***************************/
const insertCredentials = async (email, password, rol, lenguage) => {
  try {
    const passwordEncriptada = bcrypt.hashSync(password)
    password = passwordEncriptada
    const values = [email, passwordEncriptada, rol, lenguage]
    const consulta = 'INSERT INTO usuarios values (DEFAULT, $1, $2, $3, $4)'
    await pool.query(consulta, values)
  } catch (error) {
    return 'error'
  }
}

/************************Selecciona el usuario credencial***************************/
const selectUser = async (email) => {
  try {
    const values = [email]
    const consulta = 'SELECT * FROM usuarios WHERE email = $1'
    resp = await pool.query(consulta, values)
    return resp.rows[0]
  } catch (error) {
    return 'error'
  }
}

/************************Valida si el usuario ya existe***************************/
const duplicateUser = async (email) => {
  try {
    const values = [email]
    const consulta = 'SELECT count(email) as num FROM usuarios WHERE email = $1'
    resp = await pool.query(consulta, values)
    return resp.rows[0].num
  } catch (error) {
    return 'error'
  }
}

module.exports = { insertCredentials, selectUser, duplicateUser }
