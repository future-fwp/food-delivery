import React from "react";
import CardFoodOrDrink from "./components/CardFoodOrDrink";
import Topic from "./components/Topic";
import "./Detail.css";
import { NavLink, Link } from "react-router-dom";

const CardSet = () => {
	const tabsData = [
		{
			svg: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 30 30"
				>
					<g transform="translate(-1447 -248)">
						<path
							d="M17,2V17.556H15.444V12.111H12.333V6.667A4.667,4.667,0,0,1,17,2ZM15.444,3.968a3.125,3.125,0,0,0-1.556,2.7v3.889h1.556V3.968ZM7.667,11.256v6.3H6.111v-6.3A3.89,3.89,0,0,1,3,7.444V2.778H4.556V8.222H6.111V2.778H7.667V8.222H9.222V2.778h1.556V7.444a3.89,3.89,0,0,1-3.111,3.811Z"
							transform="translate(1452 253)"
						/>
					</g>
				</svg>
			),
			span: <span>Menu</span>,
		},
		{
			svg: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 30 30"
				>
					<g transform="translate(-1447 -248)">
						<path
							d="M17,2V17.556H15.444V12.111H12.333V6.667A4.667,4.667,0,0,1,17,2ZM15.444,3.968a3.125,3.125,0,0,0-1.556,2.7v3.889h1.556V3.968ZM7.667,11.256v6.3H6.111v-6.3A3.89,3.89,0,0,1,3,7.444V2.778H4.556V8.222H6.111V2.778H7.667V8.222H9.222V2.778h1.556V7.444a3.89,3.89,0,0,1-3.111,3.811Z"
							transform="translate(1452 253)"
						/>
					</g>
				</svg>
			),
			span: <span>Overview</span>,
		},
	];
	const overviewLink = ["Beverage", "Dinner", "Desert"];
	const products = [
		{
			title: "Cold Coffees",
			description:
				"Frosty and satisfying cold coffee is a fantastic beverage treat to enjoy on a warm day. This cold coffee recipe with step-by-step photos and video is a ...Read More",
			price: "$50.00",
			imageUrl: "https://demo.yoyumm.com/image/product/795/120/120?t=-62170005208",
			altText: "beverage-01",
		},
		{
			title: "Cold Coffees",
			description:
				"Frosty and satisfying cold coffee is a fantastic beverage treat to enjoy on a warm day. This cold coffee recipe with step-by-step photos and video is a ...Read More",
			price: "$50.00",
			imageUrl: "https://demo.yoyumm.com/image/product/795/120/120?t=-62170005208",
			altText: "beverage-01",
		},
		{
			title: "Cold Coffees",
			description:
				"Frosty and satisfying cold coffee is a fantastic beverage treat to enjoy on a warm day. This cold coffee recipe with step-by-step photos and video is a ...Read More",
			price: "$50.00",
			imageUrl: "https://demo.yoyumm.com/image/product/795/120/120?t=-62170005208",
			altText: "beverage-01",
		},
	];

	return (
		// <>
		// 	{/* <section className="container mx-auto px-5 w-[90%] max-md:w-[94%] flex justify-between">
		// 		<div className="pt-[2.5rem] pr-[1.5rem] relative flex-1">
		// 			<form
		// 				action=""
		// 				className="mb-[2.5rem]"
		// 			>
		// 				<div className="flex-grow flex items-center bg-[#f5f5f5] h-[50px] relative z-20">
		// 					<input
		// 						type="text"
		// 						className="text-left  outline-none bg-[#f5f5f5]  border-transparent rounded-[0.625rem] placeholder:font-light px-[4rem] font-semibold text-[1rem]"
		// 						placeholder="Search within the field"
		// 					/>
		// 					<input
		// 						type="submit"
		// 						value=""
		// 						className=""
		// 						name="search"
		// 						id="search"
		// 					/>
		// 					<label
		// 						htmlFor="search"
		// 						className="absolute top-0 left-0 p-[1rem] mr-3 rounded-[10px]"
		// 					>
		// 						<svg
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							fill="none"
		// 							viewBox="0 0 24 24"
		// 							stroke-width="1.5"
		// 							stroke="currentColor"
		// 							className="size-5"
		// 						>
		// 							<path
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
		// 							></path>
		// 						</svg>
		// 					</label>
		// 					<span className="close-btn"></span>
		// 				</div>
		// 			</form>

		// 			<div>
		// 				<Topic />
		// 				<div className="mt-[4rem]">
		// 					<div>
		// 						<CardFoodOrDrink />
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div>
		// 			<div className=" border-[1px] border-[#ddd] !text-center">

		// 				<div>
		// 					<div className="p-[2.5rem] pb-0 flex justify-between items-center">
		// 						<h6>Your Cart</h6>
		// 						<span className=" underline underline-offset-[2px]">1 Item(s)</span>
		// 					</div>
		// 					<div className="p-[2.5rem] flex justify-center gap-[2.5rem]">
		// 						<div>
		// 							<div className="">
		// 								<div className="">
		// 									<h2 className="text-start font-semibold text-[0.875rem]">
		// 										<span className="text-[#d12027]">1x </span>
		// 										<span>Char-grilled Chicken - HALF</span>
		// 									</h2>
		// 									<div className="mb-[5px] text-start ">
		// 										<div className="w-[70%] leading-[1.4]">Eggs</div>
		// 									</div>

		// 									<div className="text-start">
		// 										<span className="font-semibold text-[0.875rem] ">$12.50</span>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 						<div className=" border-[1px] rounded-md w-[85px] h-[34px] border-[#4ca146] px-[0.25rem]">
		// 							<div className="text-[#4ca146] relative w-[85px] h-full flex items-center">
		// 								<span className="decrement-btn w-[22.5px] h-full flex justify-center items-center relative"></span>
		// 								<span className="my-auto w-[33px]">1</span>
		// 								<span className="increment-btn w-[22.5px] h-full flex justify-center items-center relative"></span>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="p-[2.5rem] border-t-[2px]">
		// 						<table className=" w-full mb-[1.5rem] border-collapse caption-bottom">
		// 							<tbody>
		// 								<tr className="text-[12px] font-semibold">
		// 									<td className="text-start">Sub Total</td>
		// 									<td className="text-end">$ 30.00</td>
		// 								</tr>
		// 								<tr className="text-[16px] font-extrabold">
		// 									<td className="text-start">Amount Payable</td>
		// 									<td className="text-end">$ 30.00</td>
		// 								</tr>
		// 							</tbody>
		// 						</table>
		// 						<a
		// 							href=""
		// 							className="w-full bg-[#4ca146] h-[50px] leading-[50px] text-white hover:bg-black duration-300 ease-in-out rounded-full block"
		// 						>
		// 							Proceed to checkout
		// 						</a>
		// 						<div className="mt-[0.5rem]">
		// 							Note: Min. Order:{" "}
		// 							<span>
		// 								<strong>$15.00</strong>
		// 							</span>
		// 							<br />
		// 							Max. Order :{" "}
		// 							<span>
		// 								<strong>$20.00</strong>
		// 							</span>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</section> */}
		// </>
		<section className="max-w-[1200px] mx-auto px-5 ">
			{/* Menu + overview  ==> flex items-start */}
			<div className="menu-overview border inline-flex w-full">
				{tabsData.map((tab, index) => (
					<div key={index}>
						<NavLink
							to="#"
							className={({ isActive }) =>
								isActive ? "flex items-center p-2 text-red-700 fill-red-700" : "flex items-center p-2 "
							}
						>
							<span className="icon">{tab.svg}</span>
							{tab.span}
						</NavLink>
					</div>
				))}
			</div>
			{/* HeadNav */}
			<div className="border inline-flex  w-full ">
				{overviewLink.map((each, index) => {
					return (
						<Link
							to={`#${each}`}
							className=" p-2"
							key={index}
						>
							{each}{" "}
						</Link>
					);
				})}
			</div>
			<section className="border w-full p-2 flex flex-col md:flex-row md:justify-between">
				<div className="content w-full md:w-2/3">
					<form
						action=""
						className="border w-full h-[40px] relative bg-gray-200 "
					>
						{/* input serach */}
						<input
							type="text"
							placeholder="Search for...."
							className="outline-none absolute left-14 h-full  bg-gray-200"
						/>
						<div className="w-[40px] h-[40px] flex justify-center items-center">
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
						</div>
					</form>
					<div className="content border-black ">
						<div className="title flex items-center">
							<h2
								className="flex items-center text-[1.25rem] font-semibold  pr-4 "
								id="#Beverage"
							>
								Beverage <span className="px-4 py-2 !text-[1rem] w-[100px] font-normal">2 Item(s)</span>
							</h2>
							<div className="border-b w-full"> </div>
							{/* <svg
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
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg> chevron down */}
							{/* <svg
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
									d="m4.5 15.75 7.5-7.5 7.5 7.5"
								/>
							</svg> chevon up */}
						</div>
						{/* beverage food dessert element */}
						<div className="mt-16">
							{products.map((each, index) => {
								return (
									<div className="md:grid flex max-md:justify-between md:grid-cols-4 mb-10 gap-8">
										<div className="content-product md:col-span-3 ">
											<h2 className="flex text-[1.25rem] font-semibold pb-2.5 items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													className="mr-2"
												>
													<path
														d="M0.125 0.125H14.875V14.875H0.125V0.125Z"
														stroke="#FF0F0F"
														stroke-width="0.25"
													/>
													<circle
														cx="7.75"
														cy="7.75"
														r="3.75"
														fill="#FF0F0F"
													/>
												</svg>
												{/* red dot */}
												{each.title}
											</h2>
											<p className="mb-4">
												{each.description}
												<span className="text-red-600">...Read More</span>
											</p>
											<span className="text-red-700 font-extrabold">{each.price}</span>
										</div>
										<div className="min-w-[100px]">
											<img
												src={each.imageUrl}
												alt={each.altText}
												className=""
											/>
											<button className="border xl:w-[calc(100%-28px)] w-full text-center border-green-700 text-green-700 text-[0.875rem] font-bold">
												+ Add
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="summary w-full md:w-1/3 h-full border-2 text-center p-5">
					<div className=" h-full">
						<h2>Your Cart</h2>
						<div className="image">
							<img
								src="https://demo.yoyumm.com/images/empty_cart.svg"
								alt="empty cart"
								className="max-w-auto mx-auto"
							/>
						</div>

						<h6>Add items in your basket</h6>

						<div className=" px-4 bg-red-600 text-white inline-block rounded-full">
							<Link
								to="/"
								className=""
							>
								View your restaurant
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Your cart summary */}
		</section>
	);
};

export default CardSet;

{
	/* <h4 className="text-[calc(18px+0.2vw)] font-medium pb-[10px] ">Your Cart</h4>
						<div>
							<img
								src="https://demo.yoyumm.com/images/empty_cart.svg"
								alt=""
								className="!mx-auto"
							/>
							<p className="text-[#666666] text-[1rem] mb-[1rem]">Add items in your basket</p>
							<a
								href=""
								className="text-[0.875rem] leading-[32px] px-[1rem] py-[1rem] rounded-full bg-[#d12027] text-white"
							>
								View Restaurants
							</a>
						</div> */
}
