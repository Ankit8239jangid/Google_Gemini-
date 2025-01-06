import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";


function Sidebar() {
    const dummyChats = [
        { id: 1, title: "Web Development Basics" },
        { id: 2, title: "AI and Machine Learning" },
        { id: 3, title: "React Best Practices" },
        { id: 4, title: "Data Structures in JavaScript" },
        { id: 5, title: "Tailwind CSS Tips" },
    ];

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            className={`
                ${isOpen ? "w-64" : "w-28"} 
                h-screen bg-zinc-600 border-r-2 border-zinc-400 text-white flex flex-col
                transition-all duration-300
            `}
        >
            {/* Toggle Button */}
            <div className="flex items-center mb-4 mr-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl pt-5 ml-3  transition-colors duration-300"
                >
                    <FiAlignJustify />
                </button>
            </div>

            {isOpen && (
                <>
                    {/* Chat List */}
                    <div className="flex-grow overflow-y-auto space-y-2">
                        <button className='text-xl ml-4 font-medium'>+ New Chat</button>
                        {dummyChats.map(chat => (
                            <div
                                key={chat.id}
                                className="
                                    rounded-xl py-2 px-4 cursor-pointer
                                    hover:bg-gray-800 transition-colors duration-300 truncate
                                "
                            >
                                {chat.title}
                            </div>
                        ))}
                    </div>

                    {/* Footer Buttons */}
                    <div className="mt-4 space-y-2">
                        <button
                            className="
                                w-full text-left py-2 px-4 rounded
                                hover:bg-gray-800 transition-colors duration-300
                            "
                        >
                            Settings
                        </button>
                        <button
                            className="
                                w-full text-left py-2 px-4 rounded
                                hover:bg-gray-800 transition-colors duration-300
                            "
                        >
                            Activity
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Sidebar;
