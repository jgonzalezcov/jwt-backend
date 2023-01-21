const jwt = require('jsonwebtoken')
require('dotenv').config()
/************************Entregar Token***************************/
const deliverToken = async (req, res) => {
  try {
    const { email } = req.body
    const token = jwt.sign({ email }, process.env.KEY)
    res.json(token)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los token' })
  }
}

module.exports = {
  deliverToken,
}
