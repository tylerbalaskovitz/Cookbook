import './RecipeStyling.css';
//components being put here
import React, {useState} from 'react';


import KimchiJjigae from './spicyRecipeComponents/KimchiJjigae.js'
import HuoGuo from './spicyRecipeComponents/HuoGuo.js'
import SikSikWat from './spicyRecipeComponents/SikSikWat.js'
import PhaalCurry from './spicyRecipeComponents/PhaalCurry.js'

import KimchiJjigaeList from './spicyRecipeComponents/KimchiJjigaeData.json'
import HuoGuoList from './spicyRecipeComponents/HuoGuoData.json'
import SikSikWatList from './spicyRecipeComponents/SikSikWatData.json'
import PhaalCurryList from './spicyRecipeComponents/PhaalCurryData.json'

function SpicyRecipes() {
//here there will need to be four different use states, one for each of the recipes
// that are being passed in.
const [kimchiJjigaeList, setKimchiJjigaeList] = useState(KimchiJjigaeList)
const [huoGuoList, setHuoGuoList] = useState(HuoGuoList)
const [sikSikWatList, setSikSikWatList] = useState(SikSikWatList)
const [phaalCurryList, setPhaalCurryList] = useState(PhaalCurryList)

  return (
    <div className="GoodRecipes">
      <div className="GoodRecipes-header">
	    <div className="GoodRecipesStyling">
      These are the spiciest recipes that we could find. Enjoy as your face melts 
	<div>
		<KimchiJjigae kimchiJjigaeList={kimchiJjigaeList} /> 	
	</div>
	<div>
		<HuoGuo	huoGuoList = {huoGuoList} />
	</div>
	<div>
		<SikSikWat sikSikWatList = {sikSikWatList} />
	</div>
	<div>
		<PhaalCurry phaalCurryList = {phaalCurryList} />
		</div>
	</div>
	</div>
    </div>
  );
}

export default SpicyRecipes;
