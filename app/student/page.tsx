"use client";
import React, { useState } from "react";
import Content from "@/app/components/student/Content";
import Sidebar from "@/app/components/student/Sidebar";
import Profile from "@/app/components/student/Profile";
import Sidebar1 from "@/app/components/student/Sidebar1";
const Page: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  return (
    <div className="flex">
      {isSidebarVisible ? (
        <Sidebar />
      ) : (
        <Sidebar1 toggleSidebar={toggleSidebar} />
      )}
      <Content></Content>
      <Profile></Profile>
    </div>
  );
};

export default Page;
