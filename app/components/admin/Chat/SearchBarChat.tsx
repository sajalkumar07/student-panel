"use client";
import { useContext, useState, ChangeEvent } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

interface SearchBarProps {
  setUserInput: (input: string) => void;
}

const SearchBarChat = ({ setUserInput }: SearchBarProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSearch = () => {
    setUserInput(input);
    setInput("");
  };

  return (
    <div className="w-full justify-center items-center flex gap-3">
      <button
        className={`flex justify-center items-center w-9 h-9 rounded-full ${
          isDarkMode ? "bg-zinc-900" : "bg-[#F0F2F6]"
        }`}
      >
        <div className={isDarkMode ? "text-white" : "text-black"}>!</div>
      </button>
      <div
        className={`w-1/2 m-5 flex items-center ${
          isDarkMode ? "bg-zinc-800" : "bg-[#F0F2F6]"
        } px-4 py-2 rounded-3xl`}
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your query here"
          className={`flex-grow bg-transparent ${
            isDarkMode
              ? "text-white placeholder-gray-400"
              : "text-black placeholder-black"
          } outline-none`}
        />
        <button
          className={`${
            isDarkMode
              ? "bg-grey-500 hover:bg-black"
              : "bg-zinc-800 hover:bg-zinc-600"
          } text-white font-semibold py-2 px-4 rounded-lg`}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBarChat;
