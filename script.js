let apiKey = "9245bb24b027319eb10oat71638b73cf";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
let prompt = "";
let context = "";
let instructionsInput = document.querySelector("#instructions");

function displayRecipe(response) {
  recipeElement.innerHTML = "response.data.answer";
}

function generateRecipe(event) {
  event.preventDefault();
  let recipeElement = document.querySelector("#recipe");
}
let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);

axios.get(apiUrl).then(displayRecipe);
