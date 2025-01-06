import React from 'react';
import Sidebar from '../../Sidebar';
import InputBar from './InputBox/InputBar';


function Home() {
    return (
        <div className="max-h-screen bg-zinc-800 text-white flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-grow flex flex-col ">
                {/* Header Section */}
                <div className="pl-16 pt-6 pb-6 flex items-center justify-between px-6">
                    <h1 className="text-xl md:text-xl font-semibold">
                        2.0 Flash Experimental
                    </h1>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-2 ml-3 rounded transition">
                        Try Gemini Advanced
                    </button>
                </div>

                {/* Chat Section */}
                <div className="flex-grow overflow-y-auto custom-scrollbar overflow-auto   pl-10 h-screen space-y-4">
                    {/* Dynamic Chat Messages */}
                    {[...Array(2)].map((_, index) => (
                        <div
                            key={index}
                            className="w-full p-6 rounded-lg "
                        >
                            {/* Chat Header */}
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="bg-orange-500 text-white rounded-full h-10 w-10 flex items-center justify-center ">
                                    A
                                </div>
                                <h2 className="font-semibold text-lg">Promte {index + 1}</h2>
                            </div>

                            {/* Chat Content */}
                            <div className="p-2  rounded-lg flex gap-3">
                                <img
                                    src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                                    alt="Gemini Logo"
                                    className="w-8 h-8"
                                />
                                <div className="flex flex-col space-y-6">
                                    <p className="text-sm md:text-base">
                                        This is a sample message for chat {index + 1}. You can replace this with your actual chat content.
                                        This is a sample message for chat {index + 1}. You can replace this with your actual chat content.

                                    </p>
                                    <ul className="flex items-center space-x-4">
                                        <li className="cursor-pointer hover:scale-125 transition-transform duration-300">👍</li>
                                        <li className="cursor-pointer hover:scale-125 transition-transform duration-300">😑</li>
                                        <li className="cursor-pointer hover:scale-125 transition-transform duration-300">🔄</li>
                                        <li className="cursor-pointer hover:scale-125 transition-transform duration-300">🚀</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="p-4">
                    <div className="max-w-3xl mx-auto flex flex-col items-center">
                        {/* InputBar */}
                        <InputBar />
                        <div className="text-sm text-center text-zinc-500 mt-2">
                            Gemini can make mistakes, so double-check it.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
