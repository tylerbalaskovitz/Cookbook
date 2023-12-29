import logo from './Cookbook.gif';
import './App.css';
import GoodRecipes from './recipes/GoodRecipes.js';
import BadRecipes from './recipes/BadRecipes.js';
import SpicyRecipes from './recipes/SpicyRecipes.js';
import ImportedButton from './buttons/buttons.js';
import React,{ useState, useEffect} from 'react';
import {useContext} from 'react';
import {NavbarContext} from './NavbarContext.js';

function Body(){
	//Having the state set before the return statement but still withhin the function body
  const [goodRecipeState, setGoodRecipeState] = useState(false);
  const [badRecipeState, setBadRecipeState] = useState(false);
  const [spicyRecipeState, setSpicyRecipeState] = useState(false);
  const {recipes, setRecipes} = useContext(NavbarContext);

  function handleGoodRecipeClick(){
	if (goodRecipeState === false){
		setGoodRecipeState(true)
		console.log("handle Good Recipe is clicked")
	} else {
		setGoodRecipeState(false)
		console.log("handle Good Recipe is clicked again")
	}
  }	

  function handleSpicyClick(){
	if (spicyRecipeState === false){
		setSpicyRecipeState(true)
		console.log("handle spicy Recipe is clicked")
	} else {
		setSpicyRecipeState(false)
		console.log("handle spicy Recipe is clicked again")
	}
  }	
  function handleBadRecipeClick(){
	if (badRecipeState === false){
		setBadRecipeState(true)
		console.log("handle bad Recipe is clicked")
	} else {
		setBadRecipeState(false)
		console.log("handle bad  Recipe is clicked again")
	}
  }	
	function showHomeOnly(){
		setGoodRecipeState(false);
		setBadRecipeState(false);
		setSpicyRecipeState(false);
	}

	function goodRecipeRender() {
		if (goodRecipeState){
			setGoodRecipeState(false)
		} else {
			setGoodRecipeState(true)
		}
	}
function clearBody(){
	setGoodRecipeState(false);
	setBadRecipeState(false);
	setSpicyRecipeState(false);
}

function navbarUpdate(recipes){
	clearBody();
	switch (recipes) {
		case "home": break;
		case "good": setGoodRecipeState(true); break;
		case "bad": setBadRecipeState(true); break;
		case "spicy": setSpicyRecipeState(true); break;
	}
 }
    useEffect(() => {navbarUpdate({recipes}); });
  return (
    <div className="App">
      <header className="App-header">
		Welcome to the Super Secret Cookbook 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Tyler's super secret cookbook. We have all sorts of recipes for you to check out! 
	<div>
		<button className="NavigationButton" onClick={showHomeOnly} > View Home </button>
		<button className="NavigationButton" onClick={goodRecipeRender}>  View the Good stuff </button>
		<button className= "NavigationButton"  onClick={handleBadRecipeClick}> View the shitty stuff </button>
		<button className= "NavigationButton" onClick={handleSpicyClick}>View the Spicy Stuff </button>
	</div>
        </p>
	<div>
		
	</div>
	<div>
		{ goodRecipeState ? <GoodRecipes /> : null} 
		{ badRecipeState ? < BadRecipes/> : null} 
		{ spicyRecipeState ? < SpicyRecipes/> : null} 
		Navbar Context {recipes}
	</div>
	</header>
	    </div>
  );
}

export default Body;
