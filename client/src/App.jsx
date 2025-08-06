import { useState } from "react";
import ContactList from "./components/ContactList";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);
	const [activeContact, setActiveContact] = useState(null);
	const [messages, setMessages] = useState([]);
	const [filteredContacts, setFilteredContacts] = useState([]);

	// Mock data for contacts
	const [contacts] = useState([
		{
			id: 1,
			name: "John Doe",
			lastMessage: "Hey, how are you?",
			unreadCount: 2,
		},
		{
			id: 2,
			name: "Jane Smith",
			lastMessage: "See you tomorrow!",
			unreadCount: 0,
		},
		{
			id: 3,
			name: "Mike Johnson",
			lastMessage: "Thanks for the help",
			unreadCount: 1,
		},
		{
			id: 4,
			name: "Sarah Wilson",
			lastMessage: "Let's meet at the library",
			unreadCount: 0,
		},
	]);

	// Mock messages data
	const mockMessages = {
		1: [
			{
				id: 1,
				text: "Hey there! How are you doing?",
				sender: "John Doe",
				senderId: 1,
				timestamp: new Date(Date.now() - 3600000),
			},
			{
				id: 2,
				text: "I'm doing great! How about you?",
				sender: "You",
				senderId: "current",
				timestamp: new Date(Date.now() - 3000000),
			},
			{
				id: 3,
				text: "Just finished my assignment. Want to grab lunch?",
				sender: "John Doe",
				senderId: 1,
				timestamp: new Date(Date.now() - 1800000),
			},
		],
		2: [
			{
				id: 4,
				text: "Don't forget about our meeting tomorrow",
				sender: "Jane Smith",
				senderId: 2,
				timestamp: new Date(Date.now() - 7200000),
			},
			{
				id: 5,
				text: "Thanks for reminding me! See you at 2 PM",
				sender: "You",
				senderId: "current",
				timestamp: new Date(Date.now() - 6000000),
			},
		],
	};

	const handleLogin = (credentials) => {
		// Mock login logic
		setCurrentUser({
			id: "current",
			username: credentials.username,
		});
		setIsLoggedIn(true);
		setFilteredContacts(contacts);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
		setCurrentUser(null);
		setActiveContact(null);
		setMessages([]);
		setFilteredContacts([]);
	};

	const handleSearch = (searchTerm) => {
		if (!searchTerm.trim()) {
			setFilteredContacts(contacts);
		} else {
			const filtered = contacts.filter((contact) =>
				contact.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredContacts(filtered);
		}
	};

	const handleContactSelect = (contact) => {
		setActiveContact(contact);
		setMessages(mockMessages[contact.id] || []);
	};

	const handleSendMessage = (messageText) => {
		if (!activeContact) return;

		const newMessage = {
			id: Date.now(),
			text: messageText,
			sender: "You",
			senderId: "current",
			timestamp: new Date(),
		};

		setMessages((prevMessages) => [...prevMessages, newMessage]);
	};

	if (!isLoggedIn) {
		return <LoginForm onLogin={handleLogin} />;
	}

	return (
		<div className="h-screen w-full flex flex-col bg-[#F8F9FA]">
			<div className="relative z-10 flex flex-col h-full w-full">
				<Header currentUser={currentUser} onLogout={handleLogout} />
				<div className="flex flex-1 w-full">
					<div className="w-1/3 flex flex-col bg-white border-r border-[#3F4F6F]">
						<SearchBar onSearch={handleSearch} />
						<ContactList
							contacts={filteredContacts}
							activeContact={activeContact}
							onContactSelect={handleContactSelect}
						/>
					</div>
					<div className="flex-1 flex flex-col bg-white">
						<ChatWindow
							activeContact={activeContact}
							messages={messages}
							currentUser={currentUser}
						/>
						{activeContact && (
							<MessageInput onSendMessage={handleSendMessage} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
