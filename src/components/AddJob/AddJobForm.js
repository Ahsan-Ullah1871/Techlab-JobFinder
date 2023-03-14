import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { createJob } from "../../features/jobs/jobsSlice";

const AddJobForm = () => {
	const dispatch = useDispatch();
	const [formState, setFomState] = useState({});
	const navigate = useNavigate();

	//

	// handle Update value
	const handleChange = (key, value) => {
		setFomState((prev) => ({ ...prev, [key]: value }));
	};

	// restore
	const restore = () => {
		setFomState({});
		document.getElementById("add-job-form").reset();
	};

	// form Submit
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(createJob(formState));
		restore();
		navigate("/jobs");
	};

	return (
		<div className="max-w-3xl mx-auto">
			<form
				className="space-y-6"
				id="add-job-form"
				onSubmit={onSubmit}
			>
				<div className="fieldContainer">
					<label
						for="lws-JobTitle"
						className="text-sm font-medium text-slate-300"
					>
						Job Title
					</label>
					<select
						id="lws-JobTitle"
						name="lwsJobTitle"
						required
						onChange={(e) =>
							handleChange(
								"title",
								e.target.value
							)
						}
					>
						<option value="" hidden selected>
							Select Job
						</option>
						<option>Software Engineer</option>
						<option>Software Developer</option>
						<option>Full Stack Developer</option>
						<option>MERN Stack Developer</option>
						<option>DevOps Engineer</option>
						<option>QA Engineer</option>
						<option>Product Manager</option>
						<option>Social Media Manager</option>
						<option>Senior Executive</option>
						<option>Junior Executive</option>
						<option>Android App Developer</option>
						<option>IOS App Developer</option>
						<option>Frontend Developer</option>
						<option>Frontend Engineer</option>
					</select>
				</div>

				<div className="fieldContainer">
					<label for="lws-JobType">Job Type</label>
					<select
						id="lws-JobType"
						name="lwsJobType"
						required
						onChange={(e) =>
							handleChange(
								"type",
								e.target.value
							)
						}
					>
						<option value="" hidden selected>
							Select Job Type
						</option>
						<option>Full Time</option>
						<option>Internship</option>
						<option>Remote</option>
					</select>
				</div>

				<div className="fieldContainer">
					<label for="lws-JobSalary">Salary</label>
					<div className="flex border rounded-md shadow-sm border-slate-600">
						<span className="input-tag">BDT</span>
						<input
							type="number"
							name="lwsJobSalary"
							id="lws-JobSalary"
							required
							className="!rounded-l-none !border-0"
							placeholder="20,00,000"
							onChange={(e) =>
								handleChange(
									"salary",
									Number(
										e.target
											.value
									)
								)
							}
						/>
					</div>
				</div>

				<div className="fieldContainer">
					<label for="lws-JobDeadline">Deadline</label>
					<input
						type="date"
						name="lwsJobDeadline"
						id="lws-JobDeadline"
						required
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
						id="lws-submit"
						className="cursor-pointer btn btn-primary w-fit"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddJobForm;
