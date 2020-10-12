# Components Registration & Styles

## Components can be registered globally and locally
- Global Registration: Registering using component method in main file which is App.vue
- Local Registration: Using import and components property in specific .vue file

## Style can be global and scoped

Styles tag inside component if not having scoped keyword then it will affect other components style. By using scoped keyword `<style scoped>...</scoped>` we can restrict rule to be applied on respectec component only.

# Slots

Slots is used to add placeholder for dynamic HTML code.
Scoped slots helps to pass data to components which are going to add HTML data to be rendered in slot position.

Example: 
`<slot :item="test" name="goal"></slot>`
<br>
`<template #goal="slotProps">
    <h2>{{slotProps.item}}</h2>
</template>`

# Dynamic Components
Component can be swaped dynamically via built in `<component :is="variable"></component>`
component caching can be used by providing keep-alive tag. For exmaple

`<keep-alive>
    <component :is="variable"></component>
</keep-alive>`

# Teleporting
If you want to change the hirerachy of some html tags then you can use teleporting feature of vuejs,html markup will be controlled by the component in which it is present just at the time of DOM painting its position will be changed as given.

This feature is great to fullfil accessibility requirement.

`<teleport to="body">.....</teleport>`


