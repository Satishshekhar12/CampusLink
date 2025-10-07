import React from "react";
import {
	RiMore2Fill,
	RiEmotionLine,
	RiSendPlaneFill,
	RiAttachment2,
	RiCheckDoubleLine,
} from "react-icons/ri";

const mockMessages = [
	{
		id: 1,
		sender: "them",
		text: "Hey! How's it going?",
		timestamp: "10:30 AM",
	},
	{
		id: 2,
		sender: "me",
		text: "Hi Sanu! I'm doing great, thanks for asking. Just working on a new project. How about you?",
		timestamp: "10:31 AM",
	},
	{
		id: 3,
		sender: "them",
		text: "That sounds exciting! I'm good too, just chilling.",
		timestamp: "10:32 AM",
	},
	{
		id: 4,
		sender: "them",
		text: "What kind of project is it?",
		timestamp: "10:32 AM",
	},
	{
		id: 5,
		sender: "me",
		text: "It's a chat application built with React and Tailwind CSS, actually! 😉",
		timestamp: "10:33 AM",
	},
	{
		id: 6,
		sender: "them",
		text: "Wow, that's so cool! Can't wait to see it.",
		timestamp: "10:34 AM",
	},
];

function Chatbox({ selectedChat }) {
	if (!selectedChat) {
		return (
			<section className="h-full w-full flex flex-col bg-white items-center justify-center">
				<div className="text-center text-gray-400">
					<p className="text-xl mb-2">Select a chat to start messaging</p>
					<p className="text-sm">Choose a conversation from the list</p>
				</div>
			</section>
		);
	}

	const chatUser = selectedChat.users[1];

	return (
		<section className="h-full w-full flex flex-col bg-white">
			<div className="flex flex-col h-full w-full">
				{/* Header */}
				<header className="flex items-center justify-between w-full border-b border-l border-l-gray-100 border-gray-200 p-4 sticky top-0 bg-white z-10">
					<div className="flex items-center">
						<img
							src={chatUser.image}
							alt="user"
							className="h-12 w-12 rounded-full"
						/>
						<span className="ml-3">
							<h3 className="font-semibold text-[#2a3d39] md:text-[17px]">
								{chatUser.fullName}
							</h3>
							<p className="font-light text-[#2a3d39] text-[15px]">online</p>
						</span>
					</div>
					<button
						className="bg-[#647deb7a] w-[35px] h-[35px] p-1 flex items-center justify-center rounded-lg"
						aria-label="More options"
					>
						<RiMore2Fill color="#2a3d39" className="w-[20px] h-[20px]" />
					</button>
				</header>

				{/* Messages area */}
				<div className="flex-1 w-full overflow-y-auto p-4 bg-[#1C1C40] flex flex-col gap-4">
					{/* We map over the mockMessages array to render each message */}
					{mockMessages.map((message) =>
						// If the sender is 'me', render the sent message component
						message.sender === "me" ? (
							<div key={message.id} className="flex justify-end">
								<div className="relative max-w-lg bg-[#2a303b] font-mono tar p-3 pb-1  shadow-lg shadow-[#1C1C40]">
									{/* --- Corner Bracket Elements --- */}
									<div className="absolute top-0 left-0 h-3 w-3 border-l-2 border-t-2 border-cyan-400"></div>
									<div className="absolute top-0 right-0 h-3 w-3 border-r-2 border-t-2 border-cyan-400"></div>
									<div className="absolute bottom-0 left-0 h-3 w-3 border-l-2 border-b-2 border-cyan-400"></div>
									<div className="absolute bottom-0 right-0 h-3 w-3 border-r-2 border-b-2 border-cyan-400"></div>

									{/* Message Content */}
									<p className="text-sm text-[#fff] tracking-wider [text-shadow:0_0_5px_rgba(100,220,255,0.4)]">
										{message.text}
									</p>

									{/* Timestamp and Status */}
									<div className="flex items-center justify-end gap-1 mt-1">
										<span className="text-xs text-cyan-500">
											{message.timestamp}
										</span>
										<RiCheckDoubleLine className="text-lg text-cyan-400" />
									</div>
								</div>
							</div>
						) : (
							// Otherwise, render the received message component
							<div key={message.id} className="flex justify-start">
								<div className="relative max-w-lg bg-gradient-to-br from-[#2B2B5D] to-[#3F3E69] font-mono uppercase p-4 shadow-lg shadow-[#192F59]/20">
									{/* --- Corner Bracket Elements (in green) --- */}
									<div className="absolute top-0 left-0 h-3 w-3 border-l-2 border-t-2 border-[#fff]"></div>
									<div className="absolute top-0 right-0 h-3 w-3 border-r-2 border-t-2 border-[#fff]"></div>
									<div className="absolute bottom-0 left-0 h-3 w-3 border-l-2 border-b-2 border-[#fff]"></div>
									<div className="absolute bottom-0 right-0 h-3 w-3 border-r-2 border-b-2 border-[#fff]"></div>

									{/* Message Content */}
									<p className="text-sm text-[#fff] tracking-wider [text-shadow:0_0_5px_rgba(74,222,128,0.4)]">
										{message.text}
									</p>

									{/* Timestamp */}
									<div className="text-left text-xs text-[#fff] mt-2">
										{message.timestamp}
									</div>
								</div>
							</div>
						)
					)}
				</div>

				{/* Composer */}
				<div className="flex items-center w-full p-4 border-t border-gray-200 gap-3 bg-white">
					<div className="flex items-center gap-2 w-full border border-gray-300 rounded-full px-4 py-2 bg-white">
						<button
							className="text-2xl text-[#192F59] hover:text-gray-500 -rotate-45"
							aria-label="Attach file"
						>
							<RiAttachment2 />
						</button>
						<button
							className="text-2xl text-[#192F59] hover:text-gray-500"
							aria-label="Emoji"
						>
							<RiEmotionLine />
						</button>
						<input
							className="flex-1 border-0 outline-none"
							placeholder="Type a message..."
						/>
					</div>
					<button
						className="text-2xl text-[#192F59] hover:text-gray-500"
						aria-label="Send"
					>
						<RiSendPlaneFill />
					</button>
				</div>
			</div>
		</section>
	);
}

export default Chatbox;
