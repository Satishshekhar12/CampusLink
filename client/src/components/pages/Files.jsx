import React from "react";
import { RiFileTextLine, RiDownloadLine, RiEyeLine } from "react-icons/ri";

function Files() {
	const mockFiles = [
		{
			id: 1,
			name: "Project_Report.pdf",
			size: "2.4 MB",
			sender: "Rahul Sharma",
			date: "23 Sept 2025",
			type: "pdf",
		},
		{
			id: 2,
			name: "Assignment_Notes.docx",
			size: "856 KB",
			sender: "Priya Patel",
			date: "22 Sept 2025",
			type: "doc",
		},
		{
			id: 3,
			name: "Presentation.pptx",
			size: "5.2 MB",
			sender: "Vikram Nair",
			date: "21 Sept 2025",
			type: "ppt",
		},
		{
			id: 4,
			name: "Campus_Photo.jpg",
			size: "1.8 MB",
			sender: "Anjali Gupta",
			date: "20 Sept 2025",
			type: "image",
		},
		{
			id: 5,
			name: "Code_Sample.zip",
			size: "3.5 MB",
			sender: "Karan Singh",
			date: "19 Sept 2025",
			type: "zip",
		},
		{
			id: 6,
			name: "Study_Material.pdf",
			size: "1.2 MB",
			sender: "Neha Verma",
			date: "18 Sept 2025",
			type: "pdf",
		},
	];

	const getFileIcon = (type) => {
		const colors = {
			pdf: "bg-red-100 text-red-600",
			doc: "bg-blue-100 text-blue-600",
			ppt: "bg-orange-100 text-orange-600",
			image: "bg-green-100 text-green-600",
			zip: "bg-purple-100 text-purple-600",
		};
		return colors[type] || "bg-gray-100 text-gray-600";
	};

	return (
		<section className="relative hidden lg:flex flex-col items-start justify-start bg-[#fff] h-[100vh] w-[100%] md:w-[600px]">
			<header className="flex flex-row items-center justify-between w-[100%] lg:border-b border-b-1 border-gray-200 p-4 sticky top-0 bg-white z-10">
				<div>
					<h2 className="text-xl font-bold text-[#2a3d39]">Shared Files</h2>
					<p className="text-sm text-gray-500">
						All files shared in conversations
					</p>
				</div>
			</header>

			<div className="flex-1 w-full overflow-y-auto p-4">
				<div className="flex flex-col gap-3">
					{mockFiles.map((file) => (
						<div
							key={file.id}
							className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition cursor-pointer"
						>
							<div
								className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${getFileIcon(
									file.type
								)}`}
							>
								<RiFileTextLine size={24} />
							</div>

							<div className="flex-1 min-w-0">
								<h3 className="font-semibold text-[#2a3d39] text-sm truncate">
									{file.name}
								</h3>
								<p className="text-xs text-gray-500 mt-1">
									{file.size} • from {file.sender}
								</p>
								<p className="text-xs text-gray-400 mt-1">{file.date}</p>
							</div>

							<div className="flex gap-2 flex-shrink-0">
								<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition">
									<RiEyeLine size={16} className="text-gray-600" />
								</button>
								<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#192F59] hover:bg-[#2a3d6f] transition">
									<RiDownloadLine size={16} className="text-white" />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Files;
