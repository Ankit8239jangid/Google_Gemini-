import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";


const InputBar = () => {
  
  return (
    <div className="flex items-center justify-between bg-zinc-800 rounded-full px-4 py-2 shadow-lg w-full max-w-3xl mx-auto border border-gray-600">
      {/* Search Input */}
      <div className="flex items-center space-x-2 text-white flex-grow">
        <AiOutlinePicture className="text-xl" />
        <input
          type="text"
          value={""}
          onChange={""}
          placeholder="Ask Gemini"
          className="bg-transparent outline-none text-sm font-medium flex-grow placeholder-gray-400 text-white"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-2">
       
        <button className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full text-white transition-colors duration-300">
          <BsFillMicFill className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default InputBar;
