import { useState } from 'react'
import './App.css'

const App = () => {
  const [title, setTitle] = useState('The full name will appear here');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirmation: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirmation: '',
  });
  const formIsInvalid = Object.values(errors).some(Boolean);
  const formHasMissingData = !Object.values(formData).every(Boolean);

  const checkErrors = ({ target }) => {
    // we only need to target the property from the event
    // so we'll destructure it from the event parameter
    if (target.name === 'firstName') {
      setErrors({
        ...errors,
        firstName:
          target.value.length < 3
            ? 'Your first name must be at least three characters long.'
            : '',
      });
    }
    if (target.name === 'lastName') {
      setErrors({
        ...errors,
        lastName:
          target.value.length < 2
            ? 'Your last name must be at least two characters long.'
            : '',
      });
    }
    if (target.name === 'password') {
      setErrors({
        ...errors,
        password:
          target.value.length < 6
            ? 'Your password must be at least six characters long.'
            : '',
        passwordConfirmation:
          formData.passwordConfirmation !== target.value
            ? 'The passwords do not match.'
            : '',
      });
    }
    if (target.name === 'passwordConfirmation') {
      setErrors({
        ...errors,
        passwordConfirmation:
          formData.password !== target.value
            ? 'The passwords do not match.'
            : '',
      });
    }
  };

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // invoke helper function, passing it the event
    checkErrors(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default submit button behavior
    setTitle(`Your name is: ${formData.firstName} ${formData.lastName}.`); // set our title state based on the formData state at the time of submission
    setFormData({
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirmation: '',
    }); // Reset formData state to clear form inputs
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleFormChange}
          />
          {errors.firstName && <p className='error'>{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleFormChange}
          />
          {errors.lastName && <p className='error'>{errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleFormChange}
          />
          {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="passwordConfirmation">Confirm Password: </label>
          <input
            type='password'
            id='passwordConfirmation'
            name='passwordConfirmation'
            value={formData.passwordConfirmation}
            onChange={handleFormChange}
          />
          {errors.passwordConfirmation && <p className='error'>{errors.passwordConfirmation}</p>}
        </div>
        <button type='submit' disabled={formIsInvalid || formHasMissingData}>
          Submit your Name
        </button>
      </form>
    </>

    // FORM STATE AS A SINGLE OBJECT & HANDLING FORM SUBMISSION

    // const [title, setTitle] = useState('The full name will appear here');
    // const [formData, setFormData] = useState({
    //   firstName: '',
    //   lastName: '',
    // });

    // const handleFormChange = (event) => {
    //   setFormData({...formData, [event.target.name]: event.target.value});
    // };

    // const handleSubmit = (event) => { 
    //   event.preventDefault(); // prevent default submit button behavior
    //   setTitle(`Your name is: ${formData.firstName} ${formData.lastName}.`); // set our title state based on the formData state at the time of submission
    //   setFormData({ firstName: '', lastName: ''}); // Reset fullName state to clear form inputs
    // };

    // return (
    //   <>
    //     <h2>{title}</h2>
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="firstName">First Name: </label>
    //       <input
    //         name="firstName"
    //         id="firstName"
    //         value={formData.firstName}
    //         onChange={handleFormChange}
    //       />
    //       <label htmlFor="lastName">Last Name: </label>
    //       <input
    //         name="lastName"
    //         id="lastName"
    //         value={formData.lastName}
    //         onChange={handleFormChange}
    //       />
    //       <button type='submit'>Submit your name</button>
    //     </form>
    //   </>

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
