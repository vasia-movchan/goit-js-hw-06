const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", (event) => {
  if (inputElement.value.length === Number(inputElement.dataset.length)) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
