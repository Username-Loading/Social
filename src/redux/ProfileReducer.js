import { ProfileAPI, UserAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    PostMessageData: [
        { id: '1', message: "Шо ти?", like: '18' },
        { id: '2', message: "Та нічо, a ти шо?", like: '2' },
        { id: '3', message: "Та тоже", like: '12' },
    ],

    NewTextPost: "Suka, zayebesh",

    profile: null,

    status: "",

}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                PostMessageData: [...state.PostMessageData,
                    {
                        id: (state.PostMessageData.length),
                        message: action.newTextPost,
                        like: 0,
                    }
                ],
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const AddPostActionCreator = (newTextPost) => ({ type: ADD_POST, newTextPost })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile, })
export const setStatus = (status) => ({ type: SET_STATUS, status, })

export const getUser = (userId) => {
    return (dispatch) => {
        UserAPI.profileId(userId)
        .then(data => {
            dispatch(setUsersProfile(data))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        if(userId == true){
            ProfileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
        }
        else {
            let id = 28932
            ProfileAPI.getStatus(id)
            .then(data => {
                dispatch(setStatus(data))
            })
        }

    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status)
        .then(data => {
            if (data.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}

export default ProfileReducer