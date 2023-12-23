import './GoodRecipes.css';
import CrapfilledCreamSoup from './badRecipeComponents/CrapfilledCreamSoup.js';
import DiarheaDejour from './badRecipeComponents/DiarheaDeJour.js';
import shitSandwich from './badRecipeComponents/shitSandwich.js';
import CrapAndCustard from './badRecipeComponents/CrapAndCustard.js';
import React, {useState} from 'react';
import CrapAndCustardList from './badRecipeComponents/CrapAndCustardData.json'

function BadRecipes() {
//here there will need to be four different use states, one for each of the recipes
// that are being passed in.
const [crapAndCustardList, setCrapAndCustardList] = useState(CrapAndCustardList)

  return (
    <div className="GoodRecipes">
      <div className="GoodRecipes-header">These are the Bad Recipes. Take a Pick
       Welcome to the recipes section where things get awfully delicious 
	<div>
	Shit sandwich
	</div>
	<div>
		<CrapAndCustard crapAndCustardList={crapAndCustardList} />
	</div>
	<div>
	Diarhea De Jour
	</div>
	<div>
	Crapfilled Cream Soup
	</div>
	</div>
    </div>
  );
}

export default BadRecipes;
