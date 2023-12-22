import logo from './Cookbook.gif'
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';

//Used to render the three main components of the application
function App() {
  return (
    <div className="App">
	<Header />
	<Body />
	<Footer />
    </div>
  );
}

export default App;