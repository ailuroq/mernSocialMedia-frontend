import {CREATE_POST_SUCCESS, DELETE_POST, GET_PROFILE} from "../actions/types";

const initialState = {
    profileData: {
        friends: [],
        chats: [],
        photos: [],
        posts: [],
        email: "",
        username: ""
    }
}
export default function profile(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profileData: action.payload
            }
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    ...action.payload
                }
            }
        case DELETE_POST:
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    ...action.payload
                }
            }
        default:
            return state
    }
}