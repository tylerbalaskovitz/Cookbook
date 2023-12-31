
import logo from './Cookbook.gif'
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route, Navigate, createContext} from 'react-router-dom';
import {useContext} from 'react';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';
import {NavbarContext} from './NavbarContext.js';

function Header() {
	const {recipes, setRecipes} = useContext(NavbarContext);
	function goHome (){{ setRecipes("home")}};
	function goodRecipes () {{setRecipes("good")}};
	function badRecipes () {{setRecipes("bad")}};
	function spicyRecipes () {{setRecipes("spicy")}};
	function timer() {{setRecipes("timer")}};
	
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
