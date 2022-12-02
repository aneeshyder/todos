export default (state, action) => {
	switch (action.type) {
		case 'DELETE_TODO':
			const newTodos = state.todos.filter(todo => todo.id !== action.payload);
			localStorage.setItem("todos", JSON.stringify(newTodos));
			return {
				...state,
				todos: newTodos
			}
		case 'ADD_TODO':
			const updateTodos = [action.payload, ...state.todos]
			localStorage.setItem("todos", JSON.stringify(updateTodos));
			return {
				...state,
				todos: updateTodos,
			}
		case 'SHOW_TODO':
			return {
				...state,
				showAddTask: state.showAddTask ? false : true
			}
		case 'COMPLETE_TODO':
			const filetered = state.todos.map(todo => (action.payload === todo.id ?
				({
					text: todo.text,
					id: todo.id,
					complete: todo.complete === true ? false : true,
				})
				: todo))
			localStorage.setItem("todos", JSON.stringify(filetered));
			return {
				...state,
				todos: filetered
			}
		default:
			return state;
	}
}