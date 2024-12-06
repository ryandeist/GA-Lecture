# Intro to Async Programming
## Concepts:
### What is asynchronous programming?
By default, JavaScript operates synchronously; code is quickly executed line by line in the order it was written. This also means that each line of code must complete its execution before the execution of the following line can begin. If a particular task is time-consuming, it can cause a delay in the execution of subsequent lines of code. 

[*Asynchronous programming*](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) is a way to make your program perform tasks that might take a while without blocking other tasks.

Asynchronous programming allows a program to start a task that will be completed sometime in the future without blocking other tasks. This frees up the program to execute other tasks and eventually return to the original task once it's ready. 

![async diagram](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-asynchronous-programming/concepts/assets/sync-vs-async.png)
> In programming, asynchronous refers to operations or events that don't occur in sequential order.

### Why use asynchronous programming?
Asynchronous programming is useful for tasks that involve waiting. This usually involves scenarios where an application needs to wait for an external process, like fetching data from a database or reading a file. 

Unlike synchrosnous programming, where the entire application might freeze during such operations, asynchronous programming allows the rest of your application to remain active. This allows your program to update the UI or respond to user inputs while waiting for the data or file. 

Asynchronous programming significantly improves the overall user experience by preventing an application from becoming unresponsive during lengthy operations. Users are not left waiting for the application to respond, leading to a smoother and more interactive interface. 

You've likely encountered apps that utilize asynchronous programming befor, but might not have realized it. Apps like Facebook, X, blogs, news media and others will load only a small amount of content initially so the user can quickly view and interact with the application. As the user scrolls down the page, additional content is loading so that there is always more to look at below whatever the user is viewing. 

This feature is commonly referred to as *infinite scroll*, and it's just one of many examples of asynchronous programming. If these applications tried to load ***all*** the information available on the initial page, the user experience would suffer. Instead, the page loads with a small amount of data to get the user started and then adds more content asynchronously as they interact with the application. 

Many essential tools and operations in JavaScript are designed to work asynchronously - including operations like reading files or making database queries. Understanding how to work with asynchronous code will enable you to add these features to your apps. 

> Understanding asynchronous programming is crucial in JavaScript, especially for operations like server requests, file reading, or any other task that takes time to complete. 













