import React from "react";

const HeaderBar = () => {
	return (
		<header className="w-full bg-[#192F59] text-white px-4 py-3 flex items-center justify-between">
			<h1 className="text-lg font-semibold">CampusLink</h1>
			<button
				type="button"
				className="px-3 py-1.5 rounded-md bg-white text-[#192F59] text-sm font-medium hover:bg-gray-100"
			>
				Login
			</button>
		</header>
	);
};

export default HeaderBar;
