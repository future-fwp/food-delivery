import React, { useState } from "react";
import "./Navbar.css";
import { BiChevronDown } from "react-icons/bi";
const Navbar = ({
	setShowMenuBar,
	showMenuBar,
	setAnimate,
}: {
	setShowMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
	showMenuBar: boolean;
	setAnimate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [hoveronSelectLocation, sethoveronSelectLocation] = useState(false);
	const [hoveronLogin, setHoverOnLogin] = useState(false);
	const [hoveronCart, setHoverOnCart] = useState(false);

	return (
		<div className="header-main top-0  z-30  bg-white sticky w-[100vw] py-[1.5rem]">
			<div className="navbar-container  container mx-auto max-md:flex max-md:justify-between">
				<div className="flex items-center ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						width={30}
						className="mr-[1rem] cursor-pointer"
						onClick={() => {
							setShowMenuBar(true);
							setAnimate(true);
						}}
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<div className="mr-[1rem] p-0.5">
						<img
							src="https://demo.yoyumm.com/cache/5c/a0c0197089bfee2adbe0b5b0dabcf2.jpg"
							alt="yoyumm"
							width={110}
							height={27}
							className="my-auto"
						/>
					</div>

					<div
						className={
							showMenuBar
								? "hidden md:flex md:items-center md:select-location -z-10"
								: "hidden md:flex md:items-center md:select-location"
						}
						onMouseEnter={() => {
							sethoveronSelectLocation(true);
						}}
						onMouseLeave={() => {
							sethoveronSelectLocation(false);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<g transform="translate(0 -1)">
								<path
									id="Path_264"
									data-name="Path 264"
									d="M14.95,13.95,10,18.9,5.05,13.95a7,7,0,1,1,9.9,0ZM10,12.111A3.111,3.111,0,1,0,6.889,9,3.111,3.111,0,0,0,10,12.111Zm0-1.556A1.556,1.556,0,1,1,11.556,9,1.556,1.556,0,0,1,10,10.556Z"
									transform="translate(2 3)"
									fill="#d12027"
								></path>
							</g>
						</svg>
						<span className="see_hover"> Select Location </span>

						<BiChevronDown size={30} />
					</div>
				</div>
				<div
					className={showMenuBar ? "select-location md:hidden -z-10" : " select-location md:hidden"}
					onMouseEnter={() => {
						sethoveronSelectLocation(true);
					}}
					onMouseLeave={() => {
						sethoveronSelectLocation(false);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<g transform="translate(0 -1)">
							<path
								id="Path_264"
								data-name="Path 264"
								d="M14.95,13.95,10,18.9,5.05,13.95a7,7,0,1,1,9.9,0ZM10,12.111A3.111,3.111,0,1,0,6.889,9,3.111,3.111,0,0,0,10,12.111Zm0-1.556A1.556,1.556,0,1,1,11.556,9,1.556,1.556,0,0,1,10,10.556Z"
								transform="translate(2 3)"
								fill="#d12027"
							></path>
						</g>
					</svg>
					<span className="see_hover"> Select Location </span>

					<BiChevronDown size={30} />
				</div>

				<form className={showMenuBar ? "navbar-center -z-10" : "navbar-center"}>
					<input
						type="search"
						name=""
						id=""
						className="hidden lg:flex lg:flex-1 lg:h-[50px] lg:px-[3rem] lg:rounded-[30px] lg:outline-none lg:border-gray-200 lg:border-[2px] lg:shadow-[inset_0px_0px_4px_4px_rgba(0,0,0,0.03)]"
						placeholder="Type something"
					/>

					<input
						type="submit"
						value=""
						name="search"
						id="search"
						className="hidden"
					/>
					<label
						htmlFor="search"
						className="hidden lg:absolute lg:block lg:left-[1rem]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
					</label>
				</form>
				<div className="md:flex md:items-center hidden">
					<div
						className="login pl-[0.5rem] pr-[0.5rem]"
						onMouseEnter={() => {
							setHoverOnLogin(true);
						}}
						onMouseLeave={() => {
							setHoverOnLogin(false);
						}}
					>
						<span className="people-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="duration-500 ease-in-out"
								fill={hoveronLogin ? "#d32b32" : "black"}
							>
								<g transform="translate(-1291 -39)">
									<path
										data-name="Path 266"
										d="M11.408,8.844c.406.14.805.261,1.194.413a9.975,9.975,0,0,1,3.062,1.873,3.687,3.687,0,0,1,1.307,2.641c.047,1.055.01,2.111.01,3.182H.01c0-.044-.012-.089-.013-.134C0,15.911-.009,15,0,14.093A3.911,3.911,0,0,1,1.43,11.038,10.286,10.286,0,0,1,5.39,8.919c.062-.018.123-.037.2-.064a4.884,4.884,0,0,1-2-4.276A4.74,4.74,0,0,1,5.225,1.215,4.894,4.894,0,0,1,12,1.438a4.749,4.749,0,0,1,1.392,3.834A4.868,4.868,0,0,1,11.408,8.844Zm4.258,6.783c0-.534.007-1.052,0-1.57a2.565,2.565,0,0,0-.911-1.96,8.872,8.872,0,0,0-2.829-1.676,10.038,10.038,0,0,0-5.178-.447A9.034,9.034,0,0,0,2.258,12.08a2.419,2.419,0,0,0-.876,1.513,12.966,12.966,0,0,0-.062,1.358c-.007.224,0,.445,0,.676ZM4.912,4.881A3.586,3.586,0,1,0,8.505,1.292,3.6,3.6,0,0,0,4.912,4.881Z"
										transform="translate(1295.006 43.037)"
									></path>
								</g>
							</svg>
						</span>

						<span className="">login / register</span>
					</div>
					<div
						className="cart"
						onMouseEnter={() => {
							setHoverOnCart(true);
						}}
						onMouseLeave={() => {
							setHoverOnCart(false);
						}}
					>
						<div className="cart-container">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="shopping-icon duration-500 ease-in-out"
								fill={hoveronCart ? "#d32b32" : "black"}
							>
								<g transform="translate(-1291 -39)">
									<path
										data-name="Path 265"
										d="M8.168,0h.665a.754.754,0,0,0,.109.031,3.286,3.286,0,0,1,2.806,2.657,12.233,12.233,0,0,1,.073,1.474c0,.063,0,.127,0,.208h3.771c.239,1.778.476,3.539.71,5.3.227,1.7.447,3.393.679,5.089a2,2,0,0,1-1.455,2.207c-.084.022-.168.044-.252.069H1.726A1.1,1.1,0,0,0,1.62,17,1.981,1.981,0,0,1,.083,15.6c-.032-.1-.055-.2-.083-.3v-.532a.229.229,0,0,0,.027-.058q.087-.642.171-1.286l.518-3.87q.257-1.917.512-3.834L1.412,4.36H5.183c0-.365-.012-.713,0-1.061A3.239,3.239,0,0,1,7.142.3,6.647,6.647,0,0,1,8.168,0Zm-5.6,5.7c-.138,1.028-.276,2.037-.41,3.047q-.406,3.039-.81,6.077c-.077.581.184.883.772.883H15.007a.665.665,0,0,0,.659-.766q-.266-2.009-.538-4.019Q14.853,8.86,14.577,6.8c-.049-.366-.1-.733-.149-1.1H11.816V7.711H10.491V5.7H6.5V7.709H5.174V5.7Zm7.92-1.345c0-.362,0-.706,0-1.049A2,2,0,0,0,8.867,1.365,1.975,1.975,0,0,0,6.642,2.632a2.568,2.568,0,0,0-.129.7c-.021.34-.006.681-.006,1.023Z"
										transform="translate(1295 42)"
									></path>
								</g>
							</svg>
							<span className="hidden md:block">cart</span>
						</div>
					</div>
				</div>
			</div>
			<form className="lg:hidden flex items-center container relative px-5 mx-auto">
				<input
					type="search"
					name=""
					id=""
					className="flex flex-1 h-[50px] px-[3rem] rounded-[30px] outline-none border-gray-200 border-[2px] shadow-[inset_0px_0px_4px_4px_rgba(0,0,0,0.03)]"
					placeholder="Type something"
				/>

				<input
					type="submit"
					value=""
					name="search"
					id="search"
					className="hidden"
				/>
				<label
					htmlFor="search"
					className="lg:hidden absolute translate-x-[4px]"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						className="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
				</label>
			</form>
			<div className="md:hidden flex justify-end px-5 container mx-auto">
				<div
					className="login pl-[0.5rem] pr-[0.5rem]"
					onMouseEnter={() => {
						setHoverOnLogin(true);
					}}
					onMouseLeave={() => {
						setHoverOnLogin(false);
					}}
				>
					<span className="people-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="duration-500 ease-in-out"
							fill={hoveronLogin ? "#d32b32" : "black"}
						>
							<g transform="translate(-1291 -39)">
								<path
									data-name="Path 266"
									d="M11.408,8.844c.406.14.805.261,1.194.413a9.975,9.975,0,0,1,3.062,1.873,3.687,3.687,0,0,1,1.307,2.641c.047,1.055.01,2.111.01,3.182H.01c0-.044-.012-.089-.013-.134C0,15.911-.009,15,0,14.093A3.911,3.911,0,0,1,1.43,11.038,10.286,10.286,0,0,1,5.39,8.919c.062-.018.123-.037.2-.064a4.884,4.884,0,0,1-2-4.276A4.74,4.74,0,0,1,5.225,1.215,4.894,4.894,0,0,1,12,1.438a4.749,4.749,0,0,1,1.392,3.834A4.868,4.868,0,0,1,11.408,8.844Zm4.258,6.783c0-.534.007-1.052,0-1.57a2.565,2.565,0,0,0-.911-1.96,8.872,8.872,0,0,0-2.829-1.676,10.038,10.038,0,0,0-5.178-.447A9.034,9.034,0,0,0,2.258,12.08a2.419,2.419,0,0,0-.876,1.513,12.966,12.966,0,0,0-.062,1.358c-.007.224,0,.445,0,.676ZM4.912,4.881A3.586,3.586,0,1,0,8.505,1.292,3.6,3.6,0,0,0,4.912,4.881Z"
									transform="translate(1295.006 43.037)"
								></path>
							</g>
						</svg>
					</span>

					<span className="">login / register</span>
				</div>
				<div
					className="cart"
					onMouseEnter={() => {
						setHoverOnCart(true);
					}}
					onMouseLeave={() => {
						setHoverOnCart(false);
					}}
				>
					<div className="cart-container">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="shopping-icon duration-500 ease-in-out"
							fill={hoveronCart ? "#d32b32" : "black"}
						>
							<g transform="translate(-1291 -39)">
								<path
									data-name="Path 265"
									d="M8.168,0h.665a.754.754,0,0,0,.109.031,3.286,3.286,0,0,1,2.806,2.657,12.233,12.233,0,0,1,.073,1.474c0,.063,0,.127,0,.208h3.771c.239,1.778.476,3.539.71,5.3.227,1.7.447,3.393.679,5.089a2,2,0,0,1-1.455,2.207c-.084.022-.168.044-.252.069H1.726A1.1,1.1,0,0,0,1.62,17,1.981,1.981,0,0,1,.083,15.6c-.032-.1-.055-.2-.083-.3v-.532a.229.229,0,0,0,.027-.058q.087-.642.171-1.286l.518-3.87q.257-1.917.512-3.834L1.412,4.36H5.183c0-.365-.012-.713,0-1.061A3.239,3.239,0,0,1,7.142.3,6.647,6.647,0,0,1,8.168,0Zm-5.6,5.7c-.138,1.028-.276,2.037-.41,3.047q-.406,3.039-.81,6.077c-.077.581.184.883.772.883H15.007a.665.665,0,0,0,.659-.766q-.266-2.009-.538-4.019Q14.853,8.86,14.577,6.8c-.049-.366-.1-.733-.149-1.1H11.816V7.711H10.491V5.7H6.5V7.709H5.174V5.7Zm7.92-1.345c0-.362,0-.706,0-1.049A2,2,0,0,0,8.867,1.365,1.975,1.975,0,0,0,6.642,2.632a2.568,2.568,0,0,0-.129.7c-.021.34-.006.681-.006,1.023Z"
									transform="translate(1295 42)"
								></path>
							</g>
						</svg>
						<span className="block">cart</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
