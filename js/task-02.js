const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liMarkup = ingredients
  .map((ingredient) => {
    const liElement = document.createElement("li");
    liElement.textContent = ingredient;
    liElement.classList.add("item");
    return liElement.outerHTML;
  })
  .join("");

const list = document.querySelector("#ingredients");
list.innerHTML = liMarkup;
