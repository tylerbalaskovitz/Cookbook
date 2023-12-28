
import logo from './Cookbook.gif'
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route, Navigate, createContext} from 'react-router-dom';
import {useContext} from 'react';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';
import {NavbarContext} from './NavbarContext.js';

function Header() {
	const {recipes, setRecipes} = useContext(NavbarContext);
	function goHome (){ setRecipes("home")};
	function goodRecipes () {setRecipes("good")};
	function badRecipes () {setRecipes("bad")};
	function spicyRecipes () {setRecipes("spicy")};
	
  return (
	<div>
	<p>
		
		<button className="NavigationButton" > View Home </button>
		<button className="NavigationButton" >  View the Good stuff </button>
		<button className= "NavigationButton" > View the shitty stuff </button>
		<button className= "NavigationButton" >View the Spicy Stuff </button>
	</p>
	</div>
  );
}

export default Header;
