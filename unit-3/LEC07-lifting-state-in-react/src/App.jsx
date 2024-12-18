import { useState } from 'react'
import IncrementButton from './components/IncrementButton/IncrementButton';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <IncrementButton addOne={addOne} />
    </>
  );
};

export default App;
