import '../RecipeStyling.css';
import React, {useState} from 'react';
import SikSikWatImage from '../../images/siksikwat.jpg'
import TaskMapper from '../../taskMapper.js'
import SikSikWatList from './SikSikWatData.json'

function SikSikWat ({sikSikWatList}) {
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
		<img src={SikSikWatImage} className="FoodImage" alt="food" />
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
