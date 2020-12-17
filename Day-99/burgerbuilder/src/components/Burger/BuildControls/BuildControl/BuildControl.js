import classes from './BuildControl.module.css';

const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <button className={classes.Less} onClick={props.removed}>Less</button>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    )
}

export default BuildControl;