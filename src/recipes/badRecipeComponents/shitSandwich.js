import '../RecipeStyling.css';
import React, {useState} from 'react';
import ShitSandwichImage from '../../images/shit-sandwich.png'
import {TaskMapper} from '../../Mappers.js'
import ShitSandwichList from './ShitSandwichData.json'

function ShitSandwich({shitSandwichList}) {
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
	Shit Sandwich
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		From rockstars to politicians, even album reviews, everyone knows loves a shit sandwich from time to time. When life is getting glub and you want to chow down on an ole time favorite that even the movie stars adore (See Pink Flamingos). You'll be presently surprised to find a way to make it all come together with a stinky shit sandwich	
		</div>
		<div className="PictureOfRecipe">
		<img src={ShitSandwichImage} className="FoodImage" alt="food" />
		</div>
		<li className="CookingSteps">
		  {shitSandwichList.map(ShitSandwichList => {
			return (<TaskMapper taskMapper={ShitSandwichList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}
export default ShitSandwich;
