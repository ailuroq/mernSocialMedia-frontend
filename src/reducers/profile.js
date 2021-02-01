import {GET_PROFILE} from "../actions/types";

const initialState = {
    profileData: ""
}
export default function profile(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profileData: action.payload
            }
        default:
            return state
    }
}