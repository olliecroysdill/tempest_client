import axios from "axios";

const baseLink = "http://13.41.220.42:8081";

const server = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || baseLink
});

export default server;

export { baseLink };
