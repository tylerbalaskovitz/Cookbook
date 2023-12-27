import logo from './Cookbook.gif';
import './App.css';
import GoodRecipes from './recipes/GoodRecipes.js';
import BadRecipes from './recipes/BadRecipes.js';
import SpicyRecipes from './recipes/SpicyRecipes.js';
import ImportedButton from './buttons/buttons.js';
import React, {useState} from 'react';


function Body(){
	//Having the state set before the return statement but still withhin the function body
  const [goodRecipeState, setGoodRecipeState] = useState(false);
  const [badRecipeState, setBadRecipeState] = useState(false);
  const [spicyRecipeState, setSpicyRecipeState] = useState(false);
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

  return (
    <div className="App">
      <header className="App-header">
		Welcome to the Super Secret Cookbook 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Tyler's super secret cookbook. We have all sorts of recipes for you to check out! 
	<div>
		<button className="Home-Button" onClick={showHomeOnly} > View Home </button>
		<button className="Good-Recipe-Button" onClick={goodRecipeRender}>  View the Good stuff </button>
		<button className="Bad-Recipe-Button" onClick={handleBadRecipeClick}> View the shitty stuff </button>
		<button className="Spicy-Recipe=Button"  onClick={handleSpicyClick}>View the Spicy Stuff </button>
	</div>
        </p>
	<div>
		
	</div>
	<div>
		{ goodRecipeState ? <GoodRecipes /> : null} 
		{ badRecipeState ? < BadRecipes/> : null} 
		{ spicyRecipeState ? < SpicyRecipes/> : null} 
	</div>
	</header>
	    </div>
  );
}

export default Body;
