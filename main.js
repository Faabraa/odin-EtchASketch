const container = document.querySelector(".container");
let isDrawing = false;
createDivs();
mouseDrawing();
resetDraw();
/**
 * Creates a 16 * 16 where you will be able to draw with your cursor
 */
function createDivs() {
    for (let i = 0; i < 16 * 16; i++) {
        let div = document.createElement("div");
        div.className = "square";
        container.appendChild(div);
    }
}
/**
 * Detects where is the mouse, and if inside the container (On top of the divs)
 * Lets you draw, changing the background color to black
 */
function mouseDrawing() {
    //Reads mouse inside container
    container.addEventListener('mouseenter', () => {
        isDrawing = true;
    });
    //Reads mouse outside container
    container.addEventListener('mouseleave', () =>  {
        isDrawing = false;
    });
    container.addEventListener('mousemove', (event) => {
        if (isDrawing) {
            //If the cursor is on top of the square
            if (event.target.classList.contains('square')) {
                //Draw in black (each div)
                event.target.style.backgroundColor = 'black';
            }
        }
    });
}
/**
 * If you press a button the draw will be restarted
 */
function resetDraw() {

}