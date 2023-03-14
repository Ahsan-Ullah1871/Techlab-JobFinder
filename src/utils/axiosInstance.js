import axios from "axios";

const apiCall = axios.create({
	baseURL: "http://localhost:9000/",
});

export default apiCall;
