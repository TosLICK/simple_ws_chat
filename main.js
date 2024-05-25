console.log('Hello world!')

const ws = new WebSocket('wss://simple-chat-anatosliy-a4777585.koyeb.app/')

formChat.addEventListener('submit', (e) => {
  e.preventDefault()
  ws.send(textField.value)
  textField.value = null
})

ws.onopen = (e) => {
  console.log('Hello WebSocket!')
}

ws.onmessage = (e) => {
  console.log(e.data)
  text = e.data

  const elMsg = document.createElement('div')
  elMsg.textContent = text
  subscribe.appendChild(elMsg)
}