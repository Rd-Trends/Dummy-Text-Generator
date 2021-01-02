'use strict'

//Variables
const loremForm = document.querySelector('.lorem-form')
const submitBtn = document.querySelector('.button')
const textBody = document.querySelector('article')
const inputAmount = document.querySelector('#amount')
const incrementBtn = document.querySelector('.increasebtn')
const decrementBtn = document.querySelector('.decreasebtn')
const copyToClipboardBtn = document.querySelector('.copybtn')
const alertBox = document.querySelector('.alertbox')
const closeAlertBtn = document.querySelector('.closealertbtn')
let amount = 0;

//mock data ( would delete when I'm done with it's API)
const data = [
  'hello bro how are you doing hope you are fine its been a long time since i last texted or called you, hope you improving, and you are still coding every day keep the fire make sure are doing the right stuffs',
'hello bro how are you doing hope you are fine its been a long time since i last texted or called you, hope you improving, and you are still coding every day keep the fire make sure are doing the right stuffs',
'hello bro how are you doing hope you are fine its been a long time since i last texted or called you, hope you improving, and you are still coding every day keep the fire make sure are doing the right stuffs',
'hello bro how are you doing hope you are fine its been a long time since i last texted or called you, hope you improving, and you are still coding every day keep the fire make sure are doing the right stuffs',
'hello bro how are you doing hope you are fine its been a long time since i last texted or called you, hope you improving, and you are still coding every day keep the fire make sure are doing the right stuffs',
'hello bro how are you doing hope you are fine its been a long time since i last texted or called you, hope you improving, and you are still coding every day keep the fire make sure are doing the right stuffs',
'hello bro how are you doing hope you are fine its been a long time since i last texted or called you, hope you improving, and you are still coding every day keep the fire make sure are doing the right stuffs',
'hello bro how are you doing hope you are fine its been a long time since i last texted or called you, hope you improving, and you are still coding every day keep the fire make sure are doing the right stuffs',
'hello bro how are you doing hope you are fine its been a long time since i last texted or called you, hope you improving, and you are still coding every day keep the fire make sure are doing the right stuffs'
]

//Functions

function handleSubmit(e) {
  //Prevent form from submitting when any button is clicked
  e.preventDefault()

  //convert the string gotten from the input to number
  amount = parseInt(inputAmount.value)
  //get the number of paragraph from the mock data 
  let text = data.slice(0, amount)
  if (amount <= 0) {
    text = data.slice(0, 1)
  }
  if (amount >= data.length) {
    text = data.slice(0, data.length)
  }
  //iterate through the new array(text), create a p tag with each array child and embedding it the document.
  text.map((paragraph) => {
    let p = document.createElement('p')
    p.innerText = paragraph
    textBody.appendChild(p)
  })
}

//function to clear all paragraph when imputing new figures
function clearText() {
  textBody.innerHTML = null
}

//mock paragraph for start of app
data.slice(0, 1).map((paragraph) => {
  let p = document.createElement('p')
  p.innerText = paragraph
  textBody.appendChild(p)
})

//increment function for button to increase the number of paragraph
function increaseInputValue(e) {
  e.preventDefault()
  amount += 1
  inputAmount.value = amount
  clearText()
}

//decrement function for button to decrease the number of paragraph
function decreaseInputValue(e) {
  e.preventDefault()
  amount -= 1
  if (amount < 0) { amount = 0 }
  inputAmount.value = amount
  clearText()
}

//copy to clipboard function
function copyToClipboard(e) {
  e.preventDefault()

  //store all paragraph as a variable
  let copyText = textBody.textConten;

  //create a textarea
  let copiedText = document.createElement('textarea')
  //set the value of the created textarea to the variable that stores all paragraph
  copiedText.value = copyText;

  //append the textarea in the document
  document.body.append(copiedText)

  //select all value
  copiedText.select();

  //execute the copy function
  document.execCommand("copy");

  //remove the textarea from the document
  document.body.removeChild(copiedText);

  /* Alert the copied text */
  alertBox.style.display = 'block'
}

//close alertbox function
const closeAlertBox = () => {
  alertBox.style.display = 'none'
}

//Event Listeners
loremForm.addEventListener("submit", handleSubmit);

inputAmount.addEventListener("keyup", clearText);

incrementBtn.addEventListener('click', increaseInputValue);

decrementBtn.addEventListener('click', decreaseInputValue);

copyToClipboardBtn.addEventListener('click', copyToClipboard);

closeAlertBtn.addEventListener('click', closeAlertBox);
