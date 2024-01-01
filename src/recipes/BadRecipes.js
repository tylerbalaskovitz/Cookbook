import './RecipeStyling.css';
import CrapfilledCreamSoup from './badRecipeComponents/CrapfilledCreamSoup.js';
import DiarheaDejour from './badRecipeComponents/DiarheaDeJour.js';
import ShitSandwich from './badRecipeComponents/shitSandwich.js';
import CrapAndCustard from './badRecipeComponents/CrapAndCustard.js';
import React, {useState} from 'react';
import CrapAndCustardList from './badRecipeComponents/CrapAndCustardData.json'
import DiarheaDeJourList from './badRecipeComponents/DiarheaDeJourData.json'
import ShitSandwichList from './badRecipeComponents/ShitSandwichData.json'
import CrapFilledCreamSoupList from './badRecipeComponents/CrapFilledCreamSoupData.json'

function BadRecipes() {
//here there will need to be four different use states, one for each of the recipes
// that are being passed in.
const [crapAndCustardList, setCrapAndCustardList] = useState(CrapAndCustardList)
const [diarheaDeJourList, setDiarheaDeJourList] = useState(DiarheaDeJourList)
const [shitSandwichList, setShitSandwichList] = useState(ShitSandwichList)
const [crapFilledCreamSoupList, setCrapFilledCreamSoupList] = useState(CrapFilledCreamSoupList)

  return (
    <div className="GoodRecipes">
    <div className="RecipeBorder">
      <div className="GoodRecipes-header">These are the Bad Recipes. Take a Pick
       Welcome to the recipes section where things get awfully delicious 
	<div>
		<ShitSandwich shitSandwichList={shitSandwichList} />
	</div>
	<div>
		<CrapAndCustard crapAndCustardList={crapAndCustardList} />
	</div>
	<div>
		<DiarheaDejour diarheaDeJourList={diarheaDeJourList} />
	</div>
	<div>
		<CrapfilledCreamSoup crapFilledCreamSoupList={crapFilledCreamSoupList} />
	</div>
	</div>
	</div>
    </div>
  );
}

export default BadRecipes;
