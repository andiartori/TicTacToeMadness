import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const Home = () => <h2>Home Page</h2>;
const Decent = () => <h2>Decent Page</h2>;
const Nice = () => <h2>Nice Page</h2>;

const App = () => {
	return (
		<Router>
			<nav>
				<Link to="/">Home</Link> |<Link to="/decent"> Decent</Link> |
				<Link to="/nice">Nice</Link>
			</nav>

      <AppRoutes/>
		</Router>
	);
};

export default App; // ✅ Ensure this exists
