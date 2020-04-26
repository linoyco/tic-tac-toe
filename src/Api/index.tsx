import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.mocky.io/v2"
});

export default instance;