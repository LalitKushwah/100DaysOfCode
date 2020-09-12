# Forms

HTML forms is used to take user input.`<form>` behaves like container for all input fields from it doesn't render itself but controls the input fields inside it.

## Form tag attributes
- action:location where to send data
- target: possible values are 
    - self: same tab
    - blank: new tab
    - parent: parent frame
    - top: full body of tab
    - framename: display in named frame
- method: HTTP method to be used while transfering data to network
- novalidate:it specifies that the form-data (input) should not be validated when submitted.

## Form Elements
- `<input>`
- `<label>`
- `<select>`
- `<textarea>`
- `<button>`
- `<fieldset>`
    - The `<fieldset>` element is used to group related data in a form.
- `<legend>`
    - The `<legend>` element defines a caption for the `<fieldset>` element.
- `<datalist>`
    - The `<datalist>` element specifies a list of pre-defined options for an `<input>` element.
- `<output>`
    - The `<output>` element represents the result of a calculation (like one performed by a script).
- `<option>`
- `<optgroup>`

# Miscellaneous 
- label should be used with form controls it helps to make control readable by screen reader and make webpage accessible
- fomrenctype attribute specifies how form data should be encoded it will be used when method type is post.
