// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ImageForTrial from "./../../assets/images-1.jpg";
// import Imageblack from "./../../assets/18-black-and-white-work-summary-powerpoint-background_096141a7a0__960_540 1.jpg";
// import ImageMap from "./../../assets/juho-luomala-K2AWz4lXrAM-unsplash.jpg";

// function Transform({ handleDecreaseImageIndex }: { handleDecreaseImageIndex: () => void }) {
// 	return (
// 		<div
// 			className="bg-gray-200 p-2 w-12 h-12 relative rounded-full cursor-pointer hover:scale-125 duration-500 ease-in-all-out"
// 			onClick={handleDecreaseImageIndex}
// 		>
// 			<div className={`border-[2px] border-black w-6 absolute top-[30%]  rotate-[135deg]`}></div>
// 			<div className={`border-[2px] border-black w-6 absolute bottom-[30%] rotate-[45deg]`}></div>
// 		</div>
// 	);
// }

// function TransformPerpendicular({ handleIncreaseImageIndex }: { handleIncreaseImageIndex: () => void }) {
// 	return (
// 		<div
// 			className="bg-gray-200 p-2 w-12 h-12 relative rounded-full cursor-pointer hover:scale-125 duration-500 ease-in-all-out"
// 			onClick={handleIncreaseImageIndex}
// 		>
// 			<div className={`border-[2px] border-black w-6 absolute top-[30%] left-[20%] rotate-[45deg]`}></div>
// 			<div className={`border-[2px] border-black w-6 absolute bottom-[30%] left-[20%] rotate-[135deg]`}></div>
// 		</div>
// 	);
// }

// function CircleBottom({
// 	indexImage,
// 	setIndexImage,
// }: {
// 	indexImage: number;
// 	setIndexImage: React.Dispatch<React.SetStateAction<number>>;
// }) {
// 	return (
// 		<div className="flex gap-[20px]">
// 			{[0, 1, 2].map((index) => (
// 				<div
// 					key={index}
// 					onClick={() => setIndexImage(index)}
// 					className={`w-4 h-4 rounded-full cursor-pointer ${
// 						indexImage === index ? "bg-gray-700 scale-125" : "bg-gray-300"
// 					}`}
// 				></div>
// 			))}
// 		</div>
// 	);
// }

// const images = [
// 	"https://demo.yoyumm.com/cache/12/a3824870b5a8e83d3b5c51e7a5f405.jpg",
// 	"https://demo.yoyumm.com/cache/dc/06afe7f135a647be8d074cb3cb262d.jpg",
// 	"https://demo.yoyumm.com/cache/fe/d89ddbb1578e0e857718ab7df383f1.jpg",
// ];

// const Hero = ({ showMenuBar }: { showMenuBar: boolean }) => {
// 	const [indexImage, setIndexImage] = useState<number>(0);
// 	const [direction, setDirection] = useState<number>(0);

// 	const handleIncreaseImageIndex = () => {
// 		setDirection(1);
// 		setIndexImage((prev) => (prev + 1) % images.length);
// 	};

// 	const handleDecreaseImageIndex = () => {
// 		setDirection(-1);
// 		setIndexImage((prev) => (prev === 0 ? images.length - 1 : (prev - 1) % images.length));
// 	};

// 	const variants = {
// 		enter: (direction: number) => {
// 			return {
// 				x: direction > 0 ? 1000 : -1000,
// 				opacity: 0,
// 			};
// 		},
// 		center: {
// 			x: 0,
// 			opacity: 1,
// 		},
// 		exit: (direction: number) => {
// 			return {
// 				x: direction < 0 ? 1000 : -1000,
// 				opacity: 0,
// 			};
// 		},
// 	};

// 	const [isHoveredImage, setIsHoveredImage] = useState(false);

// 	const PreviousButtonVariant = { hovered: { x: 0 } };

// 	return (
// 		<motion.div
// 			className={
// 				showMenuBar
// 					? "w-[90%] mx-auto relative flex items-center justify-center -z-10"
// 					: "w-[90%] mx-auto relative flex items-center justify-center"
// 			}
// 			onMouseEnter={() => setIsHoveredImage(true)}
// 			onMouseLeave={() => setIsHoveredImage(false)}
// 			whileHover="hovered"
// 		>
// 			<motion.div
// 				initial={{ x: -120 }}
// 				className=""
// 				variants={PreviousButtonVariant}
// 				animate={isHoveredImage ? "hovered" : ""}
// 			>
// 				<Transform handleDecreaseImageIndex={handleDecreaseImageIndex} />
// 			</motion.div>
// 			<div className="flex overflow-hidden relative w-full h-[400px] ">
// 				<AnimatePresence
// 					initial={false}
// 					custom={direction}
// 				>
// 					<motion.div
// 						key={indexImage}
// 						custom={direction}
// 						variants={variants}
// 						initial="enter"
// 						animate="center"
// 						exit="exit"
// 						transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.5 } }}
// 						className="absolute w-full h-[100%] flex items-center justify-center"
// 					>
// 						<div className="overflow-hidden inline-block">
// 							<motion.img
// 								src={images[indexImage]}
// 								alt={`Image ${indexImage}`}
// 								className="w-full object-cover block transition-transform duration-500 ease-in-out hover:scale-110"
// 							/>
// 							{/* <div className="absolute inset-0"></div> */}
// 						</div>
// 					</motion.div>
// 					<div className="mt-4 flex justify-end flex-col w-full items-center">
// 						<CircleBottom
// 							indexImage={indexImage}
// 							setIndexImage={setIndexImage}
// 						/>
// 					</div>
// 				</AnimatePresence>
// 			</div>

// 			<motion.div
// 				initial={{ x: 120 }}
// 				className=""
// 				variants={PreviousButtonVariant}
// 				animate={isHoveredImage ? "hovered" : ""}
// 			>
// 				<TransformPerpendicular handleIncreaseImageIndex={handleIncreaseImageIndex} />
// 			</motion.div>
// 		</motion.div>
// 	);
// };

// export default Hero;import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ImageTrial from "../../assets/Home/18-black-and-white-work-summary-powerpoint-background_096141a7a0__960_540 1.jpg";

const Hero = () => {
	return (
		<div className="container mx-auto px-5 sm:px-0">
			<div className="relative h-[500px] md:h-[600px] overflow-hidden">
				{/* Left overlay */}
				<div className="absolute translate-x-[20px] left-0 top-1/2 transform -translate-y-1/2 z-10">
					<BiChevronLeft className="text-4xl md:text-5xl text-gray-700" />
				</div>

				{/* Image */}
				<div className="relative w-full h-[500px]">
					<img
						src={"https://demo.yoyumm.com/cache/fe/d89ddbb1578e0e857718ab7df383f1.jpg"}
						alt={"Image"}
						className="w-full h-[500px] flex object-contain object-center aspect-[4/3] "
					/>
				</div>

				{/* Bottom overlay */}
				<div className="absolute bottom-6 left-1/2 -translate-y-20 transform -translate-x-1/2 bg-gray-100 bg-opacity-80 px-5 py-2 rounded-full flex items-center">
					<div className="bg-gray-300 rounded-full w-3 h-3 mx-1"></div>
					<div className="bg-gray-300 rounded-full w-3 h-3 mx-1"></div>
					<div className="bg-red-700 ring-2 ring-black rounded-full w-3 h-3 mx-1"></div>
				</div>
				<div className="absolute -translate-x-[20px] right-0 top-1/2 transform -translate-y-1/2 z-10">
					<span className="text-span-next relative"></span>
				</div>
			</div>
		</div>
	);
};

export default Hero;
