createDivs();
function createDivs()   {
    const container = document.querySelector(".container");
    for(let i = 0; i < 16*16; i++) {
        let div = document.createElement("div");
        div.textContent = (i+1);
        div.className = "square";
        container.appendChild(div);
    }
}