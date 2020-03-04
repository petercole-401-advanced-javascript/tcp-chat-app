
// THIS IS ALL NODE, CLI, Sockets will be tomorrow
// Server is gonna listen for two basic event types

const net = require('net')
const server = net.createServer()

require('dotenv').config()
const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`Server up, listening on ${PORT}`)
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


// when we get some data, do stuff with the buffer

function doWithBuffer(id, buffer) {
  const message = JSON.parse(buffer.toString().trim())
  console.log(message);
  console.log(id);
  broadcast(id, message)
}

// decide how to broadcast it

function broadcast(id, message) {
  if (message.messageType === 'personal') {
    const payload = JSON.stringify(message)
    socketPool[id].write(payload)
  } else {
    for (const socket in socketPool) {
      const payload = JSON.stringify(message)
      socketPool[socket].write(payload)
    }
  }
}

module.exports = { doWithBuffer, broadcast };
