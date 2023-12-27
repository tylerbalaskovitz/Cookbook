import './GoodRecipes.css';
import React, {useState} from 'react';
import RecipeImage from '../../images/crapandcustard.jpg'
import TaskMapper from '../../taskMapper.js'
import BeefMeatballsList from './BeefMeatballsData.json'

function BeefMeatballs ({beefMeatballsList}) {
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
		Insert description of beef meatball	
		</div>
		<div className="PictureOfRecipe">
		<img src={RecipeImage} className="FoodImage" alt="food" />
		</div>
		<li>
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
