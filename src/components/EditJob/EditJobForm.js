import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import {
	clearDetails,
	fetchJobDetails,
	updateJob,
} from "../../features/jobs/jobsSlice";

const EditJobForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { jobID } = useParams();
	const [formState, setFomState] = useState({});
	//job selector
	const { jobs, isLoading, isError, error, isDeleteLoading, job_details } =
		useSelector((state) => state.job);

	//fetch job details by id
	useEffect(() => {
		dispatch(fetchJobDetails(jobID));
	}, [dispatch, jobID]);

	// Set default values in form state
	useEffect(() => {
		if (job_details?.id) {
			setFomState(job_details);
		} else {
			setFomState({});
			if (!isLoading && !isError && !formState?.id)
				text = (
					<p className=" text-center mb-10  !text-[#FF5757]">
						Job not available with this id {jobID}
					</p>
				);
		}
	}, [job_details]);

	//

	// handle Update value
	const handleChange = (key, value) => {
		setFomState((prev) => ({ ...prev, [key]: value }));
	};

	// restore
	const restore = () => {
		setFomState({});
		document.getElementById("edit-job-form").reset();
		dispatch(clearDetails());
	};

	// form Submit
	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(updateJob({ id: formState?.id, data: formState }));
		restore();
		navigate("/jobs");
	};

	//loading , unavialble , error text
	let text = null;
	if (isLoading)
		text = (
			<p className="mb-10 text-center !text-[#FF8A00]">
				Job details loading ...
			</p>
		);
	if (!isLoading && isError)
		text = (
			<p className=" text-center mb-10  !text-[#FF5757]">
				{error}
			</p>
		);

	return (
		<div className="max-w-3xl mx-auto">
			{text}
			<form
				className="space-y-6"
				id="edit-job-form"
				onSubmit={onSubmit}
			>
				<div className="fieldContainer">
					<label
						for="techlab-JobTitle"
						className="text-sm font-medium text-slate-300"
					>
						Job Title
					</label>
					<select
						id="techlab-JobTitle"
						name="techlabJobTitle"
						required
						onChange={(e) =>
							handleChange(
								"title",
								e.target.value
							)
						}
						value={formState?.title}
					>
						<option
							value=""
							hidden
							selected
						>
							Select Job
						</option>
						<option
							selected={
								formState?.title ===
								"Software Developer"
							}
						>
							Software Developer
						</option>
						<option
							selected={
								formState?.title ===
								"Full Stack Developer"
							}
						>
							Full Stack Developer
						</option>
						<option
							selected={
								formState?.title ===
								"MERN Stack Developer"
							}
						>
							MERN Stack Developer
						</option>
						<option
							selected={
								formState?.title ===
								"DevOps Engineer"
							}
						>
							DevOps Engineer
						</option>
						<option
							selected={
								formState?.title ===
								"QA Engineer"
							}
						>
							QA Engineer
						</option>
						<option
							selected={
								formState?.title ===
								"Product Manager"
							}
						>
							Product Manager
						</option>
						<option
							selected={
								formState?.title ===
								"Social Media Manager"
							}
						>
							Social Media Manager
						</option>
						<option
							selected={
								formState?.title ===
								"Senior Executive"
							}
						>
							Senior Executive
						</option>
						<option
							selected={
								formState?.title ===
								"Junior Executive"
							}
						>
							Junior Executive
						</option>
						<option
							selected={
								formState?.title ===
								"Android App Developer"
							}
						>
							Android App Developer
						</option>
						<option
							selected={
								formState?.title ===
								"IOS App Developer"
							}
						>
							IOS App Developer
						</option>
						<option
							selected={
								formState?.title ===
								"Frontend Developer"
							}
						>
							Frontend Developer
						</option>
						<option
							selected={
								formState?.title ===
								"Frontend Engineer"
							}
						>
							Frontend Engineer
						</option>
					</select>
				</div>

				<div className="fieldContainer">
					<label for="techlab-JobType">Job Type</label>
					<select
						id="techlab-JobType"
						name="techlabJobType"
						required
						onChange={(e) =>
							handleChange(
								"type",
								e.target.value
							)
						}
					>
						<option
							value=""
							hidden
							selected
						>
							Select Job Type
						</option>
						<option
							selected={
								formState?.type ===
								"FullTime"
							}
						>
							Full Time
						</option>
						<option
							selected={
								formState?.type ===
								"Internship"
							}
						>
							Internship
						</option>
						<option
							selected={
								formState?.type ===
								"Remote"
							}
						>
							Remote
						</option>
					</select>
				</div>

				<div className="fieldContainer">
					<label for="techlab-JobSalary">Salary</label>
					<div className="flex border rounded-md shadow-sm border-slate-600">
						<span className="input-tag">BDT</span>
						<input
							type="number"
							name="techlabJobSalary"
							id="techlab-JobSalary"
							required
							className="!rounded-l-none !border-0"
							placeholder="20,00,000"
							value={formState?.salary}
							onChange={(e) =>
								handleChange(
									"salary",
									e.target.value
								)
							}
						/>
					</div>
				</div>

				<div className="fieldContainer">
					<label for="techlab-JobDeadline">
						Deadline
					</label>
					<input
						type="date"
						name="techlabJobDeadline"
						id="techlab-JobDeadline"
						required
						value={
							formState?.deadline
								? new Date(
										formState?.deadline
								  )
										.toISOString()
										.slice(
											0,
											10
										)
								: ""
						}
						onChange={(e) =>
							handleChange(
								"deadline",
								e.target.value
							)
						}
					/>
				</div>

				<div className="text-right">
					<button
						type="submit"
						id="techlab-submit"
						className="cursor-pointer btn btn-primary w-fit"
						disabled={
							!formState?.id
								? true
								: isLoading
								? true
								: false
						}
					>
						Edit
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditJobForm;
