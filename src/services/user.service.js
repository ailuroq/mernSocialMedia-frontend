import axios from "axios";
import authHeader from "./auth-header";
import {API_URL} from "../constants/urlConstants";


const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", {headers: authHeader()});
};

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", {headers: authHeader()});
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", {headers: authHeader()});
};

const getProfile = (username) => {
    return axios.get(API_URL + username, {headers: authHeader()})
}

export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
    getProfile
};