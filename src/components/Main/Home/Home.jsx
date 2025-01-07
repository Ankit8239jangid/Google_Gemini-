import React, { useContext } from "react";
import InputBar from "./InputBox/InputBar";
import ShimmerUI from "./SimerUi";
import { Context } from "../../Context/context";

function Home() {
    const { input, recentPrompt, loading, resultData } = useContext(Context);

    return (
        <>
            {/* Main Content */}
            <div className=" w-full flex-grow flex flex-col">
                {/* Header Section */}
                <div className="pt-6 pb-4 flex items-center justify-between px-6">
                    <h1 className="text-xl md:text-xl font-semibold">Gemini 2.0</h1>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-2 ml-3 rounded transition">
                        Try Gemini Advanced
                    </button>
                </div>

                {/* Default State */}
                {!loading && !resultData ? (
                    <div className="font-semibold text-3xl text-center mt-40">
                        <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Hello, Ankit Jangid
                        </h1>
                    </div>
                ) : null}

                {/* Chat Section */}
                <div className="flex-grow overflow-y-auto custom-scrollbar px-4 md:px-20 h-screen ">
                    <div className="w-full rounded-lg">
                        {/* Placeholder While Loading */}
                        {loading && (
                            <div className="w-full mt-4 flex gap-5 justify-center">
                                <img
                                    src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                                    alt="Loading Gemini Logo"
                                    className="w-10 h-10"
                                />
                                <ShimmerUI />
                            </div>
                        )}
                    </div>

                    {/* Show Response When Ready */}
                    {resultData && !loading && (
                        <div className="w-full rounded-lg">
                            <div className="bg-zinc-700 w-fit rounded-br-full rounded-l-full p-4">
                                <h1>{recentPrompt || "No prompt provided"}</h1>
                            </div>

                            <div className="p-4 rounded-lg flex gap-4 items-start">
                                <img
                                    src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                                    alt="Gemini Logo"
                                    className="w-10 h-10"
                                />
                                <div className="flex flex-col space-y-4">
                                    {/* Using dangerouslySetInnerHTML to render formatted response */}
                                    <p
                                        dangerouslySetInnerHTML={{ __html: resultData }}
                                        className="md:text-base"
                                    ></p>
                                    <ul className="flex items-center space-x-4">
                                        <li
                                            className="cursor-pointer hover:scale-125 transition-transform duration-300"
                                            aria-label="Like"
                                        >
                                            👍
                                        </li>
                                        <li
                                            className="cursor-pointer hover:scale-125 transition-transform duration-300"
                                            aria-label="Neutral"
                                        >
                                            😑
                                        </li>
                                        <li
                                            className="cursor-pointer hover:scale-125 transition-transform duration-300"
                                            aria-label="Refresh"
                                        >
                                            🔄
                                        </li>
                                        <li
                                            className="cursor-pointer hover:scale-125 transition-transform duration-300"
                                            aria-label="Rocket"
                                        >
                                            🚀
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
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
        </>
    );
}

export default Home;
