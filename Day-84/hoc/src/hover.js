import UpdatedComponent from './hoc';
const { useState } = require("react")

function Hover(props) {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count+1);
    }

    return (
        <div>
            <p onMouseOver={increment}>{props.name} - Hovered {count} times</p>
        </div>
    )
}
export default UpdatedComponent(Hover);