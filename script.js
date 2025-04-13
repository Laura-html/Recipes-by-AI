function generateRecipe(event) {
  event.preventDefault();
  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "Enjoy!";
}
let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
