// import React from "react";
// import { Link } from "react-router-dom";
// import { dataCountry } from "../../exportall";
// import { motion, spring } from "framer-motion";

// const QuickLinks = ({
// 	setShowMenuBar,
// 	showMenuBar,
// 	setAnimate,
// }: {
// 	setShowMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
// 	showMenuBar: boolean;
// 	setAnimate: React.Dispatch<React.SetStateAction<boolean>>;
// }) => {
// 	const firstDataLink = [
// 		{ linkName: "Home", path: "/" },
// 		{ linkName: "Restaurants", path: "/restaurants" },
// 		{ linkName: "Blog", path: "/blog" },
// 		{ linkName: "Faq", path: "/faq" },
// 	];

// 	return (
// 		<motion.div
// 			className=" bg-neutral-800 opacity-95 z-50"
// 			onClick={(e) => {
// 				setAnimate((prev) => !prev);
// 				setTimeout(() => {
// 					setShowMenuBar(false);
// 				}, 2000);
// 				e.stopPropagation();
// 			}}
// 		>
// 			<div className="bg-white min-h-screen max-w-[400px] overflow-y-auto">
// 				<div className="py-3">
// 					<p className="p-2 border-b-[1px] border-black">QUICK LINKS</p>
// 					<nav>
// 						{firstDataLink.map((each, index) => {
// 							return (
// 								<Link
// 									to={each.path}
// 									className="flex justify-between hover:bg-gray-200 ease-in-out duration-500 px-4 py-4"
// 									onClick={() => setShowMenuBar(false)}
// 								>
// 									{each.linkName}
// 									<svg
// 										xmlns="http://www.w3.org/2000/svg"
// 										fill="none"
// 										viewBox="0 0 24 24"
// 										strokeWidth="1.5"
// 										stroke="currentColor"
// 										className="size-6"
// 									>
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											d="m8.25 4.5 7.5 7.5-7.5 7.5"
// 										/>
// 									</svg>
// 								</Link>
// 							);
// 						})}
// 					</nav>
// 				</div>
// 				<div className="py-3">
// 					<p className="p-2 border-b-[1px] border-black">POPULAR CITIES</p>
// 					<nav>
// 						{dataCountry.map((each, index) => (
// 							<Link
// 								key={index}
// 								to={"/restaurants/lists?city=" + each}
// 								className="flex justify-between px-4 py-4  hover:bg-gray-200 ease-in-out duration-500"
// 								onClick={() => setShowMenuBar(false)}
// 							>
// 								{each}
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									fill="none"
// 									viewBox="0 0 24 24"
// 									strokeWidth="1.5"
// 									stroke="currentColor"
// 									className="size-6"
// 								>
// 									<path
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 										d="m8.25 4.5 7.5 7.5-7.5 7.5"
// 									/>
// 								</svg>
// 							</Link>
// 						))}
// 					</nav>
// 				</div>
// 			</div>
// 		</motion.div>
// 	);
// };

// export default QuickLinks;
import React from "react";
import "./QuickLinks.css";

const QuickLinks = () => {
	return (
		<div className="bg-gray-200 w-[400px]">
			<div className="px-[2.5rem] py-[1.5rem] ">
				<a
					href=""
					className="w-[40px] h-[40px] flex items-center back-icon relative"
				></a>
			</div>
			<div>
				<div>
					<h6 className="px-[2.5rem] text-[12px] mb-[1rem] ">QUICK LINKS</h6>
					<nav>
						<a
							href=""
							className="relative px-[2.5rem] nav-link flex items-center justify-between"
						>
							Home
						</a>
						<a href="">Restaurants</a>
					</nav>
				</div>
				<div className="mt-[4rem]">
					{" "}
					// except first div
					<h6 className="px-[2.5rem] text-[12px] mb-[1rem] ">QUICK LINKS</h6>
					<nav>
						<a
							href=""
							className="relative px-[2.5rem] nav-link flex items-center justify-between"
						>
							Home
						</a>
						<a href="">Restaurants</a>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default QuickLinks;
