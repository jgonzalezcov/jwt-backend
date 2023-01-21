const { pool } = require('../helpers/connectDb')
const bcrypt = require('bcryptjs')

/************************Verifica la credencial***************************/
const selectCredentials = async (email, password) => {
  const values = [email]
  const consulta = 'SELECT * FROM usuarios WHERE email = $1'
  const {
    rows: [usuario],
    rowCount,
  } = await pool.query(consulta, values)
  const { password: passwordEncriptada } = usuario
  const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)
  if (!passwordEsCorrecta || !rowCount) return false
  else return true
}

module.exports = { selectCredentials }
