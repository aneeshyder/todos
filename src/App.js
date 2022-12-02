import './App.css';
import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import AddButton from './components/AddButton';

function App() {
	

  return (
    <div className="App">
     <GlobalProvider>
		<div class="wrapper">
			<Header />
			<AddTodo />
			<TodosList />
			<AddButton />
		</div>
	 </GlobalProvider>
    </div>
  );
}

export default App;
