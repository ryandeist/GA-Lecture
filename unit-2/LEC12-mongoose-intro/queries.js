/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
// Import the model from the todo.js model so we can use it below. 
const Todo = require('./models/todo.js');
//Mongoose methods https://mongoosejs.com/docs/api/model.html

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};

const runQueries = async () => {
  console.log('Queries running.')
  // The functions calls to run queries in our db will go here as we write them.
  // await createTodo();
//   await findTodos();
//   await findOneTodo();
//   await findByIdTodo();
    // await updateTodo();
    await deleteTodo();
};

connect()
/*------------------------------ Query Functions -----------------------------*/

// CREATE
const createTodo = async () => {
    const todoData = {
        text: "Learn CSS",
        isComplete: false,
    }

    const todo = await Todo.create(todoData)
    console.log("New todo:", todo)
}
// READ 
// Similar to something we would do for our index route (All TODOS)
const findTodos = async () => {
    const todos = await Todo.find({})
    console.log("All todos:", todos)
}

// Find one todo
const findByIdTodo = async () => {
    const id = '671acbab112dff586f76c7c7';
    const todo = await Todo.findById(id)
    console.log("One Todo:", todo)
}

// findOne
const findOneTodo = async () => {
    const todo = await Todo.findOne({text: "Learn HTML"})
    console.log("findOne():", todo);
};

// UPDATE 
const updateTodo = async () => {
    const id = "671acbab112dff586f76c7c7"
    const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { isComplete: true},
        { new: true},
    )
    console.log("Updated Todo:", updatedTodo)
}

// DELETE
const deleteTodo = async () => {
    const id = "671acbab112dff586f76c7c7"
    const removedTodo = await Todo.findByIdAndDelete(id)
};

// Query Methods https://mongoosejs.com/docs/api/query.html