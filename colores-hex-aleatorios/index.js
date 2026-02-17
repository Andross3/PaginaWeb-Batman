const container = document.querySelector('.container')
const btn = document.querySelector("button")
const textoColor = document.getElementById("texto-hexadecimal")
const VARIABLES = '0123465789ABCDEF'

btn.addEventListener("click", () => {
    const color = mezclar()
    container.style.background = color;
    textoColor.innerText = color;
})

function mezclar() {
    let color = "";
    let entero;
    while (color.length < 6) {
        entero = Math.floor(Math.random() * (VARIABLES.length));
        console.log(entero);
        color = color + VARIABLES[entero]
        console.log(color);
    }
    return "#" + color;
}