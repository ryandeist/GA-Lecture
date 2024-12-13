import { useState } from 'react'
import './App.css'

const App = () => {

  const [cityInput, setCityInput] = useState('');

  const handleChange = (event) => {
    setCityInput(event.target.value);
  };

  return (
    <>
      <label htmlFor='cityInput'>City: </label>
      <input 
      value={cityInput} 
      id='cityInput' 
      name='cityInput' 
      type='text' 
      onChange={handleChange}
      />
    </>
  );
};

export default App;
