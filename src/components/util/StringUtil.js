export function buildUrlReceta(search) {
    const API_KEY = '9774ec06f9c5497098862d88cb96fc4b'; // Provided by sppoon
	const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  
	return `${baseUrl}?query=${search}&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&apiKey=${API_KEY}`;
}

export function buildUrlTipo(search) {
    const API_KEY = '9774ec06f9c5497098862d88cb96fc4b'; // Provided by sppoon
	const baseUrl = 'https://api.spoonacular.com/recipes/random';

    var url = `${baseUrl}?number=10&tags=${search}&apiKey=${API_KEY}`;
    return url
}


export function buildUrlRandomRecepie() {
    const API_KEY = '9774ec06f9c5497098862d88cb96fc4b'; // Provided by sppoon
	const baseUrl = 'https://api.spoonacular.com/recipes/random';

    var url = `${baseUrl}?number=1&apiKey=${API_KEY}`;
    return url
}

export function buildUrlById(search) {
    const API_KEY = '9774ec06f9c5497098862d88cb96fc4b'; // Provided by sppoon
	const baseUrl = 'https://api.spoonacular.com/recipes/findByIngredients';

    var url = `${baseUrl}?ingredients=${search}&api_key=${API_KEY}`;
    return `${baseUrl}?ingredients=${search}&apiKey=${API_KEY}`
}

