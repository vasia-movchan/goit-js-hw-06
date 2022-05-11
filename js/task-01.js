const categories = document.querySelectorAll(".item");
const numberCategories = categories.length;
console.log(`Number of categories: ${numberCategories}`);
console.log("");

categories.forEach((category) => {
  const titleOfCategory = category.querySelector("h2").textContent;
  const numberElementsOfCategory = category.querySelectorAll("li").length;
  console.log(`Category: ${titleOfCategory}`);
  console.log(`Elements: ${numberElementsOfCategory}`);
  console.log("");
});
