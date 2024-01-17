import logo from './Cookbook.gif';
import './App.css';
import GoodRecipes from './recipes/GoodRecipes.js';
import BadRecipes from './recipes/BadRecipes.js';
import SpicyRecipes from './recipes/SpicyRecipes.js';
import ImportedButton from './buttons/buttons.js';
import React,{ useState, useEffect} from 'react';
import {useContext} from 'react';
import {NavbarContext} from './Contexts.js';
import {BackgroundImageContext} from './Contexts.js';
import BodyGreeting from './BodyGreeting.js';
import Timer from './timer/timer.js';
import Jiaozi from './images/jiaozi.jpg'
import KimchiJjigae from './images/kimchijjigae.jpg'
import CrapAndCustard from './images/crapandcustard.jpg'

function Body(){
	//Having the state set before the return statement but still withhin the function body

  const [homeRecipeState, setHomeRecipeState] = useState(false);
  const [goodRecipeState, setGoodRecipeState] = useState(false);
  const [badRecipeState, setBadRecipeState] = useState(false);
  const [spicyRecipeState, setSpicyRecipeState] = useState(false);
  const {recipes} = useContext(NavbarContext);
  const {backgroundImage, setBackgroundImage} = useContext(BackgroundImageContext);
  const [cookingTimerState, setCookingTimerState] = useState(false);

function backgroundCheck(){
	if (backgroundImage==="") {
		switch (recipes) {
		case "good": setBackgroundImage(Jiaozi); break;
		case "bad":setBackgroundImage(CrapAndCustard); break;
		case "spicy":setBackgroundImage(KimchiJjigae); break;
		case "timer":
		}
	}
}

function clearBody(){
	setHomeRecipeState(false)
	setGoodRecipeState(false);
	setBadRecipeState(false);
	setSpicyRecipeState(false);
	setCookingTimerState(false);
}

function navbarUpdate(){
	//debugger;
	switch (recipes) {
		case "home": clearBody(); backgroundCheck(); setBackgroundImage(""); setHomeRecipeState(true); break;
		case "good": clearBody(); backgroundCheck();setGoodRecipeState(true); break;
		case "bad": clearBody(); backgroundCheck();setBadRecipeState(true); break;
		case "spicy": clearBody(); backgroundCheck(); setSpicyRecipeState(true); break;
		case "timer": clearBody(); setCookingTimerState(true); break;
	}
 }
    useEffect(() => {navbarUpdate(); });
  return (
    <div className="App">
      <div className="App-header" style={{ backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        }}>
	<div>
		{ homeRecipeState ? <BodyGreeting /> : null }
		{ goodRecipeState ? <GoodRecipes /> : null} 
		{ badRecipeState ? < BadRecipes/> : null} 
		{ spicyRecipeState ? < SpicyRecipes/> : null} 
		{ cookingTimerState ? <Timer /> : null }
	</div>
	</div>
	</div>
  );
}

export default Body;
