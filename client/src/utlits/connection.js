import axios from "axios";

const BASE_URL =process.env.CONNECTION_URL

const connection = axios.create({
  baseURL: BASE_URL,
});

export default connection;

