var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

const port = process.env.PORT || 8080; //chose port from here like 8080, 3001

server.use(middlewares)
server.use(router)
server.listen(port, function () {
  console.log('JSON Server is running on port ' + port)
})

