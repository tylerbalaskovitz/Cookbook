import '../RecipeStyling.css';
import React, {useState} from 'react';
import RecipeImage from '../../images/CreamAndCrap.jpg'
import {TaskMapper} from '../../Mappers.js'
import {useContext} from 'react';
import {BackgroundImageContext} from '../../Contexts.js'
import CrapFilledCreamSoupList from './CrapFilledCreamSoupData.json'

function CrapfilledCreamSoup({crapFilledCreamSoupList}) {
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
	Crap Filled Cream Soup
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Taking a crap, and making it extra creamy isn't just a way of life, it's an art. When adding the cream, sugar and Ajax spray help cover the unpleasant odors most restaurant customers find offputting. Use this gingerly as you serve this sickening sensation to those who would least expect it	
		</div>
		<div className="PictureOfRecipe">
		<img src={RecipeImage} className="FoodImage" alt="food" />
		</div>
		<li className="CookingSteps">
		  {crapFilledCreamSoupList.map(CrapFilledCreamSoupList => {
			return (<TaskMapper taskMapper={CrapFilledCreamSoupList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default CrapfilledCreamSoup;
