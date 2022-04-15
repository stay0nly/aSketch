let color = "black";
let click = true;
const rangeValue1 = document.getElementById('range-value-1');
const rangeValue2 = document.getElementById('range-value-2');

function createBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

createBoard(16);

function changeSize(input) {
  createBoard(input);
  rangeValue1.innerHTML = input;
  rangeValue2.innerHTML = input;
}

function colorSquare() {
  if (click) {
  if (color === 'rainbow') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener("click", function() {
  click = !click;
});