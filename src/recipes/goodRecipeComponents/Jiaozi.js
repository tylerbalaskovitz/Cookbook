import '../RecipeStyling.css';
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
		    8 ounces

    Napa cabbage (about 1/4 head), plus extra leaves for lining if steaming
    8 ounces

    ground pork
    1/2 bunch

    scallions (green and white parts), finely chopped
    1/2 cup

    finely chopped garlic chives
    1

    clove garlic, finely chopped
    2 teapoons

    freshly grated peeled ginger
    2 tablespoons

    soy sauce
    1/2 teaspoon

    toasted (Asian) sesame oil
    1 pound

    round wheat dumpling or potsticker wrappers
		</div>
		<div className="PictureOfRecipe">
		<img src={JiaoziImage} className="FoodImage" alt="food" />
		</div>
		<li className="CookingSteps">
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
