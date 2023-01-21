const express = require('express')
const router = express.Router()
router.get('*', (req, res) => {
  res.status(404).send('Esta ruta no existe')
})

module.exports = router
