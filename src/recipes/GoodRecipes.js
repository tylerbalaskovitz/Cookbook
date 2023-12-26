import {Link} from 'react-router-dom';
//import {Button} from ./buttons/button.js
import './GoodRecipes.css';
import React, {useState} from 'react';

function GoodRecipes() {
  return (
    <div className="GoodRecipes">
      <header className="GoodRecipes-header">
		These are the Good Recipes. Take a Pick
        <p>
       Welcome to the recipes section where things get awfully delicious 
        </p>
	<div>
	Sugar Cookies
	</div>
	<div>
	Jiaozi	
	</div>
	<div>
	Beef Meatballs	
	</div>
	<div>	
	Pizza
	</div>
	</header>
    </div>
  );
}

export default GoodRecipes;
