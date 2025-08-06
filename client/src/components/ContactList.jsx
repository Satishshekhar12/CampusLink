import React from "react";

const ContactItem = ({ contact, isActive, onClick }) => {
	return (
		<div
			onClick={() => onClick(contact)}
			className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-200 border-l-4 ${
				isActive
					? "bg-[#3F4F6F] border-l-[#192F59] text-white"
					: "bg-white border-l-transparent hover:bg-gray-50"
			}`}
		>
			{/* Avatar */}
			<div className="relative flex-shrink-0 w-12 h-12 mr-3">
				<div className="w-12 h-12 rounded-full bg-[#192F59] flex items-center justify-center text-white font-semibold text-lg">
					{contact.name.charAt(0).toUpperCase()}
				</div>
				{/* Online indicator */}
				<div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
			</div>

			<div className="flex-1 min-w-0">
				<div className="flex items-center justify-between mb-1">
					<h3 className="font-semibold text-gray-900 truncate">
						{contact.name}
					</h3>
					<span className="text-xs text-gray-500 ml-2">12:30 PM</span>
				</div>
				<div className="flex items-center justify-between">
					<p className="text-sm text-gray-600 truncate max-w-[200px]">
						{contact.lastMessage}
					</p>
					{contact.unreadCount > 0 && (
						<div className="flex-shrink-0 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ml-2">
							{contact.unreadCount}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const ContactList = ({ contacts, activeContact, onContactSelect }) => {
	return (
		<div className="flex flex-col h-full bg-white border-r border-gray-200">
			{/* Header */}
			<div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
				<h1 className="text-xl font-semibold text-gray-900">Chats</h1>
				<button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
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
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
				</button>
			</div>

			{/* Contact list */}
			<div className="flex-1 overflow-y-auto">
				{contacts.map((contact) => (
					<ContactItem
						key={contact.id}
						contact={contact}
						isActive={activeContact?.id === contact.id}
						onClick={onContactSelect}
					/>
				))}

				{/* Empty state */}
				{contacts.length === 0 && (
					<div className="flex flex-col items-center justify-center h-full text-center p-8">
						<div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
							<svg
								className="w-10 h-10 text-gray-400"
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
						<h3 className="text-lg font-medium text-gray-900 mb-2">
							No chats yet
						</h3>
						<p className="text-gray-500">Start a conversation to see it here</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ContactList;
