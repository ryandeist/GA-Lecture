# Intro to React - Components

## UI Built from Components
From the [React Docs](https://react.dev/learn#components)
> React apps are made out of components. A component is a piece of UI (User Interface) with its own logic and appearance. A component can be as small as a button or as large as an entire page. 
> React components are JavaScript functions that return markup.

![component to markup flowchart](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-react/components/assets/return-markup.png)

A core concept of React is the ability to build and reuse components throughout an entire application. Using components in React offer several benefits, the most important of which are: 

1. **Modularity**: Components allow developers to divide a UI into smaller, reusable pieces that can be independently developed and maintained. This modularity helps organize code, making it easier to manage and scale large applications. 

2. **Reusability**: Components are built with reusability in mind, meaning you can create generalized components that can be shared across different parts of an application or even across different projects. This reduces code duplication and simplifies development. For example, if you wanted to display a user's profile picture in many places across an application, a component could help accomplish that. 

![Example of how components can make up a UI](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-react/components/assets/components-b.png)

3. **Maintainability**: By encapsulating functionality within its components, React makes it easier to maintain and update and application. Because changes are isolated to a single component, the risk of bugs spreading through an app are reduced. 