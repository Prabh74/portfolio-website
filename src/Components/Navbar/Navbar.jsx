import "./navbar.css";
import { Outlet } from "react-router-dom";

export default function Navbar() {
	return (
		<>
		<nav className="navbar-container">
			<ul className="nav-items">
				<li className="nav-link">About</li>
				<li className="nav-link">Work</li>
				<li className="nav-link">Contact</li>
			</ul>
		</nav>
		<Outlet />
		</>
	);
}
