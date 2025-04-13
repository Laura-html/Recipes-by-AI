function generateRecipe(event) {
  event.preventDefault();
}

function displayRecipe(response) {
  recipeElement.innerHTML = response.data.answer;
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);

let instructionsInput = document.querySelector("#dish-name");
let apiKey = "9245bb24b027319eb10oat71638b73cf";
let context =
  "You are a world-renowned chef in gluten-free dishes. Your mission is to list a recipe in basic HTML using the user instructions. Make sure to follow user instructions.At the end, sign the recipe with SheCodes AI.";
let prompt = `user instructions: generate a gluten-free recipe using ${instructionsInput.value}`;

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement = document.querySelector("#full-recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML = `generating a recipe for ${instructionsInput.value}...`;

axios.get(apiUrl).then(displayRecipe);
