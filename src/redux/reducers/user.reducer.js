import { ProfileEditUserSuccess } from "../actions/user.action"
import { GET_USER_SUCCESS, LOGINED_USER_SUCCESS, LOGOUT_USER_SUCCESS, PROFILE_EDIT_USER_SUCCESS } from "../constants/user.constan"


const initialState = {
    users: localStorage.getItem('users') ? JSON.parse(
        localStorage.getItem('users')
    ) : [],

    loginedUser: localStorage.getItem('loginedUser') ? JSON.parse(
        localStorage.getItem('loginedUser')
    ) : {}
}
export const userReducer = (state = initialState, action) => {
    switch (action?.type) {
        case GET_USER_SUCCESS:
            localStorage.setItem('users', JSON.stringify(action.payload))

            return {
                ...state,
                users: [...action.payload]
            }

        case LOGINED_USER_SUCCESS:
            localStorage.setItem('loginedUser', JSON.stringify(action.payload))

            return {
                ...state,
                loginedUser: { ...action.payload }
            }

        case LOGOUT_USER_SUCCESS:
            localStorage.removeItem('loginedUser')

            return {
                ...state,
                loginedUser: {}
            }

        case PROFILE_EDIT_USER_SUCCESS:
            localStorage.setItem('loginedUser', JSON.stringify(action.payload))

            return {
                ...state,
                loginedUser: { ...action.payload }
            }
        default:
            return state


    }
}