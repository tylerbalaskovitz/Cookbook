import './GoodRecipes.css';
import CrapfilledCreamsoup from './badRecipeComponents/CrapfilledCreamsoup.js
import DiarheaDejour from './badRecipeComponents/DiarheaDejour.js
import shitSandwichfrom './badRecipeComponents/shitSandwich.js
import CrapAndCustard from './badRecipeComponents/CrapAndCustard.js
import React, {useState} from 'react';

function BadRecipes() {
  return (
    <div className="GoodRecipes">
      <div className="GoodRecipes-header">These are the Bad Recipes. Take a Pick
       Welcome to the recipes section where things get awfully delicious 
	<div>
	Shit sandwich
	</div>
	<div>
		<CrapAndCustard />
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
