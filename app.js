


function createBoard(size) {
    let board = document.querySelector(".board");
    let squres = board.querySelectorAll("div");
    squres.forEach((div) => div.remove());
    board.style.gridTemplateColums = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    
    for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "black";
    });
    square.style.backgroundColor = "gray";
    board.insertAdjacentElement("beforeend", square);   
    }
}

createBoard(16);

function changeSize(input) {
    createBoard(input);
    
}