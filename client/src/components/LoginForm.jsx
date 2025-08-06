import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (username.trim() && password.trim()) {
			onLogin({ username, password });
		}
	};

	return (
		<div className="min-h-screen w-full bg-[#192F59] flex items-center justify-center">
			<div className="max-w-md w-full mx-4">
				<div className="bg-white rounded-2xl shadow-xl p-8">
					<div className="text-center mb-8">
						<div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#192F59] flex items-center justify-center">
							<span className="text-white font-bold text-xl">CL</span>
						</div>
						<h1 className="text-3xl font-bold text-[#192F59] mb-2">
							CampusLink
						</h1>
						<p className="text-[#3F4F6] text-sm">
							Connect with your campus community
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-semibold text-[#192F59] mb-2"
							>
								Username
							</label>
							<input
								type="text"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="w-full px-4 py-3 bg-white border-2 border-[#3F4F6] rounded-xl focus:outline-none focus:border-[#192F59] transition-colors placeholder-[#3F4F6] text-[#181818]"
								placeholder="Enter your username"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-semibold text-[#192F59] mb-2"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full px-4 py-3 bg-white border-2 border-[#3F4F6] rounded-xl focus:outline-none focus:border-[#192F59] transition-colors placeholder-[#3F4F6] text-[#181818]"
								placeholder="Enter your password"
								required
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-[#192F59] text-white py-3 px-6 rounded-xl hover:bg-[#3F4F6] focus:outline-none focus:ring-2 focus:ring-[#192F59] transition-colors font-semibold"
						>
							Sign In
						</button>
					</form>

					<div className="text-center mt-6">
						<a
							href="#"
							className="text-sm text-[#192F59] hover:text-[#3F4F6] transition-colors font-medium"
						>
							Forgot your password?
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
