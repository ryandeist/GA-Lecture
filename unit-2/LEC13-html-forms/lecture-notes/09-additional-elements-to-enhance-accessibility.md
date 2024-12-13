# HTML Forms - Additional Elements to Enhance Accessibility
## `<fieldset>` and `<legend>` elements
`<fieldset>` is a layout element specifically designed to group related elements together in a form. Unlike `<div>`, which is a generic and non-semantic way to divide content, a `<fieldset>` offers improved markup clarity and has an implicit ARIA role built in. 

The `<legend>` element goes inside the `<fieldset>` element and serves as a caption for whatever content is contained in the `<fieldset>`. These help users more readily understand the purpose of each section in a form. 

Use these elements in our form to group the inputs a user provides their name and email addresses in:

```
<!-- More HTML above -->
<form action="/the-form-submits-here" method="POST">
  <fieldset>
    <legend>Contact information</legend>
    <div>
      <label for="name">Name:</label>
      <div><small>required</small></div>
      <input type="text" id="name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <div><small>required</small></div>
      <input type="email" id="email" required />
    </div>
  </fieldset>
  <!-- More HTML below -->
```

The `<fieldset>` wraps around all the `<input>` elements that make up the grouping

One of the big benefits of the `<fieldset>` element is that it can help provide meaningful ARIA labeling. The ARIA `group` role denotes a collection of items or elements with related functionality. 

As this is the intended use-case for `<fieldset>`, this is also the implicit ARIA role for an `<fieldset>` element, meaning that the browser automatically interprets the role without us needing to use the `role` attribute. 

There is another improvment to make:

```
<form action="/the-form-submits-here" method="POST">
  <!-- Add the aria-labelledby attribute: -->
  <fieldset aria-labelledby="contact-legend">
    <!-- Add an id below: -->
    <legend id="contact-legend">Contact Information</legend>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" required />
    </div>
  </fieldset>
```

We'll follow a familiar pattern to associate the `<fieldset>` and `<legend>` using an `id` and the [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute. This is a great way to provide an accessible name for the `<fieldset>`.

In the same way that `<input>` elements should always have a `<label>`, giving each `<fieldset>` element an appropriate `<legend>` goes a long way towards ensuring your forms remain accessible and clear to users. 

Finally, let's use another `<fieldset>` to finish our form:

```
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <fieldset aria-labelledby="contact-legend">
    <legend id="contact-legend">Contact information</legend>
    <div>
      <label for="name">Name:</label>
      <div><small>required</small></div>
      <input type="text" id="name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <div><small>required</small></div>
      <input type="email" id="email" required />
    </div>
  </fieldset>
  <!-- Add the below fieldset and corresponding legend -->
  <fieldset aria-labelledby="message-legend">
    <legend id="message-legend">Message</legend>
    <div>
      <label for="category">I'm contacting about:</label>
      <select id="category">
        <option value="work">A job opportunity</option>
        <option value="question">A question</option>
        <option value="misc">Miscellaneous</option>
      </select>
    </div>
    <div>
      <label for="message">Message:</label>
      <div><small>required</small></div>
      <textarea id="message" required maxLength="100"></textarea>
    </div>
  <!-- Don't forget the closing tag! -->
  </fieldset>
  <button type="submit">Submit</button>
</form>
```

We now have a `Contact Information` section and a `Message` section. Our form is now organized and accessible. 