import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Todo({ todo }) {
	const { deleteTodo, completeTodo } = useContext(GlobalContext);	
	return (
		<li id={todo.id} className={todo.complete === true ? 'complete' : ''}>
			<span onClick={() => completeTodo(todo.id)} >{todo.text}</span>
			<button onClick={() => completeTodo(todo.id)} className="done-btn">Done</button>
			<button onClick={() => deleteTodo(todo.id)} className="delete-btn">x</button>
		</li>
	)
}

export default Todo