let recipeElement = document.querySelector("#full-recipe");
recipeElement.classList.remove("hidden");
let instructionsInput = document.querySelector("#dish-name");

function displayRecipe(response) {
  recipeElement.innerHTML = `generating a recipe for ${instructionsInput.value}...`;
  recipeElement.innerHTML = response.data.answer;
}

function generateRecipe(event) {
  event.preventDefault();

  let apiKey = "9245bb24b027319eb10oat71638b73cf";
  let context =
    "You are a world-renowned chef in gluten-free dishes. Your mission is to list a recipe in basic HTML using the user instructions. Make sure to follow user instructions.At the end, sign the recipe with SheCodes AI.";
  let prompt = `user instructions: generate a gluten-free recipe using ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
