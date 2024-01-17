import '../RecipeStyling.css';
import React, {useState} from 'react';
import {useContext} from 'react';
import RecipeImage from '../../images/jiaozi.jpg'
import {TaskMapper} from '../../Mappers.js'
import {IngredientMapper} from '../../Mappers.js'
import {BackgroundImageContext} from '../../Contexts.js'
import JiaoziList from './JiaoziData.json'
import Ingredients from './JiaoziIngredients.json'

function Jiaozi ({jiaoziList, ingredientsList}) {
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
	Jiaozi	
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
		<div className="PictureOfRecipe">
		<img src={RecipeImage} className="FoodImage" alt="food" />
		</div>
		    <div> Ingredients </div>
		    <div className="CookingSteps">
			  {ingredientsList.map(Ingredients => {
				return (<IngredientMapper mapper = {Ingredients}/>)})} 
		   </div>
		<div> How To Cook </div>
		<ol className="CookingSteps">
		  {jiaoziList.map(JiaoziList => {
			return (<li><TaskMapper taskMapper={JiaoziList}/></li>)})} 
		</ol>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default Jiaozi;
