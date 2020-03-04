
// THIS IS ALL NODE, CLI, Sockets will be tomorrow
// Server is gonna listen for two basic event types

const net = require('net')
const server = net.createServer()

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
})

const socketPool = {}

server.on('connection', socket => { // whatever socket connected, make more events specific to that connection
  const id = `Socket-${Math.random() * 1000}` // no unique guarantee, temporary packageless technique
  socketPool[id] = socket;
  socket.on('data', buffer => doWithBuffer(id, buffer))
  socket.on('error', err => console.error('SOCKET ERROR', err))
  socket.on('end', () => delete socketPool[id])
})
server.on('error', err => console.error('SERVER ERROR', err))


// when we get some data,

function doWithBuffer(id, buffer) {
  const message = JSON.parse(buffer.toString().trim())
  broadcast(id, message)
}

function broadcast(id, message) {
  socketPool[id]
  console.log(message)
  console.log('payload.messageType:', message.messageType)
  if (message.messageType === 'personal') {
    console.log('UNIQUE PRINT to', id)
    const payload = JSON.stringify(message)
    socketPool[id].write(payload)
  } else {
    for (const socket in socketPool) {
      console.log('PRINTED TO EVERYONE')
      const payload = JSON.stringify(message)
      socketPool[socket].write(payload)
    }
  }
}

module.exports = { doWithBuffer, broadcast };
