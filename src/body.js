import logo from './Cookbook.gif';
import './App.css';
import GoodRecipes from './recipes/GoodRecipes.js';
import BadRecipes from './recipes/BadRecipes.js';
import SpicyRecipes from './recipes/SpicyRecipes.js';
import ImportedButton from './buttons/buttons.js';
import React,{ useState, useEffect} from 'react';
import {useContext} from 'react';
import {NavbarContext} from './NavbarContext.js';
import BodyGreeting from './BodyGreeting.js';

function Body(){
	//Having the state set before the return statement but still withhin the function body
  const [homeRecipeState, setHomeRecipeState] = useState(false);
  const [goodRecipeState, setGoodRecipeState] = useState(false);
  const [badRecipeState, setBadRecipeState] = useState(false);
  const [spicyRecipeState, setSpicyRecipeState] = useState(false);
  const {recipes} = useContext(NavbarContext);
  const [cookingTimerState, setCookingTimerState] = useState(false);


function clearBody(){
	setHomeRecipeState(false)
	setGoodRecipeState(false);
	setBadRecipeState(false);
	setSpicyRecipeState(false);
}

function navbarUpdate(){
	//debugger;
	switch (recipes) {
		case "home": clearBody(); setHomeRecipeState(true); break;
		case "good": clearBody(); setGoodRecipeState(true); break;
		case "bad": clearBody(); setBadRecipeState(true); break;
		case "spicy": clearBody(); setSpicyRecipeState(true); break;
		case "timer": clearBody(); setCookingTimerState(true); break;
	}
 }
    useEffect(() => {navbarUpdate(); });
  return (
    <div className="App">
      <header className="App-header">
	<div>
		{ homeRecipeState ? <BodyGreeting /> : null }
		{ goodRecipeState ? <GoodRecipes /> : null} 
		{ badRecipeState ? < BadRecipes/> : null} 
		{ spicyRecipeState ? < SpicyRecipes/> : null} 
	</div>
	</header>
	    </div>
  );
}

export default Body;
