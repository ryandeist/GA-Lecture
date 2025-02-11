# Styling in React - CSS Modules

## CSS Modules
CSS Modules offer a way to make CSS class names and animation names unique and specific to each component in your application. This helps avoid class name conflicts across your project.

Here’s how CSS Modules differ from regular CSS:

1. **Filename convention**: CSS Module files are named with a `.module.css` extension. For example, instead of `button.css`, you would name it `button.module.css`.

    In some tools or frameworks (including Vite), this is not a convention but a requirement (unless you manually configure the behavior).

2. **Import syntax**: Instead of the standard CSS import, CSS Modules are imported using the same syntax as a JavaScript module.

    For example, to import a CSS Module named `button.module.css` into a component file, you’d use this syntax: `import styles from './button.module.css'`.

3. **Scoped class selectors**: Class selectors in a CSS Module are scoped to the component, meaning they won’t affect other elements outside the component.

However, other types of selectors (like element selectors such as `h1` or ID selectors like `#submit`) in the CSS Module behave as global rules, similar to a regular stylesheet.

In short, using CSS Modules ensures that the styles you define for one component don’t unintentionally impact other parts of your application.

## Styling our component
Create a `button.module.css` file:

```bash
touch src/components/example-4-css-modules/button.module.css
```

In the newly created `src/components/example-4-css-modules/button.module.css` file, add the following to the `btn` class:

```css
/* src/components/example-4-css-modules/button.module.css */

.btn {
  background-color: #ffa500;
  border-radius: 8px;
  color: white;
  font-size: 24pt;
  padding: 15px 50px;
  width: 300px;
}
```

Now with your module setup, import your CSS module and reference its classes in your JSX as you would a normal stylesheet:

```jsx
// src/components/example-4-css-modules/Button.jsx

import styles from './button.module.css';

const Button = ({ buttonText }) => {
  return <button className={styles.btn}>{buttonText}</button>;
};

export default Button;
```
> The class names are *keys* on the `styles` object we imported.
>
> Recall that we can’t access keys that contain dashes using dot notation. Because of this, camelCase is preferred to kebab-case for class names when using CSS Modules. Here’s an example:
>
>```jsx
> // Kebab-case class names will cause problems when using dot notation 
> // because of the dash character, like in `class-name` below:
> return <button className={styles.class-name}>{buttonText}</button>;
>
> // Instead, use camelCase class names that work with dot notation:
> return <button className={styles.className}>{buttonText}</button>;
>
> // If you must use kebab-case class names, you can use bracket notation:
> return <button className={styles["class-name"]}>{buttonText}</button>;

Nice work!

## Benefits and pitfalls
CSS Modules automatically ensure that all class names are local to the component, significantly reducing the risk of style conflicts. This scoping makes it easier to maintain styles across large projects, as you can be confident that changes in one component’s CSS won’t inadvertently impact other components.

CSS Modules are not a JavaScript feature but are implemented in many tools and frameworks, including Vite. This makes them common enough so that a large community of web developers will be familiar with them, regardless of the framework they work in.

While CSS Modules are excellent for component-level styles, managing global styles can be more complex. Developers new to CSS Modules might find it challenging to understand how to apply global styles effectively.

Additionally, CSS Modules treat non-class selectors (like element and ID selectors) as global styles, Careful planning is required to ensure these styles don’t unintentionally affect other parts of the application.