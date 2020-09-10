import { AddAProductToCart } from './types';

export const AddToCart = (ProductName) => {
    return(dispatch) => {
        dispatch({
            type: AddAProductToCart,
            payload: ProductName
        })
    }
};