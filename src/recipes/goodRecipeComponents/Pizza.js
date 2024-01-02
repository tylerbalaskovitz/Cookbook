import '../RecipeStyling.css';
import React, {useState} from 'react';
import PizzaImage from '../../images/pizza.jpg'
import TaskMapper from '../../taskMapper.js'
import PizzaList from './PizzaData.json'

function Pizza ({pizzaList}) {
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
	Pizza	
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Pizza description	
		</div>
		<div className="PictureOfRecipe">
		<img src={PizzaImage} className="FoodImage" alt="food" />
		</div>
		<li className="CookingSteps">
		  {pizzaList.map(PizzaList => {
			return (<TaskMapper taskMapper={PizzaList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default Pizza;
