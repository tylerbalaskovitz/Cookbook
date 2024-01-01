import {Link} from 'react-router-dom';
import './RecipeStyling.css';
import React, {useState} from 'react';

import BeefMeatballs from './goodRecipeComponents/BeefMeatballs.js';
import Jiaozi from './goodRecipeComponents/Jiaozi.js';
import Pizza from './goodRecipeComponents/Pizza.js';
import SugarCookies from './goodRecipeComponents/SugarCookies.js';

import BeefMeatballsList from './goodRecipeComponents/BeefMeatballsData.json'
import JiaoziList from './goodRecipeComponents/JiaoziData.json'
import PizzaList from './goodRecipeComponents/PizzaData.json'
import SugarCookieList from './goodRecipeComponents/SugarCookiesData.json'

function GoodRecipes() {
  return (
    <div className="GoodRecipes">
    <div className="RecipeBorder">
      <header className="GoodRecipes-header">
		These are the Good Recipes. Take a Pick
        <p>
       Welcome to the recipes section where things get awfully delicious 
        </p>
	<div>
	<SugarCookies sugarCookiesList={SugarCookieList} />
	</div>
	<div>
	<Jiaozi jiaoziList = {JiaoziList} />	
	</div>
	<div>
	<BeefMeatballs beefMeatballsList = {BeefMeatballsList} />	
	</div>
	<div>	
	<Pizza pizzaList = {PizzaList} />	
	</div>
	</header>
	</div>
    </div>
  );
}

export default GoodRecipes;
