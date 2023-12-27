import './GoodRecipes.css';
import React, {useState} from 'react';
import SugarCookiesImage from '../../images/sugarcookie.jpg'
import TaskMapper from '../../taskMapper.js'
import SugarCookieList from './SugarCookiesData.json'

function SugarCookies ({sugarCookiesList}) {
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
	Sugar Cookies	
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Insert Sugar Cookies Description	
		</div>
		<div className="PictureOfRecipe">
		<img src={SugarCookiesImage} className="FoodImage" alt="food" />
		</div>
		<li>
		  {sugarCookiesList.map(SugarCookieList => {
			return (<TaskMapper taskMapper={SugarCookieList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default SugarCookies;
