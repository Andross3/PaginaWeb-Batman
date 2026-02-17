let red = document.getElementById('red-slider')
let green = document.getElementById('green-slider')
let blue = document.getElementById('blue-slider')

const redText = document.getElementById('red-text')
const greenText = document.getElementById('green-text')
const blueText = document.getElementById('blue-text')

const mainContainer = document.querySelector('.container')

function changeColor(red, green, blue) {
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor  = rgbColor;
}

red.addEventListener('input', (event) => {
    const valor = event.target.value;
    changeColor(red.value, green.value, blue.value);
    redText.innerText = valor;
})

green.addEventListener('input', (event) => {
    const valor = event.target.value;
    changeColor(red.value, green.value, blue.value);
    greenText.innerText = valor;
})

blue.addEventListener('input', (event) => {
    const valor = event.target.value;
    changeColor(red.value, green.value, blue.value);
    blueText.innerText = valor;
})


