import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Header() {

	const { todos } = useContext(GlobalContext);
	const pending = todos.filter(todo => todo.complete === false);

	return (
		<header className='header'>
			{todos.length ? (
				<h3>{todos.length} tasks added</h3>
			) : null}
			{todos.length ? (
				<h3>{pending.length} Pending</h3>
			) : null}
		</header>
	)
}

export default Header