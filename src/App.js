import logo from './Cookbook.gif'
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useState, createContext} from 'react';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';
import {NavbarContext} from './Contexts.js';
import {BackgroundImageContext} from './Contexts.js'

function App() {
  const [recipes, setRecipes] = useState("home");
  const [backgroundImage, setBackgroundImage] = useState("");

  return (

    <div className="App">
	<NavbarContext.Provider value = {{recipes, setRecipes}}>	
	<BackgroundImageContext.Provider value = {{backgroundImage, setBackgroundImage}}>
	<Header />
	<Body />
	<Footer />
	</BackgroundImageContext.Provider> 
	</NavbarContext.Provider>	
    </div>
  );
}

export default App;
