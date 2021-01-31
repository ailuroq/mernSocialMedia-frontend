import {GET_PROFILE} from "./types";
import axios from "axios";
import authHeader from "../services/auth-header";

const API_URL = "http://localhost:8080/api/";

const _getProfile = (profileData) => ({
    type: GET_PROFILE,
    payload: profileData
})

const getProfile = (username) => {
    debugger
    return (dispatch) => {
        return axios
            .get(API_URL + username, {headers: authHeader()})
            .then(result => {
                console.log(result.data)
                dispatch(_getProfile(result.data))
            })
            .catch(error => {
                alert("something gone wrong")
            })
    }
}
export default getProfile

