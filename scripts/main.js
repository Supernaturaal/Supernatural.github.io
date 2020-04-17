var myHeading = document.querySelector('h1');
myHeading.textContent = 'Зимние виды спорта';
var myVariable = document.querySelector('h1');
alert('Дороу!');

window.onload = function(){
 window.setInterval(function(){
      var now = new Date();
       var clock = document.getElementById("clock");
     clock.innerHTML = now.toLocaleTimeString();
 }, 100);
};
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Нажми на меня ' + name;
}


