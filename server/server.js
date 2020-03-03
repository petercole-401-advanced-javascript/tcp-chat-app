
// THIS IS ALL NODE, CLI, Sockerts will be tomorrow
// Server is gonna listen for two basic event types
//

const net = require('net')
const server = net.createServer()

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
})

const socketPool = {}

server.on('connection', socket => { // whatever socket connected, make more events specific to that connection
  const id = `Socket-${Math.random()}` // no unique guarantee, temporary packageless technique
  socketPool[id] = socket
  socket.on('data', buffer => doWithBuffer(buffer))
  socket.on('error', err => console.error('SOCKET ERROR', err))
  socket.on('end', () => delete socketPool[id])
})

server.on('error', err => console.error('SERVER ERROR', err))

// when we get some data,

function doWithBuffer(){
  const message = JSON.parse(buffer.toString().trim())
  broadcast(message)
}

function broadcast(message){
  const payload = JSON.stringify(message)
  for (const socket in socketPool){
    socketPool[socket].write(payload)
  }
}

