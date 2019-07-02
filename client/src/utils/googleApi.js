import axios from "axios";
const baseUrl = "https://www.googleapis.com/books/v1/volumes?maxResults=9&q=";

export default {
    search: function (query) {
        return axios.get(baseUrl + query);
    }
};