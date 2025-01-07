import React, { useContext } from "react";
import { Context } from "../../../Context/context";
import { AiOutlinePicture } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const InputBar = () => {
  const { input, setInput, onSent } = useContext(Context);

  // Handle input submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSent(input);
      setInput("");
    }
  };

  return (
    <div className="flex items-center justify-between bg-zinc-800 rounded-full px-5 py-2 shadow-lg w-full max-w-3xl mx-auto border border-gray-600 transition-all">
      {/* Search Input */}
      <div className="flex items-center w-full space-x-4 text-white flex-grow">
        <AiOutlinePicture className="text-xl" />
        <form onSubmit={handleSubmit} className="flex-grow flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Gemini"
            aria-label="Search or ask Gemini"
            className="bg-transparent outline-none text-sm font-medium placeholder-gray-400 text-white flex-grow transition-all duration-300 min-w-[150px] max-w-full md:max-w-[600px] focus:min-w-[200px]"
            style={{ width: input.length > 20 ? `${input.length + 10}ch` : "100%" }}
          />
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition-colors duration-300"
            aria-label="Send"
          >
            <FiSend className="text-lg" />
          </button>
        </form>
      </div>

      {/* Microphone Button */}
      <div className="flex items-center ml-3 space-x-2">
        <button
          onClick={handleSubmit}
          className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full text-white transition-colors duration-300"
          aria-label="Microphone"
        >
          <BsFillMicFill className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default InputBar;
