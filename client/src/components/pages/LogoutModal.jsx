import React from "react";
import { RiCloseLine, RiLogoutBoxLine } from "react-icons/ri";

function LogoutModal({ isOpen, onClose, onConfirm }) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
			<div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 animate-fadeIn">
				{/* Close button */}
				<div className="flex justify-end mb-2">
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-600 transition"
					>
						<RiCloseLine size={24} />
					</button>
				</div>

				{/* Icon */}
				<div className="flex justify-center mb-4">
					<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
						<RiLogoutBoxLine className="text-red-600" size={32} />
					</div>
				</div>

				{/* Content */}
				<div className="text-center mb-6">
					<h2 className="text-2xl font-bold text-[#2a3d39] mb-2">
						Logout Confirmation
					</h2>
					<p className="text-gray-600 text-sm">
						Are you sure you want to logout from CampusLink? You'll need to
						login again to access your account.
					</p>
				</div>

				{/* Action buttons */}
				<div className="flex gap-3">
					<button
						onClick={onClose}
						className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
					>
						Cancel
					</button>
					<button
						onClick={onConfirm}
						className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}

export default LogoutModal;
