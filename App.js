import logo from './Cookbook.gif'
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import GoodRecipes from './recipes/GoodRecipes';
import ImportedButton from './buttons/buttons.js';
import HomePage from './homepage.js';
import Header from './header.js';
import Footer from './footer.js';

function App() {
  return (
    <div className="App">
	<Header />
	<HomePage />
	<Footer />
    </div>
  );
}

export default App;
