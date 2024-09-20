"use client";
import React, { useContext } from "react";
import Header from "@/app/components/admin/Home/header/Header";
import Sidebar from "@/app/components/admin/Home/sidebar/Sidebar";
import Dashboard from "@/app/components/admin/Home/dashboard/Dashboard";
import SearchBar from "@/app/components/admin/Home/search/SearchBar";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col overflow-hidden ${
        isDarkMode ? "bg-zinc-950 text-white" : "bg-white text-balck"
      }`}
    >
      <Header />
      <Sidebar />
      <Dashboard />
      <SearchBar />
    </div>
  );
}
