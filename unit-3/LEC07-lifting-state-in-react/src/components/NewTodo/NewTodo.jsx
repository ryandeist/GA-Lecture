import { useState } from "react";

const NewTodo = (props) => {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTodo(newTodo);
        setNewTodo('');
    };

    const handleFormChange = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoInput">Todo: </label>
            <input
                type="text"
                id="todoInput"
                name="todo"
                onChange={handleFormChange}
                value={newTodo}
            />
            <button type="submit">Create To-do</button>
        </form>
    )
};

export default NewTodo;