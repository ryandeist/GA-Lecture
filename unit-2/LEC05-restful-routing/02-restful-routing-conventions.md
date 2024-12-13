# RESTful Routing - RESTful Routing Conventions
## RESTful Routing Conventions
RESTful routing is a set of best practices for organizing the interactions between client and server. Understanding the purpose and function of each route in a RESTful architecture is important for designing and building scalable and maintainable web applications. 

> Example: Breaking down the RESTful routing chart for a "blogs" resource to help you better understand each route and its purpose. 
```
| HTTP Method (Verb) | Path/Endpoint/URI     | CRUD Operation            | Route Name | Has Data Payload? | Purpose                                                                                            | Render/Redirect Action        |
| ------------------ | --------------------- | ------------------------- | ---------- | ----------------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| GET                | `/blogs`              | Read all _blogs_          | index      | No                | Renders a view that shows all blogs                                                                | `res.render('blogs/index')`   |
| GET                | `/blogs/:blogId`      | Read a specific _blog_    | show       | No                | Renders a view that shows a specific blog                                                          | `res.render('blogs/show')`    |
| GET                | `/blogs/new`          | None                      | new        | No                | Renders a view including a form the user can fill out and submit to add a new blog                 | `res.render('blogs/new')`     |
| GET                | `/blogs/:blogId/edit` | See note below*           | edit       | No                | Renders a view including a filled out form the user can edit and submit to update a specific blog  | `res.render('blogs/edit')`    |
| POST               | `/blogs`              | Create a new _blog_       | create     | Yes               | Handles the user submitting a form to create a new blog                                            | `res.redirect('/you-choose')` |
| PUT                | `/blogs/:blogId`      | Update a specific _blog_  | update     | Yes               | Handles the user submitting a form to update a specific blog                                       | `res.redirect('/you-choose')` |
| DELETE             | `/blogs/:blogId`      | Delete a specific _blog_  | delete     | No                | Handles the user request to delete a specific blog                                                 | `res.redirect('/you-choose')` |
```
> NOTE: The `edit` route may optionally read data for a specific blog to pre-fill data in the form that will ultimately be rendered to the user.

## Creating RESTful routing charts 
As a new web developer. understanding RESTful routing is key to building organized web applications.

Here's why:
- *Organizing your routes*: This chart will be your roadmap for organizing standard HTTP methods and their corresponding CRUD operations. It's like having a cheat sheet that clearly shows you which route does what in a restful API. 
- *Planning your projects*: Before you dive into coding your next big project, this chart will help you lay out all the routes that you need. It's a bit like planning chapters in a book - you'll know what each part should do, making your time coding more efficient and more organized. 
- *Create useful documentation*: Imagine you're creating documentation for your application. This routing chart can be a part of that - providing clear and concise instructions on how others can use your applications back end routes.
- *Working in teams*: When working on group projects, it's important that everyone speaks the 'route' language. This chart ensures that all team members understand and agree on what each route in you application should do, avoiding confusion and mismatches in your project. 

```
| HTTP Method (Verb) | Path/Endpoint/URI     | CRUD Operation            | Route Name | Has Data Payload? | Purpose                                                                                            | Render/Redirect Action        |
| ------------------ | --------------------- | ------------------------- | ---------- | ----------------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| GET                | `/puppies`              | Read all _blogs_          | index      | No                | Renders a view that shows all puppies                                                                | `res.render('puppies/index')` |
| GET                | `/puppies/:puppyId`      | Read a specific _blog_    | show       | No                | Renders a view that shows a specific puppy                                                          | `res.render('puppy/show')`    |
| GET                | `/puppies/new`          | None                      | new        | No                | Renders a view including a form the user can fill out and submit to add a new blog                 | `res.render('puppy/new')`     |
| GET                | `/puppies/:puppyId/edit` | See note below*           | edit       | No                | Renders a view including a filled out form the user can edit and submit to update a specific blog  | `res.render('puppy/edit')`    |
| POST               | `/puppies`              | Create a new _blog_       | create     | Yes               | Handles the user submitting a form to create a new blog                                            | `res.redirect('/you-choose')` |
| PUT                | `/puppies/:puppyIdId`      | Update a specific _blog_  | update     | Yes               | Handles the user submitting a form to update a specific blog                                       | `res.redirect('/you-choose')` |
| DELETE             | `/puppies/:puppyId`      | Delete a specific _blog_  | delete     | No                | Handles the user request to delete a specific blog                                                 | `res.redirect('/you-choose')` |

*NOTE: The `edit` route may optionally read data for a specific blog to pre-fill data in the form that will ultimately be rendered to the user.
```