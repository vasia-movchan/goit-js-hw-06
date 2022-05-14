const inputSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
inputSize.addEventListener("input", () => {
  text.style.fontSize = `${inputSize.value}px`;
  console.log(inputSize.value);
});
