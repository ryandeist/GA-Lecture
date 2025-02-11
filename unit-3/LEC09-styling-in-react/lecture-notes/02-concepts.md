# Styling in React - Concepts

## Overview of styling in React
Like many things in React, styling is done a little differently than what we’ve become accustomed to.

There are several popular methods for styling react components; what you choose to use in your applications is up to you. No true industry standard exists, so exposure to multiple styles and examples is ideal.

In an actual job setting, you’ll just adopt whatever libraries or conventions are used in the existing codebase.

## Some options for styling React components
In this module, we will look at a few of the more popular ways to style React components:

1. **Imported CSS Stylesheets**: This is the approach that `Vite` uses with its `<App> `component by default. Each component has a designated CSS file.

2. **Inline Styling**: This approach uses the `style` prop.

3. **Styled Components**: Requires a package: `npm install styled-components`.

    In their own words, Styled-Components *“Utilizes tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components… Styled-components is compatible with both React (for web) and React Native – meaning it’s the perfect choice even for truly universal apps!”*

4. **CSS Modules**: Similar to importing regular stylesheets, but different in a significant way - scoping. CSS files are included the same way but with the following file extension format: `filename.module.css`. CSS written in this module will be scoped locally to the importing component. This can help avoid class name collisions in large applications.

5. **SASS**: Requires a package: `npm install sass`.

    Sass: Sass is one of the most robust, stable, and powerful professional-grade CSS extension languages in the world.