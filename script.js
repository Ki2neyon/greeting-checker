const name = document.getElementById('name');
const greetbutton = document.getElementById('greet-button');
const greeting = document.getElementById('greeting');


greetbutton.addEventListener('click',() => {
    const yourname = name.value;
    greeting.textContent = ('hello' + yourname + '!');
});