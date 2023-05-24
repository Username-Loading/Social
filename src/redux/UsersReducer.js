import { UserAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    Users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,

}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                Users: state.Users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                Users: state.Users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return { ...state, Users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USER_COUNT: {
            return { ...state, totalUserCount: action.totalCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        default:
            return state
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUserCount = (totalCount) => ({ type: SET_TOTAL_USER_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        UserAPI.getUser(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        UserAPI.postFollowAPI(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        UserAPI.deleteFollowAPI(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
            })
    }
}

export default UsersReducer

