import React from "react";
import EditJobForm from "../components/EditJob/EditJobForm";

const EditJob = () => {
	return (
		<main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
			<h1 className="mb-10 text-center techlab-section-title">
				Edit Job
			</h1>
			<EditJobForm />
		</main>
	);
};

export default EditJob;
