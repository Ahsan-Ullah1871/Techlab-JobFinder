import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchJobs } from "../../features/jobs/jobsSlice";
import Job from "./Job";

const Jobs = () => {
	const dispatch = useDispatch();

	const params = useParams();

	//job selector
	const {
		jobs,
		isLoading,
		isError,
		error,
		isDeleteLoading,
		sort,
		search_text,
	} = useSelector((state) => state.job);

	//sort by price
	const sortByPrice = (a, b) => {
		if (sort === "htl") {
			return b.salary - a.salary;
		} else if (sort === "lth") {
			return a.salary - b.salary;
		} else {
			return a;
		}
	};

	//Search by title
	const searchByTitle = (job) => {
		return job.title
			.replace(/\s+/g, "")
			.toUpperCase()
			.includes(search_text.replace(/\s+/g, "").toUpperCase());
	};
	//Search by Type
	const searchByType = (job) => {
		if (params?.type) {
			return job.type
				.replace(/\s+/g, "")
				.toUpperCase()
				.includes(
					params?.type
						.replace(/\s+/g, "")
						.toUpperCase()
				);
		} else {
			return job;
		}
	};

	//Fetch Jobs Initially
	useEffect(() => {
		dispatch(fetchJobs());
	}, [dispatch]);

	//decide what to render ;
	let content = null;
	if (isLoading)
		content = <p className="!text-[#FF8A00] text-center">Loading</p>;
	if (!isLoading && isError)
		content = <p className="!text-[#FF5757] text-center">{error}</p>;
	if (
		!isLoading &&
		!isError &&
		jobs
			?.filter(searchByType)
			?.filter(searchByTitle)
			?.sort(sortByPrice)?.length > 0
	) {
		content = jobs
			?.filter(searchByType)
			?.filter(searchByTitle)
			?.sort(sortByPrice)
			?.map((job) => {
				return <Job key={job.id} job={job} />;
			});
	}

	if (
		!isLoading &&
		!isError &&
		jobs
			?.filter(searchByType)
			?.filter(searchByTitle)
			?.sort(sortByPrice)?.length == 0
	) {
		content = (
			<p className="!text-[#FF5757] text-center">
				Jobs Not found{" "}
			</p>
		);
	}

	return <div className="jobs-list">{content}</div>;
};

export default Jobs;
