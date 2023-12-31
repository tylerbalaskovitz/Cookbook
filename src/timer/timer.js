import React, {useState, useEffect} from 'react';
import './timer.css';




function Timer () {
const [timerOn, setTimerOn] = useState(false);
const [seconds, setSeconds] = useState(0);
const [minutes, setMinutes] = useState(0);
const [hours, setHours] = useState(0);
const [days, setDays] = useState(0);

useEffect(() => {
/*
const interval = setInterval(() => getTime, 1000);

return (() => clearInterval(interval);
*/
}, []);

function turnOnTimer(){	
	(timerOn ? setTimerOn(false) : setTimerOn(true));
}
  return (
	<div>
		<button className="TimerButton"> Start </button>
		 <button className="TimerButton">Stop </button>
		 <button className="TimerButton">Reset </button>
    </div>
  );
}

export default Timer;
