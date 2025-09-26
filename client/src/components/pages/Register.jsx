import React from "react";
// import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";
const Register = () => {
	const [userData, setUserData] = useState({
		fullname: "",
		rollNumber: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setUserData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleAuth = async () => {
		try {
			alert(`registered ${userData.fullname}`);
		} catch {
			alert("error");
		}
	};

	console.log(userData);

	return (
		<>
			<section className="flex flex-col justify-center items-center h-screen">
				<div className="bg-white shadow-lg p-5 rounded-b-xl rounded-t-md elevation-2 h-[27rem] w-[22rem] flex flex-col justify-center items-center">
					<div className="mb-10">
						<h1 className="text-center text-xl font-semibold">Sign Up</h1>
						<p className="text-center text-sm text-gray-400">
							Welcome create a account to continue{" "}
						</p>
					</div>
					<div className="w-full">
						<input
							type="text"
							name="fullname"
							onChange={handleChange}
							placeholder="enter your full name"
							className="border border-blue-500 w-full p-2 rounded-b-xl rounded-t-md bg-blue-50 mb-3 outline-none font-medium focus-within:bg-blue-100"
						/>
						<input
							type="text"
							name="rollNumber"
							onChange={handleChange}
							placeholder="enter your roll number"
							className="border border-blue-500 w-full p-2 rounded-b-xl rounded-t-md bg-blue-50 mb-3 outline-none font-medium focus-within:bg-blue-100"
						/>
						<input
							type="password"
							required
							name="password"
							onChange={handleChange}
							placeholder="enter your password"
							className="border border-blue-500 w-full p-2 rounded-b-xl rounded-t-md bg-blue-50 mb-3 outline-none font-medium focus-within:bg-blue-100"
						/>
						<input
							type="email"
							required
							onChange={handleChange}
							placeholder="enter your email"
							name="email"
							className="border border-blue-500 w-full p-2 rounded-b-xl rounded-t-md bg-blue-50 mb-3 outline-none font-medium focus-within:bg-blue-100"
						/>
					</div>
					<div className="mt-3.5 w-full">
						<button
							onClick={handleAuth}
							className="text-white font-semibold p-2 bg-[#01aa85] rounded-md w-full"
						>
							Sign Up
						</button>
					</div>
					<p className="text-center text-sm text-gray-400 mt-2">
						already have an account?{" "}
						<a href="/login" className="text-blue-500">
							Login
						</a>
					</p>
				</div>
			</section>
		</>
	);
};

export default Register;
