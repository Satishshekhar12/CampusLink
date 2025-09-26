import HeaderBar from "./components/layout/HeaderBar";
import UsersPane from "./components/sidebar/UsersPane";
import ChatPane from "./components/chat/ChatPane";
import Register from "./components/register";
import Login from "./components/Login";
import NavLinks from "./components/navlinks";
import Chatlist from "./components/Chatlist";
import Chatbox from "./components/Chatbox";

function App() {
	return (
		<div className="h-screen w-full flex flex-col bg-[#F8F9FA] background-image">
			{/* <HeaderBar /> */}
			<div className="flex flex-1 min-h-0 lg:flex-row flex-col w-full">
				<NavLinks />
				<Chatlist />
				<Chatbox />
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
