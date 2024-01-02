import '../RecipeStyling.css';
import React, {useState} from 'react';
import HuoGuoImage from '../../images/huoguo.jpg'
import TaskMapper from '../../taskMapper.js'
import HuoGuoList from './HuoGuoData.json'

function HuoGuo ({huoGuoList}) {
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
	Huo Guo	
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
		Insert history of Huo Guo here
		</div>
		<div className="PictureOfRecipe">
		<img src={HuoGuoImage} className="FoodImage" alt="food" />
		</div>
		<li>
		  {huoGuoList.map(HuoGuoList => {
			return (<TaskMapper taskMapper={HuoGuoList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default HuoGuo;
