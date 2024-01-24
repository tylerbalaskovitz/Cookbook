import React, {useState, useEffect} from 'react';
import './timer.css';
import RecipeImage from '../images/timer.jpg'
import {useContext} from 'react';
import {NavbarContext} from '../Contexts.js';
import {BackgroundImageContext} from '../Contexts.js';
import {RecipeContext} from '../Contexts.js';



function Timer () {
const [timerOn, setTimerOn] = useState(false);
const [seconds, setSeconds] = useState(15);
const [minutes, setMinutes] = useState(1);
const [hours, setHours] = useState(1);
const {backgroundImage, setBackgroundImage} = useContext(BackgroundImageContext);
const {recipeName, setRecipeName} = useContext(RecipeContext);

function countdown() {
if (timerOn === true){
	if (seconds <  0) {
		if (minutes > 0) { setMinutes(minutes--); }
		if (hours > 0) { setHours(hours--); }
	} else { setSeconds(seconds--); }
	if (seconds === 0 && minutes == 0 && hours === 0) { alert("Times Up"); }
    }
}

function cookingTimer(timerOn){
      setInterval(countdown, 1000);
}

useEffect(() => {
countdown();
setBackgroundImage(RecipeImage);
setRecipeName({recipeName});
/*
const interval = setInterval(() => getTime, 1000);

return (() => clearInterval(interval);
*/
}, []);

function turnOnTimer(){	
	setTimerOn(true);
}
function turnOffTimer(){
	setTimerOn(false);
}
  return (
	<div className="TimerBox">
		<div className="RecipeTimer"> 
			<header> Recipe </header>
			<div>  </div>
		</div>
		<div className="TimerData">
		Hours : {hours}  Minutes : {minutes} Seconds : {seconds}
		</div>
	
		<button className="TimerButton" onClick={turnOnTimer}> Start </button>
		 <button className="TimerButton" onClick={turnOffTimer}>Stop </button>
		 <button className="TimerButton">Reset </button>
    </div>
  );
}

export default Timer;
