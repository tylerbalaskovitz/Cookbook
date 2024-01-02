import '../RecipeStyling.css';
import React, {useState} from 'react';
import RecipeImage from '../../images/beefmeatballs.jpg'
import TaskMapper from '../../taskMapper.js'
import IngredientMapper from '../../IngredientMapper.js'
import BeefMeatballsList from './BeefMeatballsData.json'
import Ingredients from './BeefMeetballsIngredients.json'

function BeefMeatballs ({beefMeatballsList, ingredientsList}) {
const [renderRecipe, setRenderRecipe] = useState(false);

function renderRecipeButton() {
	if (renderRecipe){
		setRenderRecipe(false)
	} else {
		setRenderRecipe(true)
	}
}

  return (
	<div>
  	<header>
	Beef Meatballs	
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
	    <li>
		  {ingredientsList.map(Ingredients => {
			return (<IngredientMapper mapper = {Ingredients}/>)})} 
	</li>
		</div>
		<div className="PictureOfRecipe">
		<img src={RecipeImage} className="FoodImage" alt="food" />
		</div>
		<li className="CookingSteps">
		  {beefMeatballsList.map(BeefMeatballsList => {
			return (<TaskMapper taskMapper={BeefMeatballsList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default BeefMeatballs;
