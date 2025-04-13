let apiKey = "9245bb24b027319eb10oat71638b73cf";
let instructionsInput = document.querySelector("#dish");
let context =
  "You are a world-renowned chef in gluten-free dishes. Your mission is to list a recipe in basic HTML. Make sure to follow user instructions.At the end, sign the recipe with SheCodes AI.";
let prompt = `user instructions: generate a gluten-free ${instructionsInput} recipe`;

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

function generateRecipe(event) {
  event.preventDefault();
  recipeElement.innerHTML = `generating a recipe for ${instructionsInput.value}...`;
}

let recipeElement = document.querySelector("#recipe");
recipeElement.classList.remove("recipe");

function displayRecipe(response) {
  recipeElement.innerHTML = response.data.answer;
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);

axios.get(apiUrl).then(displayRecipe);
