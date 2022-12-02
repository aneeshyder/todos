import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Todo from './Todo';

function TodosList() {
	const { todos } = useContext(GlobalContext);
	return (
		<ul className='todo-list'>
			{todos.map(todo => (<Todo key={todo.id} todo={todo} />))}
		</ul>
	)
}
export default TodosList