import '../RecipeStyling.css';
import React, {useState} from 'react';
import PhaalCurryImage from '../../images/phaalcurry.jpg'
import {TaskMapper} from '../../Mappers.js'
import {IngredientMapper} from '../../Mappers.js'
import PhaalCurryList from './PhaalCurryData.json'

function PhaalCurry ({phaalCurryList}) {
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
	Phaal Curry	
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Insert the Phaal Curry recipe description here
		</div>
		<div className="PictureOfRecipe">
		<img src={PhaalCurryImage} className="FoodImage" alt="food" />
		</div>
		<li className="CookingSteps">
		  {phaalCurryList.map(PhaalCurryList => {
			return (<TaskMapper taskMapper={PhaalCurryList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default PhaalCurry;
