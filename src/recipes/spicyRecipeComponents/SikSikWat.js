import '../RecipeStyling.css';
import React, {useState} from 'react';
import RecipeImage from '../../images/siksikwat.jpg'
import SikSikWatList from './SikSikWatData.json'
import {useContext} from 'react';
import {BackgroundImageContext} from '../../Contexts.js'
import {TaskMapper} from '../../Mappers.js'
import {IngredientMapper} from '../../Mappers.js'

function SikSikWat ({sikSikWatList}) {
const [renderRecipe, setRenderRecipe] = useState(false);
const {backgroundImage, setBackgroundImage} = useContext(BackgroundImageContext);

function renderRecipeButton() {
	if (renderRecipe){
		setRenderRecipe(false)
	} else {
		setBackgroundImage(RecipeImage);
		setRenderRecipe(true)
	}
}

  return (
	<div>
  	<header>
	Sik Sik Wat
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Sik sik wat description here
		</div>
		<div className="PictureOfRecipe">
		<img src={RecipeImage} className="FoodImage" alt="food" />
		</div>
		<li className="CookingSteps">
		  {sikSikWatList.map(SikSikWatList => {
			return (<TaskMapper taskMapper={SikSikWatList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default SikSikWat;
