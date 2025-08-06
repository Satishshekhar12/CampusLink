import React, { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (message.trim()) {
			onSendMessage(message);
			setMessage("");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center space-x-3 p-4 bg-white border-t border-[#3F4F6F]"
		>
			<div className="flex-1 relative">
				<input
					type="text"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Write a message..."
					className="w-full px-4 py-3 bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-[#192F59] transition-all duration-200 text-gray-900 placeholder-gray-500"
				/>
			</div>

			<button
				type="submit"
				className="w-12 h-12 bg-[#192F59] text-white rounded-full hover:bg-[#3F4F6F] focus:outline-none focus:ring-2 focus:ring-[#192F59] transition-colors duration-200 flex items-center justify-center"
			>
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
					/>
				</svg>
			</button>
		</form>
	);
};

export default MessageInput;
