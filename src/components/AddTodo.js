import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTodo() {

	const [text, setText] = useState('');
	const { addTodo, showAddTask, toggleAddTask } = useContext(GlobalContext);

	const onSubmit = () => {
		// stop if no text entered.
		if (text == '') {
			return
		}
		// create id for new todo.
		const newTodo = {
			id: Math.floor(Math.random() * 100000000),
			text,
			complete: false,
		}
		addTodo(newTodo);
		toggleAddTask();
		setText('');
	}
	return (
		<>
			<div class={`add-todo ${showAddTask ? 'show' : 'hide'}`}>
				<input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
				<button onClick={onSubmit}>Add</button>
			</div>
		</>
	)
}
export default AddTodo;