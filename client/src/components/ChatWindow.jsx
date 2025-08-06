import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import OnlineStatus from "./OnlineStatus";

const ChatWindow = ({ activeContact, messages, currentUser }) => {
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	if (!activeContact) {
		return (
			<div className="flex-1 flex items-center justify-center bg-gray-50">
				<div className="text-center max-w-md px-8">
					<div className="w-32 h-32 mx-auto mb-8 bg-blue-100 rounded-full flex items-center justify-center">
						<svg
							className="w-16 h-16 text-blue-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							/>
						</svg>
					</div>
					<h3 className="text-2xl font-semibold text-gray-900 mb-4">
						Welcome to CampusLink
					</h3>
					<p className="text-gray-600 leading-relaxed">
						Select a chat from the sidebar to start messaging with your campus
						community. Connect with classmates, join study groups, and stay
						updated with campus events.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex-1 flex flex-col bg-white">
			<div className="flex items-center p-4 border-b border-gray-200 bg-[#192F59]">
				<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#192F59] font-semibold mr-3">
					{activeContact.name.charAt(0).toUpperCase()}
				</div>
				<div className="flex-1">
					<h3 className="font-semibold text-white">{activeContact.name}</h3>
					<OnlineStatus isOnline={true} />
				</div>
				<button className="p-2 text-white hover:text-gray-300 hover:bg-[#3F4F6F] rounded-full transition-colors">
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
							d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
						/>
					</svg>
				</button>
			</div>

			<div className="flex-1 overflow-y-auto p-4 bg-[#F8F9FA]">
				{messages.map((message) => (
					<ChatMessage
						key={message.id}
						message={message}
						isOwnMessage={message.senderId === currentUser.id}
					/>
				))}
				<div ref={messagesEndRef} />
			</div>
		</div>
	);
};

export default ChatWindow;
