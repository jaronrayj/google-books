import axios from "axios";
const baseUrl = "https://www.googleapis.com/books/v1/volumes?maxResults=8&q=";

const APIkey = process.env.API_GOOGLE


export default {
    search: function (query) {
        return axios.get(baseUrl + query);
    }
};