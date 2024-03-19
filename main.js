const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".buttonContainer");
let isDrawing = false;
let size = 16;
resize(size);
mouseDrawing();

//RESETS Sketch if the button is pressed
buttonContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("reset")) {
        resetDraw();
    }
});

//Changes Sketch size if RESIZE button is pressed
buttonContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("resize")) {
        let newSize = prompt("Which size would you like the Sketch to be?(100 max)");
        newSize = parseInt(newSize);
        if (newSize > 0 && newSize <= 100) {
            resize(newSize);
        } else {
            alert("Value must be 0 - 100");
        }
    }
});
/**
 * Creates the size of the Sketch
 * @param {int} num 
 */
function createDivs(num) {
    container.innerHTML = "";
    for (let i = 0; i < num * num; i++) {
        let div = document.createElement("div");
        div.className = "square";
        container.appendChild(div);
    }
}
/**
 * How drawing works with mouse
 */
function mouseDrawing() {
    //If M1 is being holded you'll draw
    container.addEventListener('mousedown', () => {
        isDrawing = true;
    });
    //If M1 is not being holded you wont draw
    container.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    //If M1 is being holded and ur on top of the container you'll draw
    container.addEventListener('mouseover', (event) => {
        if (isDrawing && event.target.classList.contains('square')) {
            event.target.style.backgroundColor = 'black';
        }
    });
}
/**
 * Resets the draw made for now
 */
function resetDraw() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}
/**
 * Changes the size of the current container
 * @param {int} newSize 
 */
function resize(newSize) {
    size = newSize;
    container.style.setProperty('--size', size);
    createDivs(size);
}