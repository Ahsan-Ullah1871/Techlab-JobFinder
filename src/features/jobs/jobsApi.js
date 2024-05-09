import Api from "../../lib/Api";

export const getJobs = async () => {
	const response = await Api.get("/jobs");
	return response;
};

export const getJobDetails = async (id) => {
	const response = await Api.get(`/jobs/${id}`);
	return response;
};

export const addJob = async (data) => {
	const response = await Api.post("/jobs", {
		...data,
		deadline: new Date(data?.deadline).toISOString(),
		salary: data?.salary.toString(),
	});

	return response;
};

export const editJob = async ({ id, data }) => {
	const response = await Api.patch(`/jobs/${id}`, {
		...data,
		deadline: new Date(data?.deadline).toISOString(),
		salary: data?.salary.toString(),
	});

	return response;
};

export const deleteJob = async (id) => {
	const response = await Api.delete(`/jobs/${id}`);
	return response;
};
