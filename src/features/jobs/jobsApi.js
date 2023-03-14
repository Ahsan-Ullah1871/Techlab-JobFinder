import apiCall from "../../utils/axiosInstance";

export const getJobs = async () => {
	const response = await apiCall.get("/jobs");

	return response.data;
};
export const getJobDetails = async (id) => {
	const response = await apiCall.get(`/jobs/${id}`);

	return response.data;
};

export const addJob = async (data) => {
	const response = await apiCall.post("/jobs", data);

	return response.data;
};

export const editJob = async ({ id, data }) => {
	const response = await apiCall.put(`/jobs/${id}`, data);

	return response.data;
};

export const deleteJob = async (id) => {
	const response = await apiCall.delete(`/jobs/${id}`);
	return response;
};
