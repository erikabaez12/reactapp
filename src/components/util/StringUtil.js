export function buildUrlReceta(search) {
    const API_KEY = '244f8d85b58a49ab82d06ec82a66dbe3'; // Provided by sppoon
	const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  
	return `${baseUrl}?query=${search}&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&apiKey=${API_KEY}`;
}

export function buildUrlIngrediente(search) {
    const API_KEY = '244f8d85b58a49ab82d06ec82a66dbe3'; // Provided by sppoon
	const baseUrl = 'https://api.spoonacular.com/recipes/findByIngredients';

    //todo separar por comas  ingredients=apples,+flour,+sugar&number=2
    var url = `${baseUrl}?ingredients=${search}&api_key=${API_KEY}`;
    return `${baseUrl}?ingredients=${search}&apiKey=${API_KEY}`
}

export function buildUrlRandomRecepie() {
    const API_KEY = '244f8d85b58a49ab82d06ec82a66dbe3'; // Provided by sppoon
	const baseUrl = 'https://api.spoonacular.com/recipes/random';

    //todo separar por comas  ingredients=apples,+flour,+sugar&number=2
    var url = `${baseUrl}?number=1&api_key=${API_KEY}`;
    return url
}

export function getIngredients(ingredients){
    var listIngredients = "";
  ingredients.forEach(ingredient => {
      listIngredients = listIngredients + " " + ingredient.original;
  })
  return listIngredients;
}

export function getAllIngredients(recepie){
    var ingredients = [];
    var listIngredients = "";

    recepie.missedIngredients.forEach(missIngredient => {
        ingredients.push(missIngredient); 
    })

    recepie.unusedIngredients.forEach(unusedIngredient => {
        ingredients.push(unusedIngredient); 
    })

    recepie.usedIngredients.forEach(usedIngredient => {
        ingredients.push(usedIngredient); 
    })
    
  ingredients.forEach(ingredient => {
      listIngredients = listIngredients + " " + ingredient.original;
  })
  return listIngredients;
}

export function getSteps(steps){
  var stepByStep = "";
steps.forEach(step => {
    stepByStep = stepByStep + " " + step.step;
})
return stepByStep;
}

