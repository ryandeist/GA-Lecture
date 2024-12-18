// import { useState } from 'react'
// import IncrementButton from './components/IncrementButton/IncrementButton';
import NewTodo from './components/NewTodo/NewTodo';
import './App.css'

const App = () => {

  const addTodo = (newTodo) => {
    console.log(newTodo);
  };

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo
        addTodo={addTodo}
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
