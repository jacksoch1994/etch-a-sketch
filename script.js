const canvas = document.querySelector("#etch-a-sketch");

function createPixels(length = 16) {
    for (let k = 0; k < length; k++) {

        let column = document.createElement('div');
        column.classList.add("column");
    
        for (let i = 0; i < length; i++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            column.appendChild(pixel);
        }
    
        canvas.appendChild(column);
    
    }
    addListeners();
}

function addListeners() {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover" , changeColor);
    });

    document.querySelector("button").addEventListener('click', reset);
}

function changeColor(e) {
    let classes = e.currentTarget.classList;
    if (classes.contains('active-3')) {
        return;
    } else if (classes.contains('active-2')) {
        classes.add("active-3");
    } else if (classes.contains('active-1')) {
        classes.add("active-2");
    } else {
        classes.add("active-1");
    }
}

function reset() {
    let columns = document.querySelectorAll(".column");
    columns.forEach((col) => {
        col.remove();
    });
    createPixels(promptUserForLength());

}

function promptUserForLength() {
    let length = prompt("Enter the number of pixels per side (MIN: 2, MAX: 100): ", 16);
    if (parseInt(length)) {
        if (length < 2) length = 2;
        if (length > 100) length = 100;
    } else {
        alert("Could not parse input. Please input an integer value.")
    }
    return length;
}

createPixels()