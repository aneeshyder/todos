import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddButton() {
	const { addButton, toggleAddTask, showAddTask } = useContext(GlobalContext);
	return (
		<>
			<div className={`add-button ${showAddTask ? 'hide' : 'show'}`}>
				<button onClick={toggleAddTask}>+</button>
			</div>
		</>
	)
}

export default AddButton;