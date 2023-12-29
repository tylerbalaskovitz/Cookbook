
import logo from './Cookbook.gif';
import './App.css';

function BodyGreeting(){
  return (
    <div className="App">
      <header className="App-header">
		<div>
		Welcome to the Super Secret Cookbook 
		</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Tyler's super secret cookbook. We have all sorts of recipes for you to check out! 
        </p>
	</header>
	    </div>
  );
}

export default BodyGreeting;
