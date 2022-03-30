"use strict";
const userName = 'Mario';
console.log(userName);
function clickHandler(message) {
    console.log('Clicked: ' + message);
}
const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('clicked');
});
button.addEventListener('click', clickHandler.bind(null, 'Thanks!'));
