import axios from "axios";

const Api = axios.create({
	baseURL: "https://backend-server1.vercel.app/api/v1",
	// baseURL: "http://localhost:5001/api/v1",
	headers: {
		"access-control-allow-origin": "*",
		"Content-type": "application/json",
	},
});

// request interceptor
Api.interceptors.request.use((config) => {
	// const token = localStorage.getItem("token");
	// if (token) {
	//     config.headers.Authorization = `Bearer ${token}`;
	// }
	return config;
});

// response interceptor
Api.interceptors.response.use(
	(response) => {
		return (
			response?.data?.data?.data ??
			response?.data?.data ??
			response?.data
		);
	},
	(error) => {
		if (error.response.status === 401) {
			console.log(error);
		}
		return Promise.reject(error);
	}
);

export default Api;

