import React from "react";
import "./Footer.css";
import mailer from "./../../assets/email-2030737-1713377.png";
const Footer = ({ showMenuBar }: { showMenuBar: boolean }) => {
	const [mouseEnterIndexListElement, setMouseEnterIndexListElement] = React.useState<number | null>(null);

	return (
		// <div className="mx-auto md:bg-black ">
		// 	<div className="footer block md:flex md:flex-col lg:flex-row items-center gap-[100px] p-10 w-[90%]">
		// 		<div className="text-black md:text-white">
		// 			<h2 className="flex justify-center md:block text-lg font-bold">Get Exclusive Offers</h2>
		// 			<h2 className="flex justify-center md:block">Get Exclusive Offers Text</h2>
		// 		</div>
		// 		<form
		// 			action="/submit"
		// 			className="flex-1 flex h-[40px]"
		// 		>
		// 			<div
		// 				className={
		// 					showMenuBar
		// 						? "w-full flex-grow bg-white flex items-center rounded-full relative -z-10 border-[1px] border-gray-400"
		// 						: "w-full flex-grow bg-white flex items-center rounded-full relative border-[1px] border-gray-400"
		// 				}
		// 			>
		// 				<input
		// 					type="email"
		// 					className="outline-none text-black ml-12 mr-3 flex-1 "
		// 					placeholder="Enter an email address."
		// 				/>
		// 				<img
		// 					src={mailer}
		// 					alt="mailer"
		// 					width={30}
		// 					height={20}
		// 					className="absolute left-[8px] "
		// 				/>
		// 				<button
		// 					type="submit"
		// 					className="absolute right-[8px] text-white bg-yellow-500 px-4 py-1 rounded-full "
		// 				>
		// 					Submit
		// 				</button>
		// 			</div>
		// 		</form>
		// 	</div>

		// 	</div>
		// </div>
		<footer>
			<div className=" md:bg-[#333] ">
				<div className="w-[90%] px-5 container mx-auto">
					<div className="lg:grid lg:grid-cols-2 lg:gap-x-[2rem] py-[4.5rem] items-center">
						<div className="md:text-white max-lg:text-center max-lg:pb-[1rem]">
							<h2 className="font-extrabold text-[1.875rem] pb-[0.25rem]">Get Exclusive Offers</h2>
							<p className="text-[1rem]">Get Exclusive Offers Text</p>
						</div>
						<div className="">
							<div className="bg-white p-[0.625rem] min-w-[400px] max-md:border-gray-200 max-md:border-2 rounded-[30px] ">
								<form
									action=""
									className="flex items-center"
								>
									<input
										type="text"
										placeholder="Email address"
										className="flex-1 bg-[url('https://demo.yoyumm.com/cache/9f/images/retina/icon__email.svg')] bg-no-repeat bg-left-[10px] pl-[3rem] outline-none"
									/>
									<input
										type="submit"
										value="subscirbe"
										className="bg-[#eca100] h-[40px] text-[14px] px-[2rem] outline-offset-[2px] rounded-full text-white"
									/>
								</form>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-4 py-[4.5rem] max-md:hidden ">
						<div className="footer">
							<h2>Get To Know Us</h2>
							<ul>
								<li>Terms and conditions</li>
								<li>About us</li>
								<li>Our Team</li>
								<li>Privacy Policy</li>
								<li>Advertise</li>
								<li>Contact Us</li>
								<li>Blog</li>
							</ul>
						</div>
						<div className="footer ">
							<h2>Let Us Help You</h2>
							<ul>
								<li>About Us</li>
								<li>How it Works</li>
								<li>Partner with Us</li>
								<li>Privacy policy</li>
							</ul>
						</div>{" "}
						<div className="footer ">
							<h2>Follow Us</h2>
							<ul>
								<li
									className=""
									onMouseEnter={() => {
										setMouseEnterIndexListElement(0);
									}}
									onMouseLeave={() => {
										setMouseEnterIndexListElement(null);
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="gray"
										className={mouseEnterIndexListElement === 0 ? "fill-white duration-500 ease-in-out" : ""}
									>
										<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
									</svg>
									Facebook
								</li>

								<li
									onMouseEnter={() => {
										setMouseEnterIndexListElement(1);
									}}
									onMouseLeave={() => {
										setMouseEnterIndexListElement(null);
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="gray"
										className={mouseEnterIndexListElement === 1 ? "fill-white duration-500 ease-in-out" : ""}
									>
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
									</svg>
									Instagram
								</li>

								<li
									onMouseEnter={() => {
										setMouseEnterIndexListElement(2);
									}}
									onMouseLeave={() => {
										setMouseEnterIndexListElement(null);
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="gray"
										className={mouseEnterIndexListElement === 2 ? "fill-white duration-500 ease-in-out" : ""}
									>
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
									</svg>
									Twitter
								</li>

								<li
									onMouseEnter={() => {
										setMouseEnterIndexListElement(3);
									}}
									onMouseLeave={() => {
										setMouseEnterIndexListElement(null);
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="gray"
										className={mouseEnterIndexListElement === 3 ? "fill-white duration-500 ease-in-out" : ""}
									>
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
									Linkedin
								</li>

								<li
									onMouseEnter={() => {
										setMouseEnterIndexListElement(4);
									}}
									onMouseLeave={() => {
										setMouseEnterIndexListElement(null);
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="gray"
										className={mouseEnterIndexListElement === 4 ? "fill-white duration-500 ease-in-out" : ""}
									>
										<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
									</svg>
									YouTube
								</li>
							</ul>
						</div>{" "}
						<div className="footer flex flex-col ">
							<h2>Partner with us</h2>
							<a
								href=""
								className="rounded-full mb-2 text-black  hover:bg-red-700 hover:text-white bg-white col-span-1 btn-footer px-3 relative py-2 duration-300 ease-in-out"
							>
								Become an affiliate
							</a>
							<a
								href=""
								className="text-black rounded-full hover:bg-red-700 hover:text-white bg-white col-span-1 btn-footer px-3 relative py-2 duration-300 ease-in-out"
							>
								List your restaurants
							</a>
						</div>
					</div>
				</div>
			</div>
			<div></div>
			<div></div>
		</footer>
	);
};

export default Footer;
