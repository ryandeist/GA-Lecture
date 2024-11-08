# HTML Forms

## Concepts
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

## The Form Element
### App goal 
As we work in this lecture we'll be building a contact form where a user can submit a message, and leave their contact information so that we're able to send them a reply. 

### The `<form>` element 
The `<form>` element represents a document section containing interactive controls for submitting information. `<form>` acts as a wrapper element for various other elements, which either offer structure to the form or work as ***controls*** for the form itself. 

Let's create a form using the `<form>` container element inside of the `<body>`. We'll add a header above it as well: 

```
<h1>Contact Form</h1>
<form>
  <!-- Form controls go here -->
</form>
```

### Key attributes of a form: `action` and `method`
While the `<form>` element can function with just its basic tag, it's often equipped with attributes that define its behavior and how it handles data. 

These attributes are optional, but key attribute like **action** and **method** are always used when sending for data to a server. 

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <!-- Form controls go here -->
</form>
```

The `action` attribute defines the URL that the form's data is sent to when the form is submitted. 

The `method` attribute defines which HTTP method is used when sending data. In the above example, the form data is being send as a post request. 

For a more complete list of `<form>` attributes, check out [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes) attributes on MDN. 

## Input Elements and Labels
### The `<input>` element
The `<form>` is a container element designed to be filled with other elements. One of the most common and versatile of these elements is the `<input>` tag. 

The `<input>` element is the primary way to create interfaces for interacting with the user. The look of `<input>` elements can vary drastically depending on their `type` attribute, which dictates a lot about the behavior of the `<input>` and the kind of information they collect. Two of the most common text based inputs include:

* **Text input**: The most basic form of an input field. It allows users to enter a single line of text. 
* **Email input**: This input is similar in appearance to the text input but has built-in text validation. This ensures users enter a valid email format.

### Basic form considerations
When creating a form, try to keep things simple and focused. While forms are often necessary to collect certain informationn, entering a lot of information on a webpage can be tedious and frustrating from a users perspective. 

Stick to information that serves the immediate needs of your interaction with the user. This approach respects the user's time and privacy, leading to a better user experience. Beyond that, there is a higher chance that the user will complete a form. 

In short, ***keep forms relevant and user-friendly***

With this in mind, what information do we need from our users to meet our needs?
* We want to collect their name to know how to refer to them in a reply. This will require an `<input type="text" />` element. 
* We need their email address so that we can respond to them. This will require an `<input type="email" />` element. 
* Finally, we need to collect the message itself. An `<input type="text" />` works for this. 

Any other information we try collect will feel unnecessary. Asking for the users age, location, or the number of cats in their household is not directly relavant, so inputs for this information should be omitted.

### Add inputs 
With the following considerations in mind, let's add the following `<input>` elements to our form. 

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <input type="text" />
  <input type="email" />
  <input type="text" />
</form>
```

Open the page to confirm the result. 

### Using labels
It can be hard to determine what of these inputs is supposed to do. Giving each of our inputs a clear label helps to solve that issue and increases accessibility. 

The `<label>` element should describe the information each input field seeks from a user. They are crucial for users with visual impariments who rely on screen readers, as labels offer otherwise missing context. 

Let's add a `<label>` element that correspondsd to each input element in our form to illustrate their use:

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" />
  <label for="email">Email:</label>
  <input type="email" id="email" />
  <label for="message">Message:</label>
  <input type="text" id="message" />
</form>
```

Notice the `for` attribute in the `<label>` element. This attribute should match the `id` of the carresponding `<input>` element. This link allows screen readers to annouce the label when the user focuses the input, enhancing accessibility. 

> Labels also improve the user experience on various devices. For instance, tapping on the label on a touchscreen device will focus the corresponding input field, just like a mouse clcik would. 

If we open these changes in the browser, we should see that each input has been labeled. 

### The `<textarea>` element
One final optimization before moving on. If you try to type a lengthy message into the message textbox, you'll notice that the input field remains a fixed, single-line size. Imagine if you needed to write a paragraph or give detailed feedback - it would be an awful user experience.

The `<textarea>` element is designed for multi-line trext input, providing a much better user experience for lengthier text entries. It expands vertically, allowing users to enter and view their text comfortably. 

Replace the single-line message `<input>` element with a `<textarea>` element: 

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name">
  <label for="email">Email:</label>
  <input type="email" id="email">
  <label for="message">Message:</label>
  <!-- Replacing input with textarea -->
  <textarea id="message"></textarea>
</form>
```
> Unlike `<input>`, `<textarea>` needs a closing tag `</treatarea>`

Refresh the browser and test this new `<textarea>` element. 

### Form Structure 
In HTML forms, organization and clarity are important. While you can use any regular HTML elements within a form (excluding another `<form>` tag), certain tags (like `<p>` and `<div>`) can help create user friend groupings of elements. This is also userful for styling a form. 

As an example, let's add some `<div>` tags to give our contact form a more vertical alignment.

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" />
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message"></textarea>
  </div>
</form>
```

## Button Elements in Forms
### The button element 
With our form  complete, we have one final step - we need some way for the user to submit the form once it has been filled out. 

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <div>
    <label for="name"> Name: </label>
    <input type="text" id="name" />
  </div>
  <div>
    <label for="email"> Email: </label>
    <input type="email" id="email" />
  </div>
  <div>
    <label for="message"> Message: </label>
    <textarea id="message"></textarea>
  </div>
  <!-- we need a submit button -->
</form>
```

For this, we can use a `<button>` element with a `type` attribute set to a value of `"submite"`.

When a `<button type="submit">` inside a `<form>` element is clicked, it will submit the form data to the URL designated by the forms `action` attirbute. 

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <div>
    <label for="name"> Name: </label>
    <input type="text" id="name" />
  </div>
  <div>
    <label for="email"> Email: </label>
    <input type="email" id="email" />
  </div>
  <div>
    <label for="message"> Message: </label>
    <textarea id="message"></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
```

> In this example, `"/the-form-submits-here"` is a placeholder URL; therefore, clicking submit doesn't submit the data anywhere. 

## Form Validation Techniques
### Form Validation 
You've probably filled out a form online before and hit the submit button, only to see a message like "This field is required" pop up on your screen because you missed filling in something. Or you may have entered a new password that didnt conform to the site's password requirments. 

While this can be frustrating, it's for the users benefit. Data shouldn't be sent to a server if its not in the required format, and users should be allowed to fix their errors.

This is accomplished through client-side form validation. When implemented, the browser performs tests before the form data is sent to the server. If any of those tests fails, the user is informed of what went wrong and what they the should take to fix the error.

### Validation attributes
Some validation is build into HTML as [constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation), which is accomplished by specifiying the `type` of an input (for example, `<input type ="email" />`) and through other validation-related attributes.

Another commonly used attribute is `required`. It ensures that a form field is filled in (has a value) before the form can be submitted. It's a boolean, so we don't need to use `required="true"`. Including the attribute inside the input tag is sufficient: 

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" required />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" required />
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message" required></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
```

#### Built-in form validation
As mentioned previously, the email type input also has a further level of [built-in validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#value)

Key things to note: 
* By default `<input type="email" />` will automatically ensure that the input value is either empty or properly formatted. The `type` attribute is a form of validation
* When we gave the `<input type="email" />` element the `required` attribute, we also ensured it could not be empty. This way we can be reasonably sure an email address will entered before this form can be submitted.

> Client-side form validation should never be considered a replacement for server-side validation. Client-side validation is relatively easy for bad actors to bypass.

> Client-side form validation is intended to provide a better user experience by catching and rejecting invalid entries and allowing users to fix them immediately 

#### Other helpful attributes
We can also use built-in validation to control things like `maxLength` of a text entry or the `min` and `max` values of numerical inputs. 

For instance, to prevent someone from copying an entire novel into our `<textarea>`, we could add a `maxLength` attribute: 

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" required />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" required />
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message" required maxLength="100"></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
```

This caps our message to 100 characters. 

## Accessibility in Web Forms
### Accessibility pitfall: misuse of the placeholder attribute
We've discussed the accessibility benefits of labeling inputs when working with web forms. Let's examine some of the pitfalls that come along with a commonly used alternative: placeholders.

![example of placeholders as labels](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/html-forms/accessibility-in-web-forms/assets/minimalist-placeholder.png)

While the visual minimalism might be tempting, placeholders should not be used instead of labels. 

The primary reason is that because placeholders are attributes, they are skipped over by browser translators. `<label>` elements wrap text, which can be translated safely, but placeholders inject text as code. This code is ignored suring translation. You can imagine why - if a browser started translating parts of code into other languages, the code itself would break. 

![example of the browser attempting to translate placeholders](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/html-forms/accessibility-in-web-forms/assets/placeholder-translation.png)

### Accessibility pitfall: vanishing instructions

When a user starts typing in an input field, the placeholder text disappears, taking any hints or instructions with it. It's important to consider how this impacts the ***cognitive accessibility*** of your app. 

This behavior negatively impacts the experience of individuals who struggle with recall, and even those that don't. This includes a wide range of people, such as those with short-term memory loss or ADHD, or even users that get sidetracked while filling out a form and come back later to finish. Placeholders add friction for those who may struggle to remember the information the field requires. 

![example of how using instructions in placeholders is problematic](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/html-forms/accessibility-in-web-forms/assets/password-placeholder.png)

![example of how using instructions in placeholders is problematic](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/html-forms/accessibility-in-web-forms/assets/date-placeholder.png)

### Accessibility pitfall: one box, two meanings
When considering different levels of digital literacy among users, it's crucial to recognize the placeholder text might be misleading for some. To certain individuals, especially during a quick scan, an input field with placeholder text might appear already filled. This can unintentionally lead users to overlook these fields, causing frustration when they  realize they've excluded necessary information. 

To make forms more accessible, place any details about the content or requirements of an input field in a clear and accessible position. Ideally, this information should be situated abvoe the input field itselfs and below its labal. This way, it can be referenced or translated, and we remove and ambiguity about whether the input is empty. 

![example of an accessible form](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/html-forms/accessibility-in-web-forms/assets/good-form.png)

### Making our form more accessible
To increase the accessibility of our form, let's tell the users which fields are required and which are not before the submit their form. All out fields are required in our case. Let's add a `<div>` element with some small print between each label and its corresponding input.

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <div>
    <label for="name"> Name: </label>
    <div><small>required</small></div>
    <input type="text" id="name" />
  </div>
  <div>
    <label for="email">Email:</label>
    <div><small>required</small></div>
    <input type="email" id="email" />
  </div>
  <div>
    <label for="message">Message:</label>
    <div><small>required</small></div>
    <textarea id="message"></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
```

Not that there is visual work we could do with this form to make it even more accessible to sighted users - refer to the assets above for some potential inspiration in styling forms. In particular, notice the spacing  between elements and how visual grouping can help bundle an input and the input details.

## The Select Element

## Additional Elements to Enhance Accessibility

## Advanced Form Validation and Feedback

## Advanced Input Types


