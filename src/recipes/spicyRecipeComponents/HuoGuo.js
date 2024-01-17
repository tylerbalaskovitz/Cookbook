import '../RecipeStyling.css';
import React, {useState} from 'react';
import RecipeImage from '../../images/huoguo.jpg'
import {useContext} from 'react';
import {BackgroundImageContext} from '../../Contexts.js'
import {TaskMapper} from '../../Mappers.js'
import {IngredientMapper} from '../../Mappers.js'
import HuoGuoList from './HuoGuoData.json'

function HuoGuo ({huoGuoList}) {
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
	Huo Guo	
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Insert history of Huo Guo here
		</div>
		<div className="PictureOfRecipe">
		<img src={RecipeImage} className="FoodImage" alt="food" />
		</div>
		<li className="CookingSteps">
		  {huoGuoList.map(HuoGuoList => {
			return (<TaskMapper taskMapper={HuoGuoList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default HuoGuo;
