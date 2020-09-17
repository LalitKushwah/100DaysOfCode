 # Box Model

Every element on webpage is considered as block.This block has following layers in it

 - margin
 - border
 - padding
 - content

All this layers in the above order formed box model where we can all these properties for any html element.

# Block-level vs Inline Elements

Block-level elements are rendered as a block and hence take up all the available horizontal space. You can set margin-top and margin-bottom and two block-level elements will render in two different lines.

Some examples are: `<div>` , `<section>` , `<article>` , `<nav>`  but also `<h1>` , `<h2>`  etc and `<p>` .

Inline elements on the other hand only take up the space they require to fit their content in. Hence two inline-elements will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added).

They also use the box-model you learned about but margin-top  and margin-bottom  have no effect on the element. padding-top  and padding-bottom  also have a different effect. They don't push the adjacent content away but they will do so with the element border. You can read more about that behavior in the following article: https://hacks.mozilla.org/2015/03/understanding-inline-box-model/

Additionally, setting a width  or height  on an inline element also has no effect. The width and height is auto to take as much space as required by the content.

example of inline elements are: `<a>`, `<span>`, `<img>`

# Miscellaneous
- margin collapsing: When two block level elements have margin then the total distance between both elements will be equal to the margin of element which has greater one.For example element A has margin 5px and B has 10px then distance beetween both element will be 10px only.