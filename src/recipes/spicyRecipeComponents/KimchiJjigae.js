import './GoodRecipes.css';
import React, {useState} from 'react';
import CrapAndCustardImage from '../../images/crapandcustard.jpg'
import TaskMapper from '../../taskMapper.js'
import CrapAndCustardList from './CrapAndCustardData.json'

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
	Crap And Custard
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Crap and Custard is an old time classic that is shared with the friends and family through generations of poverty, despair, and comedy. So, have a laugh and share with your unwitting friends, inlaws and strangers
		</div>
		<div className="PictureOfRecipe">
		<img src={CrapAndCustardImage} className="FoodImage" alt="food" />
		</div>
		<li>
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

export default KimchiJjigae;
