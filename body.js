
import logo from './Cookbook.gif'
import './App.css';
import {Link, Outlet, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';
function Body() {
  return (
    <div className="App">
      <header className="App-header">
		Welcome to the Super Secret Cookbook 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Tyler's super secret cookbook. We have all sorts of recipes for you to check out! 
	<div>
		<button className="Good-Recipe-Button" onClick={<GoodRecipes />}>  View the Good stuff </button>
		<button className="Bad-Recipe-Button" onClick={<GoodRecipes />}> View the shitty stuff </button>
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
