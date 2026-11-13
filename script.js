const name = document.getElementById('name');
const button = document.getElementById('check-button');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    const nameInput = name.value.trim();

    if (nameInput === '') {
        result.classList.add('error');
        result.textContent = ('Please enter your name.');
    } else {
        result.classList.remove('error');
        result.textContent = ('Hello,' + nameInput + '!');
    }
});