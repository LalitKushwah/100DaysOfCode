import { useState } from "react";
import UpdatedComponent from './hoc';

function Click(props) {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }
    return (
        <div>
            <button onClick={increment}>{props.name} - Click {count} Times</button>
        </div>
    )
}

export default UpdatedComponent(Click);