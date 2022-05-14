const btnChangeColor = document.querySelector(".change-color");
const body = document.body;
const colorElement = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
  const valueColor = getRandomHexColor();
  body.style.backgroundColor = valueColor;
  colorElement.textContent = valueColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
