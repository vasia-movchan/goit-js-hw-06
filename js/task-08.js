const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = form.elements;

  if (email.value === "" || password.value === "") {
    alert("Необхідно заповнити всі поля форми");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    form.reset();
  }
}
