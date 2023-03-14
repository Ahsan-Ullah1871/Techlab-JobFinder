import React from "react";
import AddJobForm from "../components/AddJob/AddJobForm";

const AddJob = () => {
	return (
		<main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
			<h1 className="mb-10 text-center lws-section-title">
				Add New Job
			</h1>
			<AddJobForm />
		</main>
	);
};

export default AddJob;
