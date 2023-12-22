import './GoodRecipes.css'
const [crapAndCustardData, setCrapAndCustardData] = useState(CrapAndCustardData)
const [renderRecipe, setRenderRecipe] = useState(false);

function renderRecipe() {
	if (renderRecipe){
		setRenderRecipe(false)
	} else {
		setRenderRecipe(true)
	}
}

  return (
  	<header>
	CrapAndCustard
	</header>
    <div className="CookingSteps">
	Crap and Custard is an old time classic that is shared with the friends and family through generations of poverty, despair, and comedy. So, have a laugh and share with your unwitting friends, inlaws and strangers
	<div className="PictureOfRecipe">
		{CrapAndCustardImage}
	</div>
	<button className=recipeButton onClick={renderRecipe}> 
		See Recipe 
	</button>
    	<div>
		{renderRecipe ? < /> : null }
	</div>
    </div>
  );
}

export default CrapAndCustard;
