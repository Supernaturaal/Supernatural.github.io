
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