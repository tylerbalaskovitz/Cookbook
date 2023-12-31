import './GoodRecipes.css';
import React, {useState} from 'react';
import CrapAndCustardImage from '../../images/crapandcustard.jpg'
import TaskMapper from '../../taskMapper.js'
import CrapAndCustardList from './CrapAndCustardData.json'

function Timer () {
const [timerOn, setTimerOn] = useState(false);
const [seconds, setSeconds] = useState(0);
const [minutes, setMinutes] = useState(0);
const [hours, setHours] = useState(0);
const [days, setDays] = useState(0);

function turnOnTimer(){	
	(timerOn ? setTimerOn(false) : setTimerOn(true));
}
  return (
	<div>
    </div>
  );
}

export default Timer;
