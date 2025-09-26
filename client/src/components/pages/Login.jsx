import React from "react";
import { useState } from "react";

const Login = () => {
	const [userData, setUserData] = useState({
		rollNumber: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleAuth = async (e) => {
		e.preventDefault();
		try {
			alert(`Login successfull:  ${userData.rollNumber}`);
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
						<h1 className="text-center text-xl font-semibold">LogIn</h1>
						<p className="text-center text-sm text-gray-400">
							Welcome back! Please log in to continue{" "}
						</p>
					</div>
					<form className="w-full" onSubmit={handleAuth}>
						<input
							type="text"
							onChange={handleChange}
							name="rollNumber"
							placeholder="enter your roll number"
							className="border border-blue-500 w-full p-2 rounded-b-xl rounded-t-md bg-blue-50 mb-3 outline-none font-medium focus-within:bg-blue-100"
						/>
						<input
							type="password"
							name="password"
							required
							onChange={handleChange}
							placeholder="enter your password"
							className="border border-blue-500 w-full p-2 rounded-b-xl rounded-t-md bg-blue-50 mb-3 outline-none font-medium focus-within:bg-blue-100"
						/>
						<div className="mt-3.5 w-full">
							<button
								type="submit"
								onClick={handleAuth}
								className="text-white font-semibold p-2 bg-[#01aa85] rounded-md w-full"
							>
								Login
							</button>
						</div>
					</form>
					<p className="text-center text-sm text-gray-400 mt-2">
						Don't have an account?{" "}
						<a href="/register" className="text-blue-500">
							Register
						</a>
					</p>
				</div>
			</section>
		</>
	);
};

export default Login;
