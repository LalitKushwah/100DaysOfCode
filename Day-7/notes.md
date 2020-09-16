# Cascading Style Sheet & Specificity

When multiple rules applied to the same element then browser uses some rules/priority to get them apply on then element. Here the priority order

## inline style > ID selectors > class, pseudo class & attribute selector > tag and pseudo class selector

Note: Inheritence has very low specificity

# Combinators

## Adjacent Sibling (+)
- Elements share the same parent
- Second element comes <b>immediately<b> after first element

## General Sibling (~)
- Elements share the same parent
- Second element comes after first element (no need to be immediate after parent)

## Child (>)
- Second element should be <b>direct</b> child of first element

## Descendant ( )
- Second element should be inside first one