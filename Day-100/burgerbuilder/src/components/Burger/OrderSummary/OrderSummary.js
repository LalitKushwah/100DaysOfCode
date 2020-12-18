import { Fragment } from "react";

const OrderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients);
    const list = ingredients.map(key => {
            return <li key={key}><span>{key}</span> : {props.ingredients[key]}</li>
        })
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>Here is the order summary: </p>
            <ul>
                { list }
            </ul>
        </Fragment>
    );
};

export default OrderSummary;