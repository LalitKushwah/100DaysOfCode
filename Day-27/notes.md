# DOM & Templates

`Connect` Vue to HTML via `mount` Vue then renders the real DOM based on the connected template.

# Reactivity
`Computed` and `Watchers` allow you to react to data changes


# Methods vs Computed vs Watch

## Methods
    - Use with event binding OR data binding
    - Data Binding: Method executed for every "re-render" cycle of the component
    - Use for events or data that really needs to be re-evaluated all the time

## Computed
    - Use data binding
    - Computed properties are only re-evaluated if one of their `used-values` changed
    - Use for data that depends on another data

## Watch
    - Not used directly in template
    - Allows you to run any code in reaction to some changed data
    - Use for any non-data update you want to make

# Miscellaneous
    - `v-on` shorthand `@`
    - `v-bind` shorthand `:`
    - :class="{active: `condition`}"
    - :class="['demo', {active: `condition`}]"