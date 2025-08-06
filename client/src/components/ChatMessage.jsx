import React from "react";

const ChatMessage = ({ message, isOwnMessage }) => {
	return (
		<div
			className={`flex ${isOwnMessage ? "justify-end" : "justify-start"} mb-4`}
		>
			<div
				className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
					isOwnMessage
						? "bg-[#192F59] text-white"
						: "bg-white text-gray-800 border border-gray-200"
				}`}
			>
				{!isOwnMessage && (
					<div className="text-sm font-medium mb-1 text-[#192F59]">
						{message.sender}
					</div>
				)}
				<div className="text-sm leading-relaxed">{message.text}</div>
				<div
					className={`text-xs mt-2 ${
						isOwnMessage ? "text-blue-100" : "text-[#3F4F6F]"
					}`}
				>
					{new Date(message.timestamp).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</div>
			</div>
		</div>
	);
};

export default ChatMessage;
