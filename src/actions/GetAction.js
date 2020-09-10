import { GetValuesInCart } from './types';

export const GetValue = () => {
    return(dispatch) => {
        dispatch({
            type: GetValuesInCart
        })
    }
}