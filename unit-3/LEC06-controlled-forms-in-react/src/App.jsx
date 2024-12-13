import { useState } from 'react'
import './App.css'

const App = () => {

  // const [cityInput, setCityInput] = useState('');
  const [title, setTitle] = useState('The full name will appear here');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  // const handleChange = (event) => {
  //   setCityInput(event.target.value);
  // };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <>
      <h2>{title}</h2>
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </form>
    </>
    // <>
    //   <label htmlFor='cityInput'>City: </label>
    //   <input 
    //   value={cityInput} 
    //   id='cityInput' 
    //   name='cityInput' 
    //   type='text' 
    //   onChange={handleChange}
    //   />
    // </>
  );
};

export default App;
