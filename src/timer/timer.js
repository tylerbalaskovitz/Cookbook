import './GoodRecipes.css';
import React, {useState, useEffect} from 'react';




function Timer () {
const [timerOn, setTimerOn] = useState(false);
const [seconds, setSeconds] = useState(0);
const [minutes, setMinutes] = useState(0);
const [hours, setHours] = useState(0);
const [days, setDays] = useState(0);

useEffect(() => {
const interval = setInterval(() => getTime, 1000);

return (() => clearInterval(interval);
}, []);

function turnOnTimer(){	
	(timerOn ? setTimerOn(false) : setTimerOn(true));
}
  return (
	<div>
    </div>
  );
}

export default Timer;
