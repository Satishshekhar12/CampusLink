import React, { useState } from "react";

const Header = ({ currentUser, onLogout }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<header className="bg-[#192F59] px-6 py-4 w-full">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<h1 className="text-xl font-semibold text-white">CampusLink</h1>
				</div>

				<div className="relative">
					<button
						onClick={() => setShowDropdown(!showDropdown)}
						className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-[#3F4F6F] transition-colors duration-200"
					>
						<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
							<span className="text-[#192F59] text-sm font-semibold">
								{currentUser?.username?.charAt(0).toUpperCase()}
							</span>
						</div>
						<span className="text-white font-medium">
							{currentUser?.username}
						</span>
						<svg
							className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					{showDropdown && (
						<div className="absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-white/40 z-20 overflow-hidden">
							<div className="py-2">
								<button
									onClick={() => {
										setShowDropdown(false);
										// Add profile logic here
									}}
									className="w-full px-4 py-3 text-sm text-gray-700 hover:bg-white/50 transition-colors duration-200 flex items-center space-x-3"
								>
									<svg
										className="w-4 h-4 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
									<span>Profile</span>
								</button>
								<button
									onClick={() => {
										setShowDropdown(false);
										// Add settings logic here
									}}
									className="w-full px-4 py-3 text-sm text-gray-700 hover:bg-white/50 transition-colors duration-200 flex items-center space-x-3"
								>
									<svg
										className="w-4 h-4 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<span>Settings</span>
								</button>
								<hr className="my-2 border-white/30" />
								<button
									onClick={() => {
										setShowDropdown(false);
										onLogout();
									}}
									className="w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50/50 transition-colors duration-200 flex items-center space-x-3"
								>
									<svg
										className="w-4 h-4 text-red-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										/>
									</svg>
									<span>Logout</span>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
