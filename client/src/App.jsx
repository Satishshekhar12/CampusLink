import HeaderBar from "./components/layout/HeaderBar";
import UsersPane from "./components/sidebar/UsersPane";
import ChatPane from "./components/chat/ChatPane";

function App() {
	return (
		<div className="h-screen w-full flex flex-col bg-[#F8F9FA]">
			<HeaderBar />
			<div className="flex flex-1 w-full">
				<aside className="w-1/3 min-w-[280px] bg-white border-r border-[#3F4F6F] p-4">
					<UsersPane />
				</aside>
				<main className="flex-1 bg-white p-4">
					<ChatPane />
				</main>
			</div>
		</div>
	);
}

export default App;
