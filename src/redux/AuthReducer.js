import { UserAPI } from "../api/api"

const SET_USER_DATA = "SET_USER_DATA"


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })

export const getLogin = () => {
    return (dispatch) => {
        UserAPI.loginMeAPI()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        UserAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData())
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        UserAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export default AuthReducer

