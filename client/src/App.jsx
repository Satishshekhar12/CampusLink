import { useState } from "react";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import NavLinks from "./components/pages/navlinks";
import Chatlist from "./components/pages/Chatlist";
import Chatbox from "./components/pages/Chatbox";
import Broadcast from "./components/pages/Broadcast";
import Notifications from "./components/pages/Notifications";
import Files from "./components/pages/Files";

function App() {
	const [selectedChat, setSelectedChat] = useState(null);
	const [activeView, setActiveView] = useState("chat"); // chat, broadcast, notifications, files

	const renderLeftPanel = () => {
		switch (activeView) {
			case "chat":
				return (
					<Chatlist
						onSelectChat={setSelectedChat}
						selectedChatId={selectedChat?.id}
					/>
				);
			case "broadcast":
				return <Broadcast />;
			case "notifications":
				return <Notifications />;
			case "files":
				return <Files />;
			default:
				return (
					<Chatlist
						onSelectChat={setSelectedChat}
						selectedChatId={selectedChat?.id}
					/>
				);
		}
	};

	return (
		<div className="h-screen w-full flex flex-col bg-[#F8F9FA] background-image">
			{/* <HeaderBar /> */}
			<div className="flex flex-1 min-h-0 lg:flex-row flex-col w-full">
				<NavLinks activeView={activeView} setActiveView={setActiveView} />
				{renderLeftPanel()}
				<Chatbox selectedChat={selectedChat} />
			</div>
			{/* <div className="flex flex-1 w-full"> */}
			{/* <aside className="w-1/3 min-w-[280px] bg-white border-r border-[#3F4F6F] p-4">
					<UsersPane />
				</aside>
				<main className="flex-1 bg-white p-4">
					<ChatPane />
				</main> */}
			{/* </div> */}

			{/*
			<div className="hidden md:block">
				<Login />
				<Register />
			</div>
			*/}
		</div>
	);
}

export default App;
