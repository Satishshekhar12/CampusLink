import React from "react";
import { useState } from "react";
import logo from "../../assets/whitelogo.png";
import {
	RiArrowDownBoxFill,
	RiArrowDownSFill,
	RiBardLine,
	RiChatAiFill,
	RiChatAiLine,
	RiFile4Fill,
	RiFolderUserLine,
	RiNotificationLine,
	RiShutDownLine,
} from "react-icons/ri";
import LogoutModal from "./LogoutModal";

const NavLinks = ({ activeView, setActiveView }) => {
	const [showLogoutModal, setShowLogoutModal] = useState(false);

	const handleLogout = () => {
		setShowLogoutModal(true);
	};

	const confirmLogout = () => {
		// Add logout logic here
		console.log("Logging out...");
		setShowLogoutModal(false);
		// Redirect to login or clear session
		alert("Logged out successfully!");
	};

	return (
		<>
			<LogoutModal
				isOpen={showLogoutModal}
				onClose={() => setShowLogoutModal(false)}
				onConfirm={confirmLogout}
			/>
			<section className="sticky lg:static top-0 flex items-center h-[7vh] w-[100%] lg:items-start lg:justify-start lg:h-[100vh]  lg:w-[130px] py-8 lg:py-0 bg-[#192F59] ">
				<main className="flex items-center justify-between lg:flex-col lg:gap-10 lg:px-0 w-[100%]">
					<div className="flex items-center justify-center lg:border-b border-b-1 lg:w-[100%] px-4 pt-3 pb-2.5 border-gray-200">
						<span>
							<img
								src={logo}
								alt="logo"
								className="h-[58px] w-[67px] object-contain bg-transparent p-1 rounded-lg to-white"
							/>
						</span>
					</div>
					<ul className="flex flex-row lg:flex-col items-center gap-7 md:gap-10 px-2 md:px-0">
						<li>
							<button
								onClick={() => setActiveView("chat")}
								className={`lg:text-2xl text-2xl text-white hover:text-gray-300 hover:cursor-pointer transition ${
									activeView === "chat" ? "text-cyan-400" : ""
								}`}
							>
								<RiChatAiLine />
							</button>
						</li>
						<li>
							<button
								onClick={() => setActiveView("broadcast")}
								className={`text-2xl text-white hover:text-gray-300 hover:cursor-pointer transition ${
									activeView === "broadcast" ? "text-cyan-400" : ""
								}`}
							>
								<RiFolderUserLine />
							</button>
							{/* for broadcasting message */}
						</li>
						<li>
							<button
								onClick={() => setActiveView("notifications")}
								className={`text-2xl text-white hover:text-gray-300 hover:cursor-pointer transition ${
									activeView === "notifications" ? "text-cyan-400" : ""
								}`}
							>
								<RiNotificationLine />
								{/* for notification */}
							</button>
						</li>
						<li>
							<button
								onClick={() => setActiveView("files")}
								className={`text-2xl text-white hover:text-gray-300 hover:cursor-pointer transition ${
									activeView === "files" ? "text-cyan-400" : ""
								}`}
							>
								<RiFile4Fill />
							</button>
							{/* to see all file dummy */}
						</li>
						<li>
							<button className="text-2xl text-white hover:text-gray-300 hover:cursor-pointer">
								<RiBardLine />
							</button>
						</li>
						<button
							onClick={handleLogout}
							className="text-2xl text-white hover:text-red-400 hover:cursor-pointer transition"
						>
							<RiShutDownLine />
						</button>
					</ul>
					<button className="  lg:hidden text-2xl text-white hover:text-gray-300 hover:cursor-pointer">
						<RiArrowDownSFill />
					</button>
				</main>
			</section>
		</>
	);
};

export default NavLinks;
