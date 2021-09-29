let input = document.querySelector('input');
let ausgabeSpan = document.querySelector('span');
const Ausgabe = () => (ausgabeSpan.innerText = input.value.repeat(input.value));

input.addEventListener('keyup', Ausgabe);
