import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const createPost = (text, author) => {
    return axios.post(API_URL + author + "/create", {
        text,
        author
    });
};

export default {
    createPost
}