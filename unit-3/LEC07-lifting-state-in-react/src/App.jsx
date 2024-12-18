import { useState } from 'react'
// import IncrementButton from './components/IncrementButton/IncrementButton';
import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    console.log([...todos, newTodo]);
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
      />
    </>
    // Counter App.
    // const [count, setCount] = useState(0);
    // const addOne = () => {
    //   setCount(count + 1);
    // };

    // return (
    //   <>
    //     <p>Count: {count}</p>
    //     <IncrementButton addOne={addOne} />
    //   </>
  );
};

export default App;
