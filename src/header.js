
import logo from './Cookbook.gif'
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route, Navigate, createContext} from 'react-router-dom';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';

function Header() {
  return (
	<div>
	<p>
		Navbar goes here
	</p>
	</div>
  );
}

export default Header;
