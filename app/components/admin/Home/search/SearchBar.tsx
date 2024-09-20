//search
"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

const SearchBar = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="w-full relative left-[10%] md:left-[5%] lg:left-[4%] justify-center items-center flex">
      <button
        className={`flex justify-center items-center w-[50px] h-[50px]   rounded-full ${
          isDarkMode ? "bg-zinc-900" : "bg-[#F0F2F6]"
        }`}
      >
        <div className={isDarkMode ? "text-white" : "text-black"}>!</div>
      </button>
      <div
        className={` w-[57%] md:w-4/5 m-5 flex items-center ${
          isDarkMode ? "bg-zinc-800" : "bg-[#F0F2F6]"
        } px-4 py-2 rounded-3xl  `}
      >
        <input
          type="text"
          placeholder="Enter your query here"
          className={`flex-grow bg-transparent ${
            isDarkMode
              ? "text-white placeholder-gray-400"
              : "text-black placeholder-black"
          } outline-none  `}
        />
        <button
          className={`${
            isDarkMode
              ? "bg-grey-500 hover:bg-black"
              : "bg-zinc-800 hover:bg-zinc-600"
          } text-white font-semibold py-2 px-4 rounded-lg text-[12px] md:text-[16px]`}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
