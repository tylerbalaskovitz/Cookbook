import './GoodRecipes.css';
import React, {useState} from 'react';
import CrapAndCustardImage from '../../images/crapandcustard.jpg'
import TaskMapper from '../../taskMapper.js'
import CrapAndCustardList from './CrapAndCustardData.json'

function Timer () {
const [timerOn, setTimerOn] = useState(false);

function turnOnTimer(){	
	(timerOn ? setTimerOn(false) : setTimerOn(true));
}
  return (
	<div>
    </div>
  );
}

export default Timer;
