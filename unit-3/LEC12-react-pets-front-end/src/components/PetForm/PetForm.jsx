import { useState } from 'react';

const initialState = {
    name: '',
    breed: '',
    age: '',
};

const PetForm = (props) => {
    const [formData, setFormData] = useState( props.selectedPet || initialState );

    const handleChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAddPet(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name: </label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    onChange={handleChange}
                    value={formData.name}
                    required
                />
                <label htmlFor="breed"> Breed: </label>
                <input
                    type="text"
                    id='breed'
                    name='breed'
                    onChange={handleChange}
                    value={formData.breed}
                />
                <label htmlFor="age"> Age: </label>
                <input
                    type="number"
                    id='age'
                    name='age'
                    onChange={handleChange}
                    required
                    value={formData.age}
                />
                <button type='submit'>
                    {props.selectedPet ? 'Update Pet' : 'Add Pet'}
                </button>
            </form>
        </div>
    )
};

export default PetForm;