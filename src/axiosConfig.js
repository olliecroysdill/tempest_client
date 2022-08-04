import axios from "axios";

const baseLink = "http://localhost:8080";

const server = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || baseLink
});

export default server;

export { baseLink };
