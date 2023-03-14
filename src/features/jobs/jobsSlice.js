import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, editJob, getJobDetails, getJobs } from "./jobsApi";

const initialState = {
	jobs: [],
	isLoading: false,
	isDeleteLoading: false,
	isError: false,
	error: "",
	job_details: {},
	search_text: "",
	sort: "",
};

// Thunk
export const fetchJobs = createAsyncThunk("jobs/fetchjobs", async () => {
	const jobs = await getJobs();
	return jobs;
});
export const fetchJobDetails = createAsyncThunk(
	"jobs/fetchJobDetails",
	async (id) => {
		const job = await getJobDetails(id);
		return job;
	}
);

export const createJob = createAsyncThunk("jobs/createjob", async (data) => {
	const job = await addJob(data);
	return job;
});

export const updateJob = createAsyncThunk(
	"jobs/updatejob",
	async ({ id, data }) => {
		const transaction = await editJob({ id, data });
		return transaction;
	}
);

export const removeJob = createAsyncThunk("jobs/removejob", async (id) => {
	const job = await deleteJob(id);
	return id;
});

// Slice
const jobSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		clearDetails: (state, action) => {
			state.job_details = {};
		},

		searchingJobs: (state, action) => {
			state.search_text = action.payload;
		},
		sortJobs: (state, action) => {
			state.sort = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchJobs.pending, (state, action) => {
			state.isError = false;
			state.isLoading = true;
		})
			.addCase(fetchJobs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.jobs = action.payload;
			})
			.addCase(fetchJobs.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.jobs = [];
				state.error = action?.error?.message;
			});

		//
		builder.addCase(fetchJobDetails.pending, (state, action) => {
			state.isError = false;
			state.isLoading = true;
		})
			.addCase(fetchJobDetails.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.job_details = action.payload;
			})
			.addCase(fetchJobDetails.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.job_details = {};
				state.error = action?.error?.message;
			});

		//
		builder.addCase(createJob.pending, (state, action) => {
			state.isError = false;
			state.isLoading = true;
		})
			.addCase(createJob.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.jobs.push(action.payload);
			})
			.addCase(createJob.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;

				state.error = action?.error?.message;
			});

		//
		builder.addCase(updateJob.pending, (state, action) => {
			state.isError = false;
			state.isLoading = true;
		})
			.addCase(updateJob.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				const index = state.jobs.findIndex(
					(t) => t.id == action.payload.id
				);
				state.jobs[index] = action.payload;
			})
			.addCase(updateJob.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action?.error?.message;
			});

		//
		builder.addCase(removeJob.pending, (state, action) => {
			state.isError = false;
			state.isDeleteLoading = true;
		})
			.addCase(removeJob.fulfilled, (state, action) => {
				state.isDeleteLoading = false;
				state.isError = false;

				state.jobs = state.jobs.filter(
					(t) => t.id !== action.payload
				);
			})
			.addCase(removeJob.rejected, (state, action) => {
				state.isDeleteLoading = false;
				state.isError = true;
				state.error = action?.error?.message;
			});
	},
});

export default jobSlice.reducer;
export const { clearDetails, searchingJobs, sortJobs } = jobSlice.actions;
