console.log("Hello");

let rows = 50;
let columns = 50;

const canvas = document.querySelector("#etch-a-sketch");

for (let k = 0; k < columns; k++) {

    let column = document.createElement('div');
    column.classList.add("column");

    for (let i = 0; i < rows; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        column.appendChild(pixel);
    }

    canvas.appendChild(column);

}

addListeners();

function addListeners() {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover" , changeColor);
    });

    document.querySelector("button").addEventListener('click', reset);
}

function changeColor(e) {
    e.currentTarget.classList.add("active");
}

function reset() {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.setAttribute('class', 'pixel');
    });
}