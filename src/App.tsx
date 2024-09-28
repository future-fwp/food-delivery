import {
	Navbar,
	Hero,
	ExploreFood,
	DineOut,
	CountryFood,
	HowItworks,
	Download,
	Footer,
	QuickLinks,
	Detail,
	CardSet,
} from "./exportall.ts";

import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TypeFood from "./components/Home/TypeFood/TypeFood.tsx";

export default function App() {
	console.log(Detail);
	const [showMenuBar, setShowMenuBar] = useState(false);
	const Context = createContext<null | { showMenuBar: boolean }>(null);

	document.body.style.overflow = showMenuBar ? "hidden" : "auto";

	const [animate, setAnimate] = useState(false);

	const variantMenuBar = { open: { x: 0 }, closed: { x: -2000 } };
	return (
		<Context.Provider value={{ showMenuBar: showMenuBar }}>
			<React.Fragment>
				{showMenuBar && (
					<motion.div
						initial={{ x: -2000 }}
						animate={animate ? "open" : "closed"}
						variants={variantMenuBar}
						className="fixed inset-0 w-full h-full z-50 "
					>
						<QuickLinks
							setShowMenuBar={setShowMenuBar}
							showMenuBar={showMenuBar}
							setAnimate={setAnimate}
						/>
					</motion.div>
				)}
			</React.Fragment>
			<React.Fragment>
				<Navbar
					setShowMenuBar={setShowMenuBar}
					showMenuBar={showMenuBar}
					setAnimate={setAnimate}
				></Navbar>
				<hr />
			</React.Fragment>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="">
								<ExploreFood showMenuBar={showMenuBar} />
							</div>
							<hr />
							<Hero />
							{/* showMenuBar={showMenuBar} */}
							<DineOut />
							<TypeFood />
							<CountryFood />
							<HowItworks />
							<Download />
						</>
					}
				></Route>
				<Route
					path="/detail-restaurant"
					element={
						<>
							<Detail />
							<CardSet />
						</>
					}
				></Route>
			</Routes>
			<React.Fragment>
				<Footer showMenuBar={showMenuBar} />
			</React.Fragment>
		</Context.Provider>
	);
}
