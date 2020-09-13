# Canvas
Canvas is a container in which you can draw something using various utility methods.
Canvas is rendered pixel by pixel. In canvas, once the graphic is drawn, it is forgotten by the browser. If its position should be changed, the entire scene needs to be redrawn, including any objects that might have been covered by the graphic.


💡 Draw 2d dimesnion on paper for ease

# SVG (Scalable Vector Graphics)
SVG is also a container for graphics but it uses predefined tags like cricle, polygon, rect tags for painting.
SVG is XML based, which means that every element is available within the SVG DOM. You can attach JavaScript event handlers for an element.

In SVG, each drawn shape is remembered as an object. If attributes of an SVG object are changed, the browser can automatically re-render the shape.

# Miscellaneous
- Whatever you draw inside canvas will not be reflected in dom hence any change in elements property/design requires window reload
- All Elements used inside svg tag will be visible in dom hence you can play with javascript and see change in values without window reload


