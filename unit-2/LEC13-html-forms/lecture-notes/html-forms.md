# HTML Forms - Concepts
### What are HTML forms, and why would we use them?
Have you ever signed up for a website, searched for information, or provided feedback online? Chances are, you used an **HTML Form**. Forms are a fundamental part of a web applications, allowing users to enter and submit data. 

Forms are commonly used a form to: 
* **Sign up or Sign In** to a website
* **Submit order details** such as credit card or address information. 
* **Deliver Feedback** about a product or service. 
* **Conduct a search** for information.

Forms enable all of this and more! Forms and links hold a unique place in web development as they can **initiate HTTP requests directly** without needing JavaScript. This characteristic sets them apart, as they enable fundamental user interactions on the web, such as sumbitting data or navigating to different pages, through default browser functionlity. 

### Learning how to optimize HTML forms
Because they are such a heavy driver of user interaction and data collection, forms are one of the most vital parts of a webpage. To optimize forms for functionality and user experience, developers have access to a variety of tools and techniques, including: 

* **Diverse input methods**: Forms can incorporate various type of input fields to cater to different data requirements. These include text inputs, dropdowns, checkboxes, and data inputs. 
* **Enhanced accessibility features:** Making forms accessible is key to ensuring they usable by all audiences. This includes actions like allowing users to navigate between fields using the `Tab` key. This support is vital for those not using a mouse. 
* **Data validation mechanisms**: Validation messages ensure users are providing data correctly. These alert users to imput errors, such as an incorrectly formatted email address. 














# HTML Forms - Advanced Form Validation and Feedback
### CSS Selectors for Form Feedback
As we've seen, client-side form vaildation helps to give users feedback about the data they've entered in to a form. The downside is that, so far, users have needed to try and submit the form to recieve this feedback. This means that if anything is incomplete or entered incorrectly, the user only knows this upon rejection - not the best user experience. 

Luckily, we can use the `:valid` and `:invalid` psuedo classes to add live validation feedback to our forms. 

Let's leave our exising contact aside for now and use a simple sign in form to demonstrate the power of these psuedo-classes:

```
<h2>Sign In Form</h2>
<form action="/sign-in" method="POST">
  <div>
    <label for="user">Username:</label>
    <div><small>required, at least 6 characters</small></div>
    <input 
      type="text" 
      id="user" 
      minlength="6" 
      required 
    />
  </div>
  <div>
    <label for="password">Password:</label>
    <div><small>required, at least 6 characters</small></div>
    <input 
      type="password" 
      id="password" 
      minlength="6" 
      required 
    />
  </div>
  <button type="submit">Sign In</button>
</form>
```

Summarizing the above code, we have created a form that has: 
* A text input for the user to enter their username. 
* A password input for the user to enter their password. The `password` type obscures text as it is entered for security.
* These fields are required, and each must have at least 6 characters. 
* We've communicated these needs to users so that they are informed of the requirements, making our form more accessible. 

With that built, lets add some feedback for users. To do so, we need to create a CSS file :

```
touch style.css
```

Then in `index.html`, link the style sheet inside of the `<head>`:

```
<link rel="stylesheet" href="style.css">
```

Finally, in `style.css`, add the following:

```
input:valid {
  border: green 1px solid;
  background-color: lightgreen;
}
```

By default, these inputs will be considered invalid. This is because they are empty (and each field is required) and because each input has a `minlength` of 6 characters. We could add styling for `input:invalid` as well. However, this is less pleasant to look at when completing a form. 

Once all of the necessary conditions are met, the input becomes valid. You can test this in the browser now - once you hit six characters in either field, the border and background should change, indicating a valid entry. 

> Remember, all of this validation is happening on the client side. The `:valid` selector turns the input border green when the user's input  matches the required pattern. However, the password entry won't be verified until that data gets to the server and can be matched against the correct password help there. 

As is stands, we're allowing our users to set some truly weak passwords. For example, '123456' or 'password' would pass our current validation standards. 

### Validating with Regular Expression
We can use the [`pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) attribute and a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) to create more strict requirements for validity. Check out the [`pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) documentation on MDN for more details on implementing this kind of validation. 

### Accessibility Concerns
Typically, invalid inputs are styled red, while valid inputs are styled green. 

For people with certain types of colorblindness, this can present accessibility issues. As such, accompanying text or icons are typically favored over simply using color to note the validity in the form. 

This can be handled with JavaScript or CSS by adding an image background of an icon to input background. 

# HTML Forms - Advanced Input Types
### Using advanced inputs
We've explored some common input types, such as text input, but over 20 differet input types are available, each with distinct behaviors. An `<input>` with the `type="checkbox"` attribute, for example, creates a single check box that toggles between selected and deselected. Some input types like `type="date"` create entirely new types of inputs! 

For example:

```
<h2>Advanced input demo</h2>
<form>
  <div>
    <label for="checkbox-input">Checkbox input:</label>
    <input type="checkbox" id="checkbox-input" />
  </div>
  <div>
    <label for="number-input">Number input:</label>
    <input type="number" id="number-input">
  </div>
  <div>
    <label for="date-input">Date input:</label>
    <input type="date" id="date-input"/>
  </div>
  <div>
    <label for="color-input">Color input:</label>
    <input type="color" id="color-input" />
  </div>
  <div>
    <label for="password-input">Password input:</label>
    <input type="password" />
  </div>
  <div>
    <label for="telephone-input">Telephone input:</label>
    <input type="tel" id="telephone-input"/>
  </div>
</form>
```

All of the above are `<input>` elements with different behavior:
* `number` ensures that an input will only be valid if it contains numerical values. Mobile browsers on touchscreen devices show a numberical keyboard when users interact with this input, further improving their experience. 
* `date` is a helpful type due to the variety of dat formats world wide (dd/mm/yyyy, mm/dd/yyyy, yyyy/mm/dd, etc) Using the `date` type for inputs helps ensure users format date strings correctly. 
* `color` is similarly helpful as many users will not be familiar with RGB or Hexadecimal codes, and adding a visual component will help many users select the color they want for an input. 
* `password` is similar to text, but has the added benefit of obsuring the value as it's being entered.
* `tel` can be very useful for mobile sites, as it will attempt to bring up a keypad to make entering a phone number easier. Note that `tel` will not attempt to validate the structure of a phone number because there is too much variance in telephone format worldwide. 

Here is the [full list of input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) on MDN. 

### The `<datalist>` element
At first glance, `<datalist>` and `<select>` look very similar - both allow the user to select a number of `<option>` elements from a drop down. 

However, the `<datalist>` element is more like an associated list of possible options for an `<input>`, where `<select>` is a dropdown list of options in a form. 

To better understand what makes them unique, you can think the `<datalist>` element as a combination of the `<input>` and `<select>` elements. A `<datalist>` is a set of predefined options associated with a text input, allowing the user to select from the options or submit alternative text. 

One benefit is that the `<datalist>` element also provides an auto-complete feature. As the user starts typing, any available options matching their text will appear as suggestions. 

To test out the `<datalist>` element, add the following to your form:

```
<label for="pet-choice">Choose a pet:</label>
<input list="pets" id="pet-choice" name="pet-choice" />

<datalist id="pets">
  <option value="dog"></option>
  <option value="cat"></option>
  <option value="fish"></option>
  <option value="bird"></option>
  <option value="reptile"></option>
  <option value="rabbit"></option>
</datalist>
```

In this example, we provide some of the most popular pets as options in a `<datalist>`. These options are not an exhaustive list of all possible pets a user could have, but they reflect common answers. 

Using an input with a datalist means we can hint at popular answers while leaving the door open to enter something else. Is also subtly points users towards generic terms like "dog" or "fish" instead of specifics like "Golden Labradoodle" or "Peppermint Angelfish"

> `<select>` is more rigid and strictly enforces possible inputs to a curated list of possible options. An `<input>` with an associated `<datalist>` offers available options and auto-complete but should still be treated like an `<input>`.


