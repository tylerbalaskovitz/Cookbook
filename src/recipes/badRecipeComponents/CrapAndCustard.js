import './GoodRecipes.css';
import React, {useState} from 'react';
import CrapAndCustardImage from '../../images/crapandcustard.jpg'
import TaskMapper from '../../taskMapper.js'

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
	'Crap And Custard'
	</header>
    <div className="CookingSteps">
	Crap and Custard is an old time classic that is shared with the friends and family through generations of poverty, despair, and comedy. So, have a laugh and share with your unwitting friends, inlaws and strangers
	</div>
	<div className="PictureOfRecipe">
		{CrapAndCustardImage}
	</div>
		<div>
		<button className="recipeButton" onClick={renderRecipeButton}> 
			See Recipe 
		</button>
		</div>
		if (renderRecipe) { 
		<div>
		  {crapAndCustardList.map(taskmapper => {
			return (<TaskMapper taskmapper={taskmapper}/>)})} 
		</div>
    		} else {
		<div>
			return null;
		</div>
		}
    </div>
  );
}

export default CrapAndCustard;
