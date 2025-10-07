import React from "react";
import { RiBellLine, RiUserAddLine, RiCheckLine } from "react-icons/ri";

function Notifications() {
	const mockNotifications = [
		{
			id: 1,
			type: "message",
			title: "New message from Rahul Sharma",
			message: "Hey! How are you doing?",
			time: "2 min ago",
			read: false,
		},
		{
			id: 2,
			type: "friend_request",
			title: "Friend request",
			message: "Priya Patel wants to connect with you",
			time: "1 hour ago",
			read: false,
		},
		{
			id: 3,
			type: "system",
			title: "System Update",
			message: "New features have been added to CampusLink",
			time: "3 hours ago",
			read: true,
		},
		{
			id: 4,
			type: "message",
			title: "New message from Anjali Gupta",
			message: "Can we meet tomorrow?",
			time: "5 hours ago",
			read: true,
		},
		{
			id: 5,
			type: "friend_request",
			title: "Friend request",
			message: "Vikram Nair wants to connect",
			time: "1 day ago",
			read: true,
		},
	];

	return (
		<section className="relative hidden lg:flex flex-col items-start justify-start bg-[#fff] h-[100vh] w-[100%] md:w-[600px]">
			<header className="flex flex-row items-center justify-between w-[100%] lg:border-b border-b-1 border-gray-200 p-4 sticky top-0 bg-white z-10">
				<div>
					<h2 className="text-xl font-bold text-[#2a3d39]">Notifications</h2>
					<p className="text-sm text-gray-500">
						{mockNotifications.filter((n) => !n.read).length} unread
					</p>
				</div>
			</header>

			<div className="flex-1 w-full overflow-y-auto">
				{mockNotifications.map((notification) => (
					<div
						key={notification.id}
						className={`flex items-start gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer ${
							!notification.read ? "bg-blue-50/50" : ""
						}`}
					>
						<div
							className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
								notification.type === "message"
									? "bg-blue-100"
									: notification.type === "friend_request"
									? "bg-green-100"
									: "bg-gray-100"
							}`}
						>
							{notification.type === "message" ? (
								<RiBellLine className="text-blue-600" size={20} />
							) : notification.type === "friend_request" ? (
								<RiUserAddLine className="text-green-600" size={20} />
							) : (
								<RiCheckLine className="text-gray-600" size={20} />
							)}
						</div>

						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2">
								<h3
									className={`text-sm text-[#2a3d39] ${
										!notification.read ? "font-bold" : "font-semibold"
									}`}
								>
									{notification.title}
								</h3>
								{!notification.read && (
									<span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
								)}
							</div>
							<p className="text-sm text-gray-600 mt-1 line-clamp-2">
								{notification.message}
							</p>
							<p className="text-xs text-gray-400 mt-2">{notification.time}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Notifications;
