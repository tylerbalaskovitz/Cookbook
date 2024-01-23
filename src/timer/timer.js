import React, {useState, useEffect} from 'react';
import './timer.css';
import RecipeImage from '../images/timer.jpg'
import {useContext} from 'react';
import {NavbarContext} from '../Contexts.js';
import {BackgroundImageContext} from '../Contexts.js';
import {RecipeContext} from '../Contexts.js';



function Timer () {
const [timerOn, setTimerOn] = useState(false);
const [seconds, setSeconds] = useState(0);
const [minutes, setMinutes] = useState(0);
const [hours, setHours] = useState(0);
const [days, setDays] = useState(0);
const {backgroundImage, setBackgroundImage} = useContext(BackgroundImageContext);
const {recipeName, setRecipeName} = useContext(RecipeContext);

useEffect(() => {
setBackgroundImage(RecipeImage);
setRecipeName({recipeName});
/*
const interval = setInterval(() => getTime, 1000);

return (() => clearInterval(interval);
*/
}, []);

function turnOnTimer(){	
	(timerOn ? setTimerOn(false) : setTimerOn(true));
}
  return (
	<div className="TimerBox">
		<div className="RecipeTimer"> 
			<header> Recipe </header>
			<div>  </div>
		</div>
		<div className="TimerData">
		Hours {hours} : Minutes {minutes} : Seconds {seconds}
		</div>
	
		<button className="TimerButton"> Start </button>
		 <button className="TimerButton">Stop </button>
		 <button className="TimerButton">Reset </button>
    </div>
  );
}

export default Timer;
