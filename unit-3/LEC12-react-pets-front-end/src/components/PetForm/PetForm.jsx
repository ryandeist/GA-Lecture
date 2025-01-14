import { useState } from 'react';

const PetForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        age: '',
    });

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
                    required
                />
                <label htmlFor="breed"> Breed: </label>
                <input
                    type="text"
                    id='breed'
                    name='breed'
                    onChange={handleChange}
                />
                <label htmlFor="age"> Age: </label>
                <input
                    type="number"
                    id='age'
                    name='age'
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Add Pet</button>
            </form>
        </div>
    )
};

export default PetForm;