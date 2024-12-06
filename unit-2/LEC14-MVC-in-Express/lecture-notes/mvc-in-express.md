# MVC in Express - MVC in Express
## Implementing MVC in our Application
Before we dice into the practical steps, let's review what controllers do in the [MVC(Model-View-Controller)](https://developer.mozilla.org/en-US/docs/Glossary/MVC) design pattern.

In MVC, Controllers are the intermediaries between Models and Views. They handle the user's requests, interact with Models to retrieve data, and decide which View to render. 

In simpler terms, whenever someone visits a page on your application, it's the controllers job to fiqure out what the user is asking for, talk to the model to get the data, and then send it to the view to be displayed. 

## Creating controllers
To adhere to the MVC pattern, we need to create a dedicated space for our controllers. 

### Step 1: Create the controllers directory
First, we'll set up a new controllers directory to keep our controllers organized. This helps in separating our route handling logic from our main `server.js` file, making our code cleaner and easier to manage. 

Open the terminal and navigate to the projects root directory. Then create a new directory called `controllers`.

```
mkdir controllers
cd controllers
```

### Step 2: Create the `fruits.js` file
Within `controllers`, create a file named `fruits.js`. This file will contain all the logic related to handling requests for anything to do with 'fruits' in the application. 

Create the fruits controller:

```
touch fruits.js
```

### Step 3: Understanding `controllers/fruits.js`
First, at the top of `fruits.js`, import the `Fruit` model just like in `server.js`:

```
// controllers/fruits.js

const Fruit = require('../models/fruit');
```

Once imported, you can use the `Fruit` model to perform CRUD operations in your controller functions. 

Currently, all of the logic that handles requests to different routes is handled in `server.js`. Rather than having the logic live there, inside anonymous callback functions, we want to move the code into named functions in our controller file. There functions will then be exported from our controller file for use with our routes.

For example,, if you have a route in your main server file that looks like this: 

```
// server.js

app.get('/fruits', async (req, res) => {
  // logic to show all fruits
});
```

We will move this logic to `fruit.js` and encapsulate it within a new function like this:

```
// controllers/fruits.js

const index = async (req, res) => {
  // logic to show all fruits
};

module.exports = {
  index,
  // add each of your controller function names here
};
```

In Node.js, each file in a project is treated as a separate module. `module.exports` is an object that the current module returns when it is "required" in another module. When you assign a function or an object to `module.exports`, you're making it accessible to other modules. 

In your `controllers/fruits.js` file, you will likely have multiple functions - each handling different routes (like index, show, create, etc). To make all these function accessible in other files (like the main `server.js` file), you need to add them to `module.exports`. Each property of this object is a function you wish to export. The property name will be how you access this function in other modules. 

### Naming controller functions
RESTful naming conventions typically follow a pattern that aligns with CRUD operations (Create, Read, Update, Delete). When organizing a REST application into and MVC structure, we rely on the naming conventions common to this standard. 

In REST, the HTTP method (GET, POST, PUT, DELETE) combined with the URL path gives us a clear indication of the function's purpose. 

* A GET request to `/fruits` suggests fetching and displaying all fruits. The `index` function is a standard name used in many frameworks and languages to represent the action of listing *all* resources of a certain type. 

* The term `index` in web development is commonly understood to represent a collection of items. So, when a developer sees a function named index, they can quickly infer that this function is responsible for retrieving and displaying a list or collection of items - in our case, all the fruits. 

You can follow this pattern for all routes in Express: 

| Action         | Description                                 | Route Example          | Controller Function Name |
| -------------- | ------------------------------------------- | ---------------------- | ------------------------ |
| Index          | Retrieves and displays a list of resources  | `GET /fruits`          | `index`                  |
| Show           | Displays a single resource                  | `GET /fruits/:id`      | `show`                   |
| New            | Returns a form for creating a new resource  | `GET /fruits/new`      | `new`                    |
| Create         | Processes form data, creates a new resource | `POST /fruits`         | `create`                 |
| Edit           | Returns a form for editing a resource       | `GET /fruits/:id/edit` | `edit`                   |
| Update         | Processes form data, updates a resource     | `PUT /fruits/:id`      | `update`                 |
| Destroy/Delete | Deletes a resource                          | `DELETE /fruits/:id`   | `destroy` or `delete`    |


## Moving route logic to controller functions

Let's start with the index route and move our route logic over to a new controller function: 

```
// controllers/fruits.js

const Fruit = require('../models/fruit');

const index = async (req, res) => {
  const foundFruits = await Fruit.find();
  res.render('fruits/index.ejs', { fruits: foundFruits });
};

module.exports = {
  index,
};
```

## Import your controller functions in `server.js`
Now that we moved our route logic to our controller. we'll need to import this logic back into `server.js` and connect it with our route handlers.

In the `server.js` file, import the `fruits.js` controller just above your routes. We'll call it `fruitsCtrl` for short: 

```
const fruitsCtrl = require("./controllers/fruits");
```

Now replace the inline route handler in `server.js` file with the corresponding function from `fruitsCtrl`

For example:

```
app.get('/fruits', async (req, res) => {
  // logic to get all fruits
});
```

Should be refactored to: 

```
app.get('/fruits', fruitsCtrl.index);
```

We have replaced the anonymous callback function in the route handler with a named function being imported from the controller. 

If your run you application, you should be able to visit `localhost:3000/fruits` and see the controller function in action. 

## Move all routes to `fruitsCtrl`
Take some time to move the logic from each route in server.js to a new function in fruitController.js. Then refactor each route handler in server.js to use a function imported from fruitsCtrl. Test each function before moving on to the next to ensure that your application is still able to access each new route as you go.

## Conclusion
By the end of this process, you’ll have cleanly separated the concerns of your application into models, views, and controllers. This will not only make your application more maintainable but also easier to extend and manage as it grows in complexity.

Your server file should now look something like this:

```
//server.js

// all dependencies above

const fruitsCtrl = require('./controllers/fruits');

app.get('/', fruitsCtrl.home);
app.get('/fruits/new', fruitsCtrl.new);
app.post('/fruits', fruitsCtrl.create);
app.get('/fruits', fruitsCtrl.index);
app.get('/fruits/:fruitId', fruitsCtrl.show);
app.delete('/fruits/:fruitId', fruitsCtrl.delete);
app.get('/fruits/:fruitId/edit', fruitsCtrl.edit);
app.put('/fruits/:fruitId', fruitsCtrl.update);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
```

Your controller file should look like this:

```
// controller/fruits.js

const Fruit = require("../models/fruit");

const home = async (req, res) => {
  res.render('index.ejs');
};

const new = (req, res) => {
  res.render('fruits/new.ejs');
};

const create = async (req, res) => {
  req.body.isReadyToEat = req.body.isReadyToEat === 'on';
  await Fruit.create(req.body);
  res.redirect('/fruits');
};

// Display all fruits
const index = async (req, res) => {
  const foundFruits = await Fruit.find();
  res.render('fruits/index.ejs', { fruits: foundFruits });
};

// ...continue for other routes

module.exports = {
  home,
  new,
  create,
  index,
  // export other functions
};
```
