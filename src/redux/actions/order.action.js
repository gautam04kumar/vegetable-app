import { GET_ORDER_BY_USER_ERROR, GET_ORDER_BY_USER_START, GET_ORDER_BY_USER_SUCCESS, GET_ORDER_ERROR, GET_ORDER_START, GET_ORDER_SUCCESS, PLACE_ORDER_ERROR, PLACE_ORDER_START, PLACE_ORDER_SUCCESS } from "../constants/order.constan"

export const getOrderStart = () => ({
    type: GET_ORDER_START,

})
export const getOrderSuccess = (orders) => ({
    type: GET_ORDER_SUCCESS,
    payload: orders
})
export const getOrderError = (error) => ({
    type: GET_ORDER_ERROR,
    payload: error
})

export const getOrderByUserStart = (userName) => ({
    type: GET_ORDER_BY_USER_START,
    payload: userName

})
export const getOrderByUserSuccess = (orders) => ({
    type: GET_ORDER_BY_USER_SUCCESS,
    payload: orders
})
export const getOrderByUserError = (error) => ({
    type: GET_ORDER_BY_USER_ERROR,
    payload: error
})


export const placeOrderStart = (order, cart) => ({
    type: PLACE_ORDER_START,
    payload: {
        order,
        cart
    }
})
export const placeOrderSuccess = (order,cart) => ({
    type: PLACE_ORDER_SUCCESS,
    payload: {
        order,
        cart
    }
})
export const placeOrderError = (error) => ({
    type: PLACE_ORDER_ERROR,
    payload: error
})








