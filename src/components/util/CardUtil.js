import {  getIngredients, getAllIngredients, getSteps } from "./StringUtil"
import React from "react";
import ReactDOM from "react-dom";

export function createCardRecepie(recepie) {

    console.log(recepie)
    return (
      <img 
       src={recepie.image}
       alt="new"
       />
    );
    
    // const card = document.createElement('div');
    // card.className = 'card';

    // const name = document.createElement('h2');
    // const nameText = document.createTextNode(recepie.title);

    // name.appendChild(nameText)

    // const ingredientTitle = document.createElement('h1');
    // const ingredientTitleText = document.createTextNode("Ingredients");

    // ingredientTitle.appendChild(ingredientTitleText)

    // const ingredients = document.createElement('p');
    // const ingredientsText = document.createTextNode(getIngredients(recepie.extendedIngredients));

    // ingredients.appendChild(ingredientsText);

    // const stepsTitle = document.createElement('h1');
    // const stepsTitleText = document.createTextNode("Steps");

    // stepsTitle.appendChild(stepsTitleText)

    // const steps = document.createElement('p');
    // const stepsText = document.createTextNode(getSteps(recepie.analyzedInstructions[0].steps));
  
    // steps.appendChild(stepsText);

    // const link = document.createElement('a');
    // const linkText = document.createTextNode(recepie.sourceUrl);
  
    // link.appendChild(linkText);
    // link.href = recepie.sourceUrl;
    // link.target = 'blank';
    // link.className = 'button';
  
    // const img = document.createElement('img');
    // img.src = recepie.image;
    // img.alt = recepie.title;
   
    // card.appendChild(name);
    // card.appendChild(img);
    // card.appendChild(ingredientTitle);
    // card.appendChild(ingredients);
    // card.appendChild(stepsTitle);
    // card.appendChild(steps);
    // card.appendChild(link);
  
    // return card;
  }

  export function createCardIngredients(recepie) {
    const card = document.createElement('div');
    card.className = 'card';

    const name = document.createElement('h2');
    const nameText = document.createTextNode(recepie.title);

    name.appendChild(nameText)

    const ingredientTitle = document.createElement('h1');
    const ingredientTitleText = document.createTextNode("Ingredients");

    ingredientTitle.appendChild(ingredientTitleText)

    const ingredients = document.createElement('p');
    const ingredientsText = document.createTextNode(getAllIngredients(recepie));

    ingredients.appendChild(ingredientsText);

   /* const stepsTitle = document.createElement('h1');
    const stepsTitleText = document.createTextNode("Steps");

    stepsTitle.appendChild(stepsTitleText)

    const steps = document.createElement('p');
    const stepsText = document.createTextNode(getSteps(recepie.analyzedInstructions[0].steps));
  
    steps.appendChild(stepsText);

    const link = document.createElement('a');
    const linkText = document.createTextNode(recepie.sourceUrl);
  
    link.appendChild(linkText);
    link.href = recepie.sourceUrl;
    link.target = 'blank';
    link.className = 'button';*/
  
    const img = document.createElement('img');
    img.src = recepie.image;
    img.alt = recepie.title;
   
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(ingredientTitle);
    card.appendChild(ingredients);
    //card.appendChild(stepsTitle);
    //card.appendChild(steps);
    //card.appendChild(link);
  
    return card;
  }