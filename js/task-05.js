const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", setInputInSpan);

function setInputInSpan() {
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
}
