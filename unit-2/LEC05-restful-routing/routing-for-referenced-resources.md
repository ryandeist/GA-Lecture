# RESTful Routing - Routing for referenced resources
## Routing for Referenced resources (ONe: Many and Many:Many Relationships)
Below is a table demonstrating typical RESTful routing that you may experience when working with Reference Resources
> You may want to associate a blog with a subscriber. This would modify the `Subscriber` resource instead of the `Blog` resource. If this is the case, reverse the path above so that it begins with `/subscribers/:subscriberId/blogs
> If a route is marked as having a data payload, its means there is data that will be sent from the client to the server with the requests.
```
| HTTP Method (Verb) | Path/Endpoint/URI                        | CRUD Operation                          | Route Name    | Has Data Payload? | Purpose                                                                                                                         | Render/Redirect Action        |
| ------------------ | ---------------------------------------- | --------------------------------------- | ------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| POST               | /blogs/:blogId/subscribers/:subscriberId | Associate a _blog_ with a _subscriber_  | unpredictable | No                | Handles the user request to associate a subscriber to a blog                                                                    | `res.redirect('/you-choose')` |
| POST               | /blogs/:blogId/subscribers               | Associate a _blog_ with a _subscriber_  | unpredictable | Yes               | Handles the user request to associate a subscriber to a blog. The id of subscriber included in payload instead of the endpoint. | `res.redirect('/you-choose')` |

```

It's important to note that many applications can implement full CRUD on embedded resources without using all of the above routes. Often, embedded resources will be shown alongside their parent resources. For example, the comments on a blog might be shown on the blog show page, so there wouldn't be a need for a comment index view. Comments might not have an individual show view, so there might not be a need for a comment show page. The for to create a new comment might not need a deidicated view, so there may not be a new comment view. Your implementation will depend on your vision for your application. 