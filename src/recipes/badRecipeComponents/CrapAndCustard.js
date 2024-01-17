import '../RecipeStyling.css';
import React, {useState} from 'react';
import RecipeImage from '../../images/crapandcustard.jpg'
import {useContext} from 'react';
import {BackgroundImageContext} from '../../Contexts.js'
import {TaskMapper} from '../../Mappers.js'
import CrapAndCustardList from './CrapAndCustardData.json'

function CrapAndCustard ({crapAndCustardList}) {
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
	Crap And Custard
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingDescription">
		Crap and Custard is an old time classic that is shared with the friends and family through generations of poverty, despair, and comedy. So, have a laugh and share with your unwitting friends, inlaws and strangers
		</div>
		<div className="PictureOfRecipe">
		<img src={RecipeImage} className="FoodImage" alt="food" />
		</div>
		<li className="CookingSteps" >
		  {crapAndCustardList.map(CrapAndCustardList => {
			return (<TaskMapper taskMapper={CrapAndCustardList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default CrapAndCustard;
