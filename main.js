class Display {
  constructor(message) {
    this.message = message || ''
    this.logosrc = "assets/meditate.svg"
  }
}

var recieveMessageButton = document.querySelector('.recieve')

var deleteMessageButton = document.querySelector('.delete')

var messageDisplay = document.querySelector('.message-display')

var messageInput

var currentDisplay = new Display()

var affirmations = [
'I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.'
]

var mantras = [
'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Don’t let yesterday take up too much of today.',
'Every day is a second chance.',
'Tell the truth and love everyone.',
'I am free from sadness.',
'I am enough.',
'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.',
'I am present now.',
'Inhale the future, exhale the past.',
'This too shall pass.',
'Yesterday is not today.',
'The only constant is change.',
'Onward and upward.',
'I am the sky, the rest is weather.'
]

window.onload = updateDisplay()

recieveMessageButton.addEventListener('click', recieveMessage)

deleteMessageButton.addEventListener('click', deleteMessage)

messageDisplay.addEventListener('dblclick', displayInput)

function getRandomIndex(arrayName) {
  return Math.floor(Math.random() * arrayName.length)
}

function validateSelection() {
  if (!document.getElementById('affirmation').checked && !document.getElementById('mantra').checked) {
    alert('Set your intention by selecting a type of message.')
    return false
  }
  return true
}

function recieveMessage() {
  if (validateSelection()) {
    if(document.getElementById('affirmation').checked){
      currentDisplay = new Display(affirmations[getRandomIndex(affirmations)])
    } else {
      currentDisplay = new Display(mantras[getRandomIndex(mantras)])
    }
  }
  updateDisplay()
}

function updateDisplay() {
  if (!currentDisplay.message) {
    messageDisplay.innerHTML = `<img class="logo" src=${currentDisplay.logosrc}>`
  } else {
    messageDisplay.innerHTML = `<p class="message" contenteditable>${currentDisplay.message}</p>`
    assignInputListener()
  }
}

function validateDelete() {
  if (!currentDisplay.message) {
    alert('You are already tabula rasa.')
    return false
  }
  return true
}

function deleteMessage() {
  if (validateDelete()){
    currentDisplay = new Display()
  }
  updateDisplay()
}

function submitInput() {
  var customMessage = messageDisplay.innerText
  validateSubmission()
  currentDisplay = new Display(customMessage)
  updateDisplay()
}

function assignInputListener() {
  message = document.querySelector('.message')
  message.addEventListener('keypress', function(pressed) {
    if (pressed.key === 'Enter'){
      submitInput()
    }
  })
}

function displayInput() {
  if (validateSelection()) {
    messageDisplay.innerHTML = `<p class="message" contenteditable>Take a deep breath. Write your message here.</p>`
    assignInputListener()
  }
}

function validateSubmission() {
  if (document.getElementById('affirmation').checked && !affirmations.includes(messageDisplay.innerText)) {
    affirmations.push(messageDisplay.innerText)
  } else if (!mantras.includes(messageDisplay.innerText)) {
    mantras.push(messageDisplay.innerText)
  }
}
