/*------------------------------ Starter Code ------------------------------*/

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const Todo = require('./models/todo.js');

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
  await runQueries()

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
  process.exit();
};

connect()

/*----------------------------- Query Functions -----------------------------*/

const createTodo = async () => {
  const todoData = {
    text: "learn React",
    isComplete: false,
  };
  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};

const findTodos = async () => {
  const todos = await Todo.find({});
  console.log("All todos:", todos);
};

const createSubtask = async () => {
    // Assume that the todo we want to create a subtask for has the following id:
    const todoId = "6733f37069ffa0a8bf99fefd";
    // Look up the todo by id, assign the returned object to `todo`
    const todo = await Todo.findById(todoId);

    const subtaskData = {
        text: "Learn how props work",
        isComplete: false,
    };

    // push the new sub-task data into the subtasks array on the todo:
    const subtask = todo.subtasks.push(subtaskData);
    // save the parent document:
    await todo.save();
    console.log("modified todo:", todo);
};

const findSubtask = async () => {
  const todoId = '6733f37069ffa0a8bf99fefd';
  const subtaskId = '6733f38f687fa1cdddb2346c'; 

  const todo = await Todo.findById(todoId);
  const subtask = todo.subtasks.id(subtaskId);

  console.log('Subdocument:', subtask);
};

const removeSubtask = async () => {
  const todoId = '6733f37069ffa0a8bf99fefd';
  const subtaskId = '673675d3046206204be65d9d'; 

  const todo = await Todo.findById(todoId);
  todo.subtasks.pull(subtaskId);
  await todo.save();

  console.log('Updated document:', todo);
};

const updateSubtask = async () => {
  const todoId = '6733f37069ffa0a8bf99fefd';
  const subtaskId = '673675d3046206204be65d9d'; 

  const todo = await Todo.findById(todoId);
  const subtask = todo.subtasks.id(subtaskId);

  subtask.isComplete = true;
  await todo.save();

  console.log('Updated document:', todo);
};

const findParentAndRemoveSubtask = async () => {
  const foundTodo = await Todo.findOne({
    'subtasks.text': 'Learn how props work'
  });

  const foundSubtask = foundTodo.subtasks.find((subtask) => {
    return subtask.text === 'Learn how props work'
  });

  foundSubtask.deleteOne();

  await foundTodo.save();
  console.log('Updated todo:', foundTodo);
};



/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log('Queries running.');
  // await createTodo();
  // await createSubtask();
  // await findSubtask();
  // await removeSubtask();
  // await updateSubtask();
  await findParentAndRemoveSubtask();
};
