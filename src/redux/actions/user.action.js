import { ADD_USER_ERROR, ADD_USER_START, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_START, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_START, GET_USER_SUCCESS, LOGINED_USER_ERROR, LOGINED_USER_START, LOGINED_USER_SUCCESS, LOGOUT_USER_ERROR, LOGOUT_USER_START, LOGOUT_USER_SUCCESS, PROFILE_EDIT_USER_ERROR, PROFILE_EDIT_USER_START, PROFILE_EDIT_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_START, UPDATE_USER_SUCCESS } from "../constants/user.constan"



//  add
export const addUserStart = (user) => ({
    type: ADD_USER_START,
    payload: user
})
export const addUserSuccess = (user) => ({
    type: ADD_USER_SUCCESS,
    payload: user
})
export const addUserError = (error) => ({
    type: ADD_USER_ERROR,
    payload: error
})
// get


export const getUserStart = () => ({
    type: GET_USER_START,

})
export const getUserSuccess = (users) => ({
    type: GET_USER_SUCCESS,
    payload: users
})
export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    payload: error
})

// delete
export const deleteUserStart = (user) => ({
    type: DELETE_USER_START,
    payload: user

})
export const deleteUserSuccess = (user) => ({
    type: DELETE_USER_SUCCESS,
    payload: user
})
export const deleteUserError = (error) => ({
    type: DELETE_USER_ERROR,
    payload: error
})
// UPDATE
export const updateUserStart = (user, id) => ({
    type: UPDATE_USER_START,
    payload: {
        user,
        id
    }

})
export const updateUserSuccess = (user, id) => ({
    type: UPDATE_USER_SUCCESS,
    payload: {
        user,
        id
    }
})
export const updateUserError = (error) => ({
    type: UPDATE_USER_ERROR,
    payload: error
})



//  add
export const loginedUserStart = (user) => ({
    type: LOGINED_USER_START,
    payload: user
})
export const loginedUserSuccess = (user) => ({
    type: LOGINED_USER_SUCCESS,
    payload: user
})
export const loginedUserError = (error) => ({
    type: LOGINED_USER_ERROR,
    payload: error
})

// logout

export const logoutUserStart = () => ({
    type: LOGOUT_USER_START,
    
})
export const logoutUserSuccess = () => ({
    type: LOGOUT_USER_SUCCESS,
    
})
export const logoutUserError = (error) => ({
    type: LOGOUT_USER_ERROR,
    payload: error
})

export const ProfileEditUserStart = (user,id) => ({
    type: PROFILE_EDIT_USER_START,
    payload:{ 
        user,id
    }
})
export const ProfileEditUserSuccess = (user) => ({
    type: PROFILE_EDIT_USER_SUCCESS,
    payload: user
})
export const ProfileEditUserError = (error) => ({
    type: PROFILE_EDIT_USER_ERROR,
    payload: error
})