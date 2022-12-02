import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Get Todos from local storage if any.
var todosString = localStorage.getItem('todos');
var todos = JSON.parse(todosString);

// Initial state
const initialState = {
	todos: todos ? todos : [],
	showAddTask: false
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	function deleteTodo(id) {
		dispatch({
			type: 'DELETE_TODO',
			payload: id
		});
	}

	function completeTodo(id) {
		dispatch({
			type: 'COMPLETE_TODO',
			payload: id
		});
	}

	function addTodo(todo) {
		dispatch({
			type: 'ADD_TODO',
			payload: todo
		});
	}

	function toggleAddTask(){
		dispatch({
			type: 'SHOW_TODO',			
		});
	}

	return (<GlobalContext.Provider value={{
		todos: state.todos,		
		showAddTask: state.showAddTask,
		toggleAddTask,
		deleteTodo,
		addTodo,
		completeTodo
	}}>
		{children}
	</GlobalContext.Provider>);
}