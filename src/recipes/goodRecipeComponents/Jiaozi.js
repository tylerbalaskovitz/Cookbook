import './GoodRecipes.css';
import React, {useState} from 'react';
import CrapAndCustardImage from '../../images/crapandcustard.jpg'
import TaskMapper from '../../taskMapper.js'
import CrapAndCustardList from './CrapAndCustardData.json'

function CrapAndCustard ({crapAndCustardList}) {
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
	Jiaozi	
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Insert description of Jiaozi	
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

export default CrapAndCustard;
