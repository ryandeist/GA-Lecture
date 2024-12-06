import './App.css'

const App = () => {

  const todo = { text: 'new todo', done: true };
  
  const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: false},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];

  const todoList = todos.map((todo,index) => 
  <li key={index}>{ todo.text }</li>
  )
  return (
    <>
    <h1>JS in JSX</h1>

    <h2>Conditional Rendering</h2>
    <p>{ todo.done ? `Task Completed - ${todo.text}` : todo.text }</p>

    <h2>Looping with JSX</h2>
    <ul>
      { todoList }
    </ul>

    <h2>Looping and Conditionally Rendering</h2>
    <ul>
      {
        todos.map((todo, index) => 
        <li key={ index }>
          { todo.done ? `Task Completed - ${todo.text}` : todo.text }
        </li>
        )
      }
    </ul>
    </>
  );
};

export default App;