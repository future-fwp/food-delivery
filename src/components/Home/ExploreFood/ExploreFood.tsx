import React, { useState } from "react";
import "./ExploreFood.css";
import { menuItems } from "../../../exportall";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
interface MenuItem {
	name: string;
	imageUrl: string;
	href: string;
}

const ExploreFood = ({ showMenuBar }: { showMenuBar: boolean }) => {
	// const [startIndex, setStartIndex] = useState(0);
	// const visibleCount = 10; // Number of visible items in the container

	// const nextItems = () => {
	// 	if (startIndex + visibleCount < menuItems.length) {
	// 		setStartIndex((prevIndex) => prevIndex + 1);
	// 	}
	// };

	// const prevItems = () => {
	// 	if (startIndex > 0) {
	// 		setStartIndex((prevIndex) => prevIndex - 1);
	// 	}
	// };

	return (
		// <div className="flex items-center">
		// 	<FaChevronLeft
		// 		className={`cursor-pointer`}
		// 		size={30}
		// 	/>
		// 	<div className="py-[16px]">
		// 		<div className="container mx-auto px-5 w-[90%]">
		// 			<div className="">
		// 				<a
		// 					href=""
		// 					className=""
		// 				>
		// 					<span className="">
		// 						<img
		// 							src=""
		// 							alt=""
		// 							className=""
		// 						/>
		// 					</span>
		// 					<span className=""></span>
		// 				</a>
		// 			</div>
		// 			<div className="">
		// 				<a
		// 					href=""
		// 					className=""
		// 				>
		// 					<span className="">
		// 						<img
		// 							src=""
		// 							alt=""
		// 							className=""
		// 						/>
		// 					</span>
		// 					<span className=""></span>
		// 				</a>
		// 			</div>
		// 			<div className="">
		// 				<a
		// 					href=""
		// 					className=""
		// 				>
		// 					<span className="">
		// 						<img
		// 							src=""
		// 							alt=""
		// 							className=""
		// 						/>
		// 					</span>
		// 					<span className=""></span>
		// 				</a>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	{/* <div className="mx-auto flex w-[calc(100vw-100px)] my-4 justify-between items-center overflow-scroll duration-200 ease-in-out">
		// 		{menuItems?.map((each, index) => (
		// 			<div>
		// 				<a
		// 					key={index}
		// 					href={each.href}
		// 					className={`flex items-center justify-center flex-col w-[120px] flex-grow-0 flex-shrink-0`}
		// 				>
		// 					<div className="hover:bg-gray-200 mx-auto mb-[10px] hover:rounded-full hover:shadow-lg hover:-translate-y-1">
		// 						<img
		// 							src={"https://demo.yoyumm.com" + each.imageUrl}
		// 							alt={each.name}
		// 							width={40}
		// 							height={40}
		// 						/>
		// 					</div>
		// 					<span className="">{each.name}</span>
		// 				</a>
		// 			</div>
		// 		))}
		// 	</div> */}
		// 	<FaChevronRight
		// 		className={`cursor-pointer`}
		// 		size={30}
		// 	/>
		// </div>
		<div className=" py-[1rem]">
			<div className="px-5 mx-auto container">
				<div className="max-w-[120px] flex justify-center">
					<div className="px-[1rem]">
						<a
							href="/"
							className="mx-[1rem] relative"
						>
							<span className="mb-[10px] mx-auto ">
								<div className="p-2 bg-gray-200 hover:-translate-y-2 hover:shadow-xl duration-[500ms] ease-in-out rounded-full xl:w-[80px] xl:h-[80px] md:w-[60px] md:h-[60px] h-[40px] w-[40px] flex justify-center ">
									<img
										src="https://demo.yoyumm.com/cache/86/3a6c34fc8fbcbbddca5dd5f788882b.jpg"
										alt=""
										className="xl:w-[60px] xl:h-[60px] md:w-[40px] md:h-[40px] h-[20px] w-[20px]"
									/>
								</div>
							</span>
							<div className="xl:w-[80px] md:w-[60px] w-[40px]">
								<span className="flex justify-center">Cajun</span>
							</div>
						</a>
					</div>
				</div>
				<div>
					<a href="">
						<span>
							<img
								src=""
								alt=""
							/>
						</span>
						<span></span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ExploreFood;
