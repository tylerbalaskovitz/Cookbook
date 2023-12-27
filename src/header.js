
import logo from './Cookbook.gif'
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route, Navigate, createContext} from 'react-router-dom';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';

function Header() {
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
