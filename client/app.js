
const net = require('net')
const inquirer = require('inquirer')

const client = new net.Socket()
client.connect(3001, 'localhost', () => {}) //temp hardcode of address
// client.connect(17803, '0.tcp.ngrok.io', () => {}) // Emily's

// How does a chat app work? % node app.js

let name;
const messages = []

function sendMessage(text) {
  let message;
  if (text.substr(0,4) === '/me'){
    message = `${name} ${text}`
  }

  const event = JSON.stringify({
    eventType: 'message',
    payload: `<${name}> ${text}` // <Peter> sup
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
