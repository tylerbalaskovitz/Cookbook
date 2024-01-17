import React from 'react';

export const IngredientMapper = ({mapper}) => {
	return (
		<div>
		<li>
		{mapper.ingredient}
		</li>
		<p>
		</p>
		</div>
	);
}

export const TaskMapper = ({taskMapper}) => {
	return (
		<div>
		{taskMapper.step}
		<p>
		</p>
		</div>
	);
}

export default TaskMapper;
