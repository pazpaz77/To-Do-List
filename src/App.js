import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';


function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoList/>
    </div>
  );
}

export default App;
