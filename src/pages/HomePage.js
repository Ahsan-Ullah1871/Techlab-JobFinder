import React from "react";
import Jobs from "../components/Home/Jobs";
import TopHeader from "../components/Home/TopHeader";

const HomePage = () => {
	return (
		<main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
			<TopHeader />
			<Jobs />
		</main>
	);
};

export default HomePage;
