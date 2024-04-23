import { ADD_CART_ERROR, ADD_CART_START, ADD_CART_SUCCESS, GET_CART_ERROR, GET_CART_START, GET_CART_SUCCESS } from "../constants/cart.constan"



//  add
export const addCartStart = (cart) => ({
    type: ADD_CART_START,
    payload: cart
})
export const addCartSuccess = (cart) => ({
    type: ADD_CART_SUCCESS,
    payload: cart
})
export const addCartError = (error) => ({
    type: ADD_CART_ERROR,
    payload: error
})
// get


export const getCartStart = () => ({
    type: GET_CART_START,

})
export const getCartSuccess = (cart) => ({
    type: GET_CART_SUCCESS,
    payload: cart
})
export const getCartError = (error) => ({
    type: GET_CART_ERROR,
    payload: error
})

// // delete
// export const deleteUserStart = (user) => ({
//     type: DELETE_USER_START,
//     payload: user

// })
// export const deleteUserSuccess = (user) => ({
//     type: DELETE_USER_SUCCESS,
//     payload: user
// })
// export const deleteUserError = (error) => ({
//     type: DELETE_USER_ERROR,
//     payload: error
// })
// // UPDATE
// export const updateUserStart = (user, id) => ({
//     type: UPDATE_USER_START,
//     payload: {
//         user,
//         id
//     }

// })
// export const updateUserSuccess = (user, id) => ({
//     type: UPDATE_USER_SUCCESS,
//     payload: {
//         user,
//         id
//     }
// })
// export const updateUserError = (error) => ({
//     type: UPDATE_USER_ERROR,
//     payload: error
// })







