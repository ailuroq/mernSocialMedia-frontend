import {API_URL} from "../constants/urlConstants";
import axios from "axios";
import {CREATE_POST_SUCCESS} from "./types";
import authHeader from "../services/auth-header";

export const createPost = (username, text) => (dispatch) => {
    return axios.post(API_URL + username, {
        text
    }, {headers: authHeader()}).then((data) => {
        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: {posts: data}
        })
    })
}