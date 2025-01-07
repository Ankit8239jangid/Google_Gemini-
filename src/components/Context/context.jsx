import React, { createContext, useState } from "react";
import runChat from "../CONFIG/gemani";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState(""); // User input for the prompt
  const [recentPrompt, setRecentPrompt] = useState(""); // Store the most recent prompt
  const [prevPrompts, setPrevPrompts] = useState([]); // List of previous prompts
  const [showResult, setShowResult] = useState(false); // Toggle visibility of results
  const [loading, setLoading] = useState(false); // Indicate loading state
  const [resultData, setResultData] = useState(""); // Store full formatted response data
  const [typingData, setTypingData] = useState(""); // Simulate typing effect

  const delayPara = (words) => {
    setResultData(""); // Clear previous typing
    words.forEach((word, index) => {
      setTimeout(() => {
        setResultData((prev) => prev + word + " ");
      }, index * 100); // Delay each word by 100ms
    });
  };


  const newChat = () => {
    // Reset all states to start a new chat
    setInput("");
    setRecentPrompt("");
    setPrevPrompts([]);
    setShowResult(false);
    setLoading(false);
    setResultData("");
    setTypingData("");
  };

  const onSent = async () => {
    try {
      // Reset state for new request
      setResultData((prev) => [...prev, resultData]); // Show the full response
      setTypingData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);
      setPrevPrompts((prev) => [...prev, input]);

      // Make the chat API call
      const response = await runChat(input);

      // Initialize variable to store formatted response
      let formattedResponse = "";

      // Split and format the response
      const responseArr = response.split("**");
      responseArr.forEach((text, i) => {
        if (i % 2 === 1) {
          // Highlight text between "**"
          formattedResponse += `<b>${text}</b>`;
        } else {
          formattedResponse += text;
        }
      });

      // Additional formatting rules
      formattedResponse = formattedResponse
        .split("*").join("<br>") // Convert "*" to line breaks
        .replace(/__(.*?)__/g, "<i>$1</i>") // Italicize text between "__"
        .replace(/~~(.*?)~~/g, "<del>$1</del>") // Strikethrough for text between "~~"
        .replace(/```([^```]+)```/g, "<pre><code>$1</code></pre>") // Format code blocks
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>') // Markdown links
        .replace(/\bIMPORTANT\b/g, "<mark>IMPORTANT</mark>") // Highlight "IMPORTANT"
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Bold for text between double asterisks
        .replace(/_(.*?)_/g, "<i>$1</i>") // Italicize text between single underscores
        .replace(/`([^`]+)`/g, "<code>$1</code>") // Inline code for text between single backticks
        .replace(/^- (.*?)(<br>|$)/gm, "<li>$1</li>") // Convert lines starting with "-" into list items
        .replace(/(?:\r\n|\r|\n)/g, "<br>") // Convert newlines into line breaks
        .replace(/# (.*?)<br>/g, "<h1>$1</h1>") // Convert "# " into H1 headers
        .replace(/## (.*?)<br>/g, "<h2>$1</h2>") // Convert "## " into H2 headers
        .replace(/### (.*?)<br>/g, "<h3>$1</h3>") // Convert "### " into H3 headers
        .replace(/(!\[.*?\]\(.*?\))/g, (match) => {
          const altText = match.match(/\[.*?\]/g)?.[0]?.slice(1, -1);
          const imageUrl = match.match(/\(.*?\)/g)?.[0]?.slice(1, -1);
          return `<img src="${imageUrl}" alt="${altText}" style="max-width:100%;"/>`;
        }) // Image handling for Markdown syntax
        .trim();

      // Update resultData for complete response
      setResultData(formattedResponse);

      // Simulate typing effect
      const words = formattedResponse.replace(/<[^>]*>/g, "").split(" "); // Strip HTML tags
      delayPara(words);
    } catch (error) {
      console.error("Error processing chat:", error);

      // Provide user-friendly error feedback
      setResultData("Sorry, something went wrong. Please try again.");
      setTypingData("Sorry, something went wrong. Please try again.");
    } finally {
      // Reset loading state and clear input
      setLoading(false);
      setInput("");


    }

  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    typingData,
    setTypingData,
    onSent,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
