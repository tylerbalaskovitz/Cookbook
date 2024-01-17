import '../RecipeStyling.css';
import React, {useState} from 'react';
import RecipeImage from '../../images/kimchijjigae.jpg'
import {useContext} from 'react';
import {BackgroundImageContext} from '../../Contexts.js'
import {TaskMapper} from '../../Mappers.js'
import {IngredientMapper} from '../../Mappers.js'
import KimchiJjigaeList from './KimchiJjigaeData.json'

function KimchiJjigae ({kimchiJjigaeList}) {
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
	Kimchi Jjigae	
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Insert kimchi jjigae recipe description here
		</div>
		<div className="PictureOfRecipe">
		<img src={RecipeImage} className="FoodImage" alt="food" />
		</div>
		<li className="CookingSteps">
		  {kimchiJjigaeList.map(KimchiJjigaeList => {
			return (<TaskMapper taskMapper={KimchiJjigaeList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default KimchiJjigae;
