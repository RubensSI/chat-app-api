const express = require('express')
const socket = require('socket.io')
const cors = require('cors')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // permite conexões de qualquer origen
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE') // especifica que tipos de métodos
  res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization')
  app.use(cors())
  next()
})

const port = 3000

app.get('/', ( req, res ) => { res.json( { message: 'Hello World' } )})

const server = app.listen(port, () => {
  console.log( `Server app listening at http://localhost:${ port }` )
})

io = socket( server, {cors: { origin: '*' }} )

io.on( 'connection', ( connection ) => {
  console.log(  socket.id ) // retorna o id da conexão
})
