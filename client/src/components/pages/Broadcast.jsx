import React from "react";

function Broadcast() {
	return (
		<section className="relative hidden lg:flex flex-col items-start justify-start bg-[#fff] h-[100vh] w-[100%] md:w-[600px]">
			<header className="flex flex-row items-center justify-between w-[100%] lg:border-b border-b-1 p-4 border-gray-200 p-4 sticky">
				<h2 className="text-xl font-bold text-[#2a3d39]">Broadcast Messages</h2>
			</header>

			<div className="flex-1 w-full overflow-y-auto p-6 flex flex-col gap-4">
				<div className="text-center mb-4">
					<p className="text-gray-600 text-sm">
						Send messages to multiple users at once
					</p>
				</div>

				<div className="w-full bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
					<label className="block text-sm font-semibold text-[#2a3d39] mb-2">
						Select Recipients
					</label>
					<select className="w-full border border-gray-300 rounded-lg p-2 mb-4 outline-none focus:border-[#192F59]">
						<option>All Users</option>
						<option>Active Users</option>
						<option>Friends</option>
						<option>Custom Group</option>
					</select>

					<label className="block text-sm font-semibold text-[#2a3d39] mb-2">
						Message
					</label>
					<textarea
						className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none focus:border-[#192F59]"
						placeholder="Type your broadcast message..."
						rows={6}
					/>

					<button className="w-full bg-[#192F59] text-white py-2 rounded-lg hover:bg-[#2a3d6f] transition">
						Send Broadcast
					</button>
				</div>

				<div className="mt-4">
					<h3 className="text-sm font-semibold text-[#2a3d39] mb-2">
						Recent Broadcasts
					</h3>
					<div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-600">
						No recent broadcasts
					</div>
				</div>
			</div>
		</section>
	);
}

export default Broadcast;
