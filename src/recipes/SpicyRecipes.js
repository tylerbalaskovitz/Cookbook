import './GoodRecipes.css';
//components being put here
import CrapfilledCreamSoup from './badRecipeComponents/CrapfilledCreamSoup.js';
import DiarheaDejour from './badRecipeComponents/DiarheaDeJour.js';
import ShitSandwich from './badRecipeComponents/shitSandwich.js';
import CrapAndCustard from './badRecipeComponents/CrapAndCustard.js';
import React, {useState} from 'react';
import CrapAndCustardList from './badRecipeComponents/CrapAndCustardData.json'
import DiarheaDeJourList from './badRecipeComponents/DiarheaDeJourData.json'
import ShitSandwichList from './badRecipeComponents/ShitSandwichData.json'
import CrapFilledCreamSoupList from './badRecipeComponents/CrapFilledCreamSoupData.json'

function SpicyRecipes() {
//here there will need to be four different use states, one for each of the recipes
// that are being passed in.
const [crapAndCustardList, setCrapAndCustardList] = useState(CrapAndCustardList)
const [diarheaDeJourList, setDiarheaDeJourList] = useState(DiarheaDeJourList)
const [shitSandwichList, setShitSandwichList] = useState(ShitSandwichList)
const [crapFilledCreamSoupList, setCrapFilledCreamSoupList] = useState(CrapFilledCreamSoupList)

  return (
    <div className="GoodRecipes">
      <div className="GoodRecipes-header">
      These are the spiciest recipes that we could find. Enjoy as your face melts 
	<div>
		Kimchi Jjigae	
	</div>
	<div>
		Huo Guo	
	</div>
	<div>
		Sik Sik Wat	
	</div>
	<div>
		Phaal Curry
	</div>
	</div>
    </div>
  );
}

export default SpicyRecipes;
