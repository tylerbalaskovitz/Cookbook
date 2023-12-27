import './GoodRecipes.css';
import React, {useState} from 'react';
import KimchiJjigaeImage from '../../images/kimchijjigae.jpg'
import TaskMapper from '../../taskMapper.js'
import KimchiJjigaeList from './KimchiJjigaeData.json'

function KimchiJjigae ({kimchiJjigaeList}) {
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
		<img src={KimchiJjigaeImage} className="FoodImage" alt="food" />
		</div>
		<li>
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
