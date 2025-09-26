import React, { useEffect, useState } from "react";
import user from "../assets/abc.png";
import { RiMore2Fill, RiShieldStarFill, RiVipFill } from "react-icons/ri";
import { MdWorkspacePremium } from "react-icons/md";
import SearchModal from "./SearchModal";
import chatData from "../data/chats";
function Chatlist() {
	const [chats, setChats] = useState([]);

	useEffect(() => {
		setChats(chatData);

		return () => {
			setChats([]);
		};
	}, []);

	return (
		<>
			<section className="relative hidden lg:flex flex-col items-start justify-start bg-[#fff] h-[100vh] w-[100%] md:w-[600px]">
				<header className="flex flex-row items-center justify-between w-[100%] lg:border-b border-b-1 border-gray-200 p-4 sticky">
					<main className="flex flex-row ">
						<img src={user} alt="" className="h-12 w-12 rounded-full" />
						<span className="text-white ml-3">
							<div className="flex items-center gap-1">
								<h3 className="p-0 font-semibold text-[#2a3d39] md:text-[17px] ">
									{"satish kumar"}
								</h3>
								<MdWorkspacePremium
									className="inline-block"
									color="#192F59"
									size={20}
									title="Premium"
								/>
							</div>
							<p className="p-0 font-light text-[#2a3d39] text-[15px]">
								{"@244ca046"}
							</p>
						</span>
					</main>
					<button className="bg-[#647deb7a] w-[35px] h-[35px] p-1 flex items-center justify-center rounded-lg">
						<RiMore2Fill color="#2a3d39" className="w-[20px] h-[20px]" />
					</button>
				</header>

				<div className="w-[100%] mt-[10px] px-4">
					<header className="flex items-center justify-between">
						<h3 className=" font-semibold text-[14px] md:text-[17px] ">
							Message ({chatData?.length || 0})
						</h3>
						<SearchModal />
					</header>
				</div>

				<main className="flex flex-col items-start mt-[1.5rem] pb-3 w-[100%] flex-1 overflow-y-auto min-h-0">
					{chats.map((it) => (
						<button
							key={it.id}
							className="flex items-start justify-between w-[100%]  border-b border-[#9090902c] px-5  pb-3 pt-3"
						>
							<div className="flex flex-row gap-3 items-start">
								<img
									src={it.users[1].image}
									className="h-11 w-11 rounded-full"
									alt=""
								/>
								<span>
									<h2 className="p-0 font-semibold text-[#2A3d39] text-left md:text-[17px]">
										{it.users[1].fullName}
									</h2>
									<p className="p-0 font-light text-left text-[#2A3d39] text-[14px]">
										{it.lastMessage.length > 30
											? it.lastMessage.substring(0, 30) + "..."
											: it.lastMessage}
									</p>
								</span>
							</div>
							<p className="p-0 font-regular text-left text-gray-400 text-[11px]">
								23 sept 2025
							</p>
						</button>
					))}
				</main>
			</section>
		</>
	);
}

export default Chatlist;
