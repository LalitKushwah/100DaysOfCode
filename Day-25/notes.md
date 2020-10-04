# Fonts

## Fonts shorthand

font-style font-variant font-weight font-size/line-height font-family

Example - `italic small-caps 700 1.2rem/2 "Monsterrat", sans-serif`

## Flexbox

 - display: flex with flex-direction as row 
    - main axis: `top left to top right`
    - cross axis: `top left to bottom left`
- display: flex with flex-direction as row-reverse
    - main axis: `top right to top left`
    - cross axis: `top right to bottom right`
- display: flex with flex-direction as column
    - main axis: `top left to bottom left`
    - cross axis: `top left to top right`
- display: flex with flex-direction as column-reverse
    - main axis: `bottom left to top left`
    - cross axis: `bottom left to bottom right`


- justify-content: define element along main axis 
- align-items: define element along cross axis

# Transition

transition: WHAT DURATION DELAY TIMING-FUNCTION; 

Example: `transition: opacity 200ms 1s ease-out;`

ease-out means start fast and end slow

# Animation

animation: NAME DURATION DELAY TIMING-FUNCTION ITERATION DIRECTION FILL-MODE PLAY-STATE;

Example: `animation: wiggle 200ms 1s ease-out 8 alternate forwards running;`

# Miscellaneous

## Abbrevations to remember
- CA: align-items follow cross axis
- MJ: justify-content follow main axis

