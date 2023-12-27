import './GoodRecipes.css';
import React, {useState} from 'react';
import JiaoziImage from '../../images/jiaozi.jpg'
import TaskMapper from '../../taskMapper.js'
import JiaoziList from './JiaoziData.json'

function Jiaozi ({jiaoziList}) {
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
		<img src={JiaoziImage} className="FoodImage" alt="food" />
		</div>
		<li>
		  {jiaoziList.map(JiaoziList => {
			return (<TaskMapper taskMapper={JiaoziList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default Jiaozi;
