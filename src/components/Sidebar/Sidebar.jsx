import React, { useContext, useState } from 'react';
import { Context } from '../Context/context';
import { FiAlignJustify } from "react-icons/fi";

function Sidebar() {

    const { prevPrompts, newChat } = useContext(Context);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            className={`
                ${isOpen ? "w-1/4" : "w-20"} 
                h-screen bg-zinc-600 border-r-2 border-zinc-400 text-white flex flex-col
                transition-all duration-300
            `}
        >
            {/* Toggle Button */}
            <div className="flex items-center mb-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl pt-5 ml-5 transition-colors duration-300"
                >
                    <FiAlignJustify />
                </button>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
                {isOpen ? (
                    <>
                        {/* New Chat Button */}
                        <div onClick={() => newChat()} className="mb-7">
                            <button className="text-xl ml-4 font-medium">+ New Chat</button>
                        </div>

                        {/* Recent Chats */}
                        <div className="flex-grow overflow-y-auto space-y-2 ">
                            <p className="ml-7 font-medium">Recent</p>

                            {prevPrompts.map((prompt, index) => {
                                return (
                                    <h1
                                        key={index}
                                        className=" ml-4 rounded-xl py-2 px-4 cursor-pointer hover:bg-gray-800 transition-colors duration-300 truncate"  >
                                        {prompt}
                                    </h1>
                                );
                            })}
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
                ) : (
                    ""
                )}
            </div>
        </div >
    );
}

export default Sidebar;
