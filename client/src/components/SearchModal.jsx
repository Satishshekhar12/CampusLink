import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchModal = () => {
	return (
		<div>
			<button className="bg-[#647deb7a] w-[35px] h-[35px] p-[2px] flex items-center justify-center rounded-lg">
				<RiSearchLine color="#2a3d39" className="w-[16px] h-[16px]" />
			</button>
		</div>
	);
};

export default SearchModal;
