// src/App.jsx
import { useState } from 'react' // unpacking useState()
import './App.css';

const App = () => {
  const [mode, setMode] = useState('light');

  const [userObj, setUserObj] = useState({
    firstName: 'Ryan',
    lastName: 'Deist',
    hasPets: false,
    age: 31,
  });

  // console.log(userObj);

  const handleMode = (modeValue) => {
    console.log(modeValue);
    setMode(modeValue);
  };

  return (
    <>
      <div className={mode}>
        <h1>{`Hi my name is ${userObj.firstName} ${userObj.lastName}. I am ${userObj.age} and ${userObj.hasPets ? 'do have' : `don't have`} pets.`}</h1>
      </div>
      <div>
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>
        <button onClick={() => handleMode('neon')}>Neon Mode</button>
        <button onClick={() => handleMode('night')}>Night Mode</button>
      </div>
    </>
  );
};

export default App;
