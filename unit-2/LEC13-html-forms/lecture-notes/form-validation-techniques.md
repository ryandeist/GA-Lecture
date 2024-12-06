# HTML Forms - Form Validation Techniques
## Form Validation 
You've probably filled out a form online before and hit the submit button, only to see a message like "This field is required" pop up on your screen because you missed filling in something. Or you may have entered a new password that didnt conform to the site's password requirments. 

While this can be frustrating, it's for the users benefit. Data shouldn't be sent to a server if its not in the required format, and users should be allowed to fix their errors.

This is accomplished through client-side form validation. When implemented, the browser performs tests before the form data is sent to the server. If any of those tests fails, the user is informed of what went wrong and what they the should take to fix the error.

## Validation attributes
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

### Built-in form validation
As mentioned previously, the email type input also has a further level of [built-in validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#value)

Key things to note: 
* By default `<input type="email" />` will automatically ensure that the input value is either empty or properly formatted. The `type` attribute is a form of validation
* When we gave the `<input type="email" />` element the `required` attribute, we also ensured it could not be empty. This way we can be reasonably sure an email address will entered before this form can be submitted.

> Client-side form validation should never be considered a replacement for server-side validation. Client-side validation is relatively easy for bad actors to bypass.

> Client-side form validation is intended to provide a better user experience by catching and rejecting invalid entries and allowing users to fix them immediately 

### Other helpful attributes
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