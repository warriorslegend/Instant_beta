import { AddAProductToCart, GetValuesInCart } from "../actions/types";
import List from '../database/Products.json';

const initialState = {
    value: 0,
    total: 0,
    products: List
}

export default (state = initialState, action) => {
    switch(action.type) {
        case AddAProductToCart:
            let AddQuantity = {...state.products[action.payload]}
            AddQuantity.quantity += 1;
            AddQuantity.inCart = true;

            return {
                ...state,
                value: state.value + 1,
                total: state.total + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: AddQuantity
                }
            }
        case GetValuesInCart:
            return {
                ...state
            }
        default:
            return state;
    }
};