import './GoodRecipes.css';
import React, {useState} from 'react';
import RecipeImage from '../../images/beefmeatballs.jpg'
import TaskMapper from '../../taskMapper.js'
import BeefMeatballsList from './BeefMeatballsData.json'

function BeefMeatballs ({beefMeatballsList}) {
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
	Beef Meatballs	
	{!renderRecipe && 
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe
		</button>
	}
	</header>
	{renderRecipe && 
	    <div>
	    <div className="CookingSteps">
	    <li>
	    "1 pound ground beef

2 teaspoons gochujang (Korean hot pepper paste)

1 teaspoon kosher salt

1 teaspoon freshly ground black pepper

1 tablespoon soy sauce

2 teaspoons grated fresh ginger (heated to 150 F degrees (65 degrees C) to deactivate enzymes, or soaked in 1 tablespoon vinegar for 5 minutes)

4 cloves garlic, finely minced

⅓ cup thinly sliced green onions, plus more for garnish

½ cup finely crushed buttery round crackers (such as Ritz®)

toasted sesame seeds for garnish"
	</li>
		</div>
		<div className="PictureOfRecipe">
		<img src={RecipeImage} className="FoodImage" alt="food" />
		</div>
		<li>
		  {beefMeatballsList.map(BeefMeatballsList => {
			return (<TaskMapper taskMapper={BeefMeatballsList}/>)})} 
		</li>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			{renderRecipe ? "Hide Recipe" : "See Recipe"}
		</button>
		</div>
		}
    </div>
  );
}

export default BeefMeatballs;
