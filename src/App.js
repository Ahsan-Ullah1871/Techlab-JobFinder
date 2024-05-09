import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: "jobs", element: <HomePage /> },
				{ path: "jobs/:type", element: <HomePage /> },
				{ path: "jobs/addjob", element: <AddJob /> },
				{
					path: "jobs/editjob/:jobID",
					element: <EditJob />,
				},
			],
		},
	]);
	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}

export default App;

