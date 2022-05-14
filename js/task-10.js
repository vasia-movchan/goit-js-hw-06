const boxesElement = document.querySelector("#boxes");
const controlsElement = document.querySelector("#controls");
const input = controlsElement.firstElementChild;
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

let widthBox = 30;
let heigthBox = 30;

function createBoxes(amount) {
  amount = input.valueAsNumber;
  let boxesMarkup = "";

  for (let i = 1; i <= amount; i += 1) {
    const colorBox = getRandomHexColor();
    const boxMarkup = `<div style="width: ${widthBox}px; height: ${heigthBox}px; background-color: ${colorBox}"></div>`;
    boxesMarkup += boxMarkup;
    widthBox += 10;
    heigthBox += 10;
  }

  boxesElement.insertAdjacentHTML("beforeend", boxesMarkup);
}

function destroyBoxes() {
  boxesElement.innerHTML = "";
  widthBox = 30;
  heigthBox = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
