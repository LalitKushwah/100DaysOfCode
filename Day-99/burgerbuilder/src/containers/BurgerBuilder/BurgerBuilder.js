import  { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 0.7,
    meat: 1   
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            total: 2.6
        };
    }

    addIngredienthandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        const priceAdditon = INGREDIENT_PRICES[type];
        const oldPrice = this.state.total;
        const newPrice = oldPrice + priceAdditon;

        this.setState({ total: newPrice, ingredients: updatedIngredients })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        if (updatedCount >= 0) {
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type] = updatedCount;
    
            const priceAdditon = INGREDIENT_PRICES[type];
            const oldPrice = this.state.total;
            const newPrice = oldPrice - priceAdditon;
    
            this.setState({ total: newPrice, ingredients: updatedIngredients })
        }
    }

    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    total={this.state.total}
                    ingredientAdded = {this.addIngredienthandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                ></BuildControls>
            </Fragment>
        )
    }
}

export default BurgerBuilder;