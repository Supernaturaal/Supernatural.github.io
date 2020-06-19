function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'Перестань.';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Введи свое имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Привет, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');

}
myButton.onclick = function() {
  setUserName();
}