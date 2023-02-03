import "./general.css";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Cursor from "./Components/Cursor/Cursor";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";

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
				<>
					<Navbar />
					<Landing />
					<Cursor />
				</>
			)}
		</>
	);
}

export default App;
