import logo from './Cookbook.gif'
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route, Navigate, createContext} from 'react-router-dom';
import {useContext} from 'react';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';
import {NavbarContext} from './Contexts.js';
import {BackgroundImageContext} from './Contexts.js';


function Header() {
	const {recipes, setRecipes} = useContext(NavbarContext);
	const {backgroundImage, setBackgroundImage} = useContext(BackgroundImageContext);

	function clearBackground(){
		setBackgroundImage("");
	}

	function goHome (){{ clearBackground(); setRecipes("home")}};
	function goodRecipes () {{clearBackground();setRecipes("good")}};
	function badRecipes () {{clearBackground();setRecipes("bad")}};
	function spicyRecipes () {{clearBackground();setRecipes("spicy")}};
	function timer() {{clearBackground();setRecipes("timer")}};
	
  return (
	<div>
	<p>
		
		<button className="NavigationButton" onClick={goHome}> View Home </button>
		<button className="NavigationButton" onClick={goodRecipes}>  View the Good stuff </button>
		<button className= "NavigationButton" onClick={badRecipes}> View the shitty stuff </button>
		<button className= "NavigationButton" onClick={spicyRecipes}>View the Spicy Stuff </button>
		<button className= "NavigationButton" onClick={timer}>Timer </button>
	</p>
	</div>
  );
}

export default Header;
