console.log('doge');

var buttonElement = document.querySelector('button');

var audioClick = new Audio("audio/typewriter.wav");

function darkMode(){
document.documentElement.classList.toggle('darkmode');
audioClick.play();
}

buttonElement.addEventListener('click', darkMode);