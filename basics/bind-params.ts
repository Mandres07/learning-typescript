const userName = 'Mario';
console.log(userName);
// any comment

function clickHandler(message: string) {
   console.log('Clicked: ' + message);
}

const button = document.querySelector('button')! as HTMLButtonElement;
button.addEventListener('click', () => {
   alert('clicked');
});

button.addEventListener('click', clickHandler.bind(null, 'Thanks!'));