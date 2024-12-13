import { useState } from 'react'
import './App.css'

const App = () => {
  const [title, setTitle] = useState('The full name will appear here');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const handleFormChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => { 
    event.preventDefault(); // prevent default submit button behavior
    setTitle(`Your name is: ${formData.firstName} ${formData.lastName}.`); // set our title state based on the formData state at the time of submission
    setFormData({ firstName: '', lastName: ''}); // Reset fullName state to clear form inputs
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleFormChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleFormChange}
        />
        <button type='submit'>Submit your name</button>
      </form>
    </>

    // MANAGING CONTROLLED FORMS LESSION: 
    // const [title, setTitle] = useState('The full name will appear here');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    // const handleLastNameChange = (event) => {
    //   setLastName(event.target.value);
    // };

    // const handleFirstNameChange = (event) => {
    //   setFirstName(event.target.value);
    // };

    // return (
    //   <>
    //     <h2>{title}</h2>
    //     <form>
    //       <label htmlFor="firstName">First Name: </label>
    //       <input
    //         name="firstName"
    //         id="firstName"
    //         value={firstName}
    //         onChange={handleFirstNameChange}
    //       />
    //       <label htmlFor="lastName">Last Name: </label>
    //       <input
    //         name="lastName"
    //         id="lastName"
    //         value={lastName}
    //         onChange={handleLastNameChange}
    //       />
    //     </form>
    //   </>

    // CONTROLLED INPUTS LESSION

    // const [cityInput, setCityInput] = useState('');

    // const handleChange = (event) => {
    //   setCityInput(event.target.value);
    // };

    // return (
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
