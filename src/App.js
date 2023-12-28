import logo from './Cookbook.gif'
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useState, createContext} from 'react';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';
import {NavbarContext} from './NavbarContext.js'
//Uncomment out when finishing the other components food, and what not.
export const RecipeContext = createContext("");

function App() {
  const [recipes, setRecipes] = useState("");

  return (

    <div className="App">
	<NavbarContext.Provider value = {{recipes, setRecipes}}>	
	<Header />
	<Body />
	<Footer />
	</NavbarContext.Provider>	
    </div>
  );
}

export default App;
