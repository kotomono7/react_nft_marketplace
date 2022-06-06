import React from "react";
import Choose from "./components/Choose";
import Clients from "./components/Clients";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Market from "./components/Market";
import Scroller from "./components/Scroller";
import Subscribe from "./components/Subscribe";

export default function App() {
	return (
		<div>
			<Home />
			<Clients />
			<Choose />
			<Create />
			<Market />
			<Subscribe />
			<Footer />
			<Scroller />
		</div>
	);
}
