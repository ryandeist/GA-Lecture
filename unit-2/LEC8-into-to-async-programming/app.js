const fs = require('node:fs/promises');
// const usersApiUrl = 'https://jsonplaceholder.typicode.com/users/';
// Note our endpoint is changing to an invalid endpoint to demonstrate a 404 error!
const usersApiUrl = 'https://jsonplaceholder.typicode.com/fake-endpoint/';
const commentsApiUrl = 'https://jsonplaceholder.typicode.com/comments/4';


const readDataFiles = async () => {
    const data = await fs.readFile('test.txt', 'utf8');
    console.log(data);
    const data2 = await fs.readFile('test2.txt', 'utf8');
    console.log(data2);
    const data3 = await fs.readFile('test3.txt', 'utf8');
    console.log(data3);
}

readDataFiles();

const readAnotherFile = async () => {
    try {
        // asynchronous operation reading a file that doesn't exist
        const data = await fs.readFile('test4.txt', 'utf8');
        console.log(data);
    } catch (error) {
        // console logging the error lets us see what went wrong
        console.log(error);
    }
}

readAnotherFile();

const getAllUsers = async (url) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP Status: ${response.status}`);
      };
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

getAllUsers(usersApiUrl);

// fetch(commentsApiUrl)
//   .then((response) => response.json())
//   .then((data) => console.log(data));


console.log('run this as soon as possible');

