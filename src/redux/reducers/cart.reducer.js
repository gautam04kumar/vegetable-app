import { GET_CART_SUCCESS } from "../constants/cart.constan"



const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(
        localStorage.getItem('cart')
    ) : {
        customer: {},
        items: [],
        subTotal: 0,
        tax: 0,
        grandTotal: 0,
        orderPlaced:false
    }
    
}

export const cartReducer = (state = initialState, action) => {
    switch (action?.type) {
        case GET_CART_SUCCESS:
            localStorage.setItem('cartItem', JSON.stringify(action.payload))

            return {
                ...state,
                cartItem: { ...action.payload }
            }

        default:
            return state
    }
}

