"use client"
import { useState } from "react";
import ChatBar from "@/app/components/student/ChatBar";
import Sidebar from "@/app/components/student/Sidebar";
import Sidebar1 from "@/app/components/student/Sidebar1";
import Profile from "@/app/components/student/Profile";
import TaskGrid from "@/app/components/student/All-tests/TaskGrid";
import styles from "@/app/components/student/Content.module.css";

const Page: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  return (
    <div className="flex">
      {isSidebarVisible ? <Sidebar /> : <Sidebar1 toggleSidebar={toggleSidebar} />}
      <div className={styles.main}>
        <TaskGrid></TaskGrid>
        <ChatBar></ChatBar>
      </div>
      <Profile></Profile>
    </div>
  );
}

export default Page;
