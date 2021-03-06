import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls =  (props) => {
    return (
        <div className={classes.BuildControls}>
            <p><strong>{`${props.total.toFixed(2)}$`}</strong></p>
            {
                controls.map(ctrl => {
                    return <BuildControl 
                        added={() => props.ingredientAdded(ctrl.type)} 
                        removed={() => props.ingredientRemoved(ctrl.type)}
                        key={ctrl.label} label={ctrl.label}/>
                })
            }
            <button className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls;