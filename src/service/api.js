import axios from "axios";

const http = axios.create({
  baseURL: "http:localhost:3000",
  withCredential: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

export default http;
