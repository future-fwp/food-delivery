import React from "react";

const CardFoodOrDrink = () => {
	return (
		<div className="mb-[2.5rem] flex gap-x-[2rem]">
			<div>
				<h6 className="pb-[10px] font-semibold flex text-[1.25rem] ">
					<span className="dot-icon relative border-[1px] border-[#4ca146] w-[15px] h-[15px] mr-[5px] mt-[6px] flex justify-center items-center">
						<div className=" w-[7px] h-[7px] rounded-full bg-[#4ca146]"></div>
					</span>{" "}
					Ginger beer{" "}
				</h6>
				<div className=" mb-[1rem]">
					<p className="inline line-1.8 ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus doloribus aliquam animi, corrupti,
						accusantium reiciendis sint et neque nisi....{" "}
					</p>
					<span className="text-red-700">Read More</span>
					<p className="inline line-1.8">
						{" "}
						voluptate vel debitis sit quidem dicta soluta. Distinctio ad debitis quam!
					</p>
					<span className="text-red-700"> Read Less</span>
				</div>
				<span className="text-red-700 font-semibold">$10.00</span>
			</div>
			<div className="">
				<div className="w-[120px] h-[120px] aspect-[1/1]">
					<img
						src="https://demo.yoyumm.com/image/product/814/120/120?t=-62170005208"
						alt=""
					/>
				</div>
				<div className="flex justify-center">
					<button className="bg-white w-[105px] px-[0.25rem] rounded-md mt-[-20px] h-[40px] text-[#4ca146] text-[14px] font-semibold border-[#4ca146]  border-[1px] ">
						<span>+add</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardFoodOrDrink;
