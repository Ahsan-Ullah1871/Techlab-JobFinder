import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Root = () => {
	return (
		<div>
			<Header />
			<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
				<Sidebar />
				<div className="lg:pl-[14rem]  mt-[5.8125rem]">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Root;
