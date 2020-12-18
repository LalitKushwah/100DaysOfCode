import  { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
            total: 2.6,
            purchasing: false
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

    purchasingHandler = () => {
        console.log('=========');
        this.setState({purchasing: true});
    }

    purchasingCancelHandler = () => {
        console.log('======== 63 ========')
        this.setState({purchasing: false});
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.purchasing ? (<Modal clicked={this.purchasingCancelHandler} show={this.state.purchasing}>
                        <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
                        </Modal>
                    ): null
                }
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    total={this.state.total}
                    ingredientAdded = {this.addIngredienthandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    ordered = {this.purchasingHandler}
                ></BuildControls>
            </Fragment>
        )
    }
}

export default BurgerBuilder;