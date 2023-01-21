const app = require('./server')
app.use('/', require('./src/routers/loginRoutes'))
app.use('/', require('./src/routers/usersRouters'))
app.use('*', require('./src/routers/nonexistentRoutes'))

module.exports = app
