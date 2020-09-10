# HTML
- HTML stands for Hyper Text Markup Language
- It informs borwser to how to display/render the content
- It describes the structure of a web page
 
# Basic HTML Document
```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>1/100</title>
    </head>
    <body>
        <p>I am back in learning mode now</p>
    </body>
</html>
```

# More about DOCTYPE
DOCTYPE is not an element or tag it lets browser know about the verison/standard of document.For example

## HTML 5
`<!DOCTYPE html>`

## HTML 4.0.1 strict

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> `

## HTML 4.01 Transitional
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`

## HTML 4.01 Frameset
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`

<b>DTD stands for: Document type definition</b>

## Note: if you don't mention doctype then it interpretates your code according to their default mode

## Valid HTML
`<!DOCTYPE html><title>Test</title>`

Explaination: Above html will be considered as valid HTML browsers will automatically create head tag and use title tag inside it

## Meta tag
Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.

Define keywords for search engines:
`<meta name="keywords" content="HTML, CSS, JavaScript">`

Define a description of your web page:
`<meta name="description" content="Free Web tutorials for HTML and CSS">`

Refresh document every 30 seconds:
`<meta http-equiv="refresh" content="30">`

Setting the viewport to make your website look good on all devices:
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## Miscellaneous 
- Whatever you write after html closing tag chrome will automatically append it inside body tag

