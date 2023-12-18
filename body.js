
import logo from './Cookbook.gif'
import './App.css';
import {Link, Outlet, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';
import React, {useState} from 'react';


function Body() {
	//Having the state set before the return statement but still withhin the function body
  const [goodRecipeState, setGoodRecipeState] = useState(false);
  const [badRecipeState, setBadRecipeState] = useState(false);

  function handleGoodRecipeClick(){
	if (goodRecipeState == false){
		setGoodRecipeState(true)
	} else {
		setGoodRecipeState(false)
	}
  }	

  function handleBadRecipeClick(){
	if (goodRecipeState == false){
		setGoodRecipeState(true)
	} else {
		setGoodRecipeState(false)
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
		<button className="Good-Recipe-Button" onClick={<handleGoodRecipeClick />}>  View the Good stuff </button>
		<button className="Bad-Recipe-Button" onClick={<handleBadRecipeClick />}> View the shitty stuff </button>
	</div>
        </p>
	<div>
		<ImportedButton />
	</div>
	</header>
	    </div>
  );
}

export default Body;
