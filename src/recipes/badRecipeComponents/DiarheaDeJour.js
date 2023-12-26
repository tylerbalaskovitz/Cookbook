import './GoodRecipes.css';
import React, {useState} from 'react';
import DiarheaDeJourImage from '../../images/DiarheaDejour.jpg'
import TaskMapper from '../../taskMapper.js'
import DiarheaDeJourList from './DiarheaDeJourData.json'

function DiarheaDejour({diarheaDeJourList}) {
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
	Diarhea DeJour
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Diarhea De Jour starts with a bad day, and ends with an even worse one. Sometimes when you're feeling desparate, alone, or in the mood to call in sick but have terrible acting skills, Diarhea De Jour comes in hand and really hits the wrong places at the right time.	
		</div>
		<div className="PictureOfRecipe">
		<img src={DiarheaDeJourImage} className="FoodImage" alt="food" />
		</div>
		<li>
		  {diarheaDeJourList.map(DiarheaDeJourList => {
			return (<TaskMapper taskMapper={DiarheaDeJourList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}
export default DiarheaDejour;
