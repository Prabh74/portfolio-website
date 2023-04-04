import "./general.css";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Work from "./Components/Work/Work";
import { Route, Routes } from "react-router-dom";

function App() {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1500);
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route
							path="/"
							element={
								<>
									<Landing />
									<About />
									<Work />
									{/* <Contact /> */}
								</>
							}
						/>
					</Route>
				</Routes>
			)}
		</>
	);
}

export default App;
