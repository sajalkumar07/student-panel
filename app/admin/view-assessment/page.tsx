"use client";
import QuestionPaperPreview from "../../components/admin/Add-Question/QuestionPreview/QuestionPaperPreview";
import Header from "@/app/components/admin/Home/header/Header";
import PreviewQuestion from "../../components/admin/Add-Question/QuestionPreview/PreviewQuestion";
import SearchBar from "@/app/components/admin/Home/search/SearchBar";
import Sidebar from "@/app/components/admin/Home/sidebar/Sidebar";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
export default function AssesmentPreview() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-zinc-950 text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar />
      <Header />
      <main className="container mx-auto px-24 py-4 flex-grow">
        <div className="grid grid-row-2 gap-4 pr-4">
          <div className="w-[75vw] mr-4 pr-4 bg-[#1c1c1c]  rounded-2xl flex flex-col items-center justify-center mt-10 sm:mt-16">
            <QuestionPaperPreview />
          </div>
          <div className="w-[75vw]">
            <PreviewQuestion />
          </div>
        </div>
      </main>
      <div className="w-[90vw]  "> 
      <SearchBar />
      </div>
    </div>
  );
}
