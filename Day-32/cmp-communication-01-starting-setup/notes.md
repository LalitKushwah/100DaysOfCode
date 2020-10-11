# Props type in component
Specifically, the following value types (type property) are supported:
    - String
    - Number
    - Boolean
    - Array
    - Object
    - Date
    - Function
    - Symbol

# Emit Event using `this.$emit('<event-name>', data)`

If you want to notify parent component about any action taken place in child component then you can emit and event on action from child and listen to parent.

Recommended Thing: 
<pre>
emits : {
    `<event-name>`: function (data) { /*validation check*/ }
}

</pre>

# provide & inject

To use provide and inject parent-child relationship is must you can not use this feat in sibling elements