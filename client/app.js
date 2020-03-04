
const net = require('net')
const inquirer = require('inquirer')

const client = new net.Socket()
client.connect(3001, 'localhost', () => {}) //temp hardcode of address
// client.connect(17803, '0.tcp.ngrok.io', () => {}) // Emily's

// How does a chat app work? % node app.js

let name;
const messages = []

function sendMessage(text) {
  let message
  let messageType
  // if the message looks like "/me smiles" treat it as an emote
  // should output: Emily smiles
  // Otherwise treat the message as a chat message
  // should output: <Emily> hello, world
  if (text.substr(0, 4) === '/me ') { // ME + MESSAGE
    message = `${name} ${text.substr(4)}`
  } else if(text.substr(0, 5) === '/time'){ // PRINT TIME
    message = new Date().toLocaleString();
    messageType = 'personal'
    console.log(`TIME ${new Date().toLocaleString()}`);
  } else {
    message = `<${name}> ${text}`
    messageType = 'group'
  }
  const event = JSON.stringify({
    eventType: 'message',
    messageType: messageType,
    payload: message
  })
  client.write(event)
}

client.on('data', data => {
  const event = JSON.parse(data)
  if (event.eventType === 'message'){
    messages.push(event.payload)
    console.clear()
    messages.forEach(message => console.log(message))
    console.log('')
  }
})

async function getName(){
  console.clear()
  const input = await inquirer.prompt([{name: 'name', message: 'what is your name?'}])
  name = input.name;
  console.log('your name is', name);
}

async function getInput () {
  const input = await inquirer.prompt([{ name: 'text', message: ' ' }])
  if (input[0] === '/') {
    // if the first character of the input is a slash, it's not a message, it's a command
    sendCommand(input.text) // for example
  }
  sendMessage(input.text)
  getInput()
}

getName()
getInput()
