
import { GET_ORDER_SUCCESS } from "../constants/order.constan"



const initialState = {
    orders: localStorage.getItem('orders') ? JSON.parse(
        localStorage.getItem('orders')
    ) : {}
    
}

export const orderReducer = (state = initialState, action) => {
    switch (action?.type) {
        case GET_ORDER_SUCCESS:
            localStorage.setItem('cartItem', JSON.stringify(action.payload))

            return {
                ...state,
                cartItem: { ...action.payload }
            }

        default:
            return state
    }
}

