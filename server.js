const jsonServer = require('json-server')
const server = jsonServer.create()


const router = jsonServer.router(`db.json`)
server.use(`/api`, router)

server.listen(process.env.PORT || 3000)
