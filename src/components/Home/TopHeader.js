import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchingJobs, sortJobs } from "../../features/jobs/jobsSlice";

const TopHeader = () => {
	const dispatch = useDispatch();
	const { search_text, sort } = useSelector((state) => state.job);

	// Handle search
	const handleSearch = (e) => {
		dispatch(searchingJobs(e.target.value));
	};
	// Handle Sort
	const handleSort = (e) => {
		dispatch(sortJobs(e.target.value));
	};
	return (
		<div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
			<h1 className="techlab-section-title">
				All Available Jobs
			</h1>
			<div className="flex gap-4">
				<div className="search-field group flex-1">
					<i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
					<input
						type="text"
						placeholder="Search Job"
						className="search-input"
						id="techlab-searchJob"
						value={search_text}
						onChange={handleSearch}
					/>
				</div>
				<select
					id="techlab-sort"
					name="sort"
					autocomplete="sort"
					className="flex-1"
					onChange={handleSort}
				>
					<option value="">Default</option>
					<option
						selected={sort === "lth"}
						value="lth"
					>
						Salary (Low to High)
					</option>
					<option
						selected={sort === "htl"}
						value="htl"
					>
						Salary (High to Low)
					</option>
				</select>
			</div>
		</div>
	);
};

export default TopHeader;
