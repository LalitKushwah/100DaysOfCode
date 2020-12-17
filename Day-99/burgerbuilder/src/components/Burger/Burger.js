import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
                                    .map(key => {
                                        return [...Array(props.ingredients[key])].map((_,i) => {
                                        return <BurgerIngredients key={key+i} type={key}/>
                                    });
                                }).reduce((arr, elm) => {
                                    return arr.concat(elm);
                                }, []);
    if (!transformedIngredients.length) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"></BurgerIngredients>
            {
                transformedIngredients
            }
            <BurgerIngredients type="bread-bottom"></BurgerIngredients>
        </div>
    )
}
export default Burger;