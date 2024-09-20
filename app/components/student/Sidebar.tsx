import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#F0F2F6] flex flex-col items-center gap-2 text-sidebar h-screen w-64 p-2 rounded-tr-2xl rounded-br-2xl">
      <button className="font-sidebar text-sidebar-text rounded-full border-sidebar-border border-2 p-2">
        Current Session
      </button>
      <div className="flex flex-col gap-2">
        <h1 className="font-sidebar text-sidebar-text">Session Log1</h1>
        <h1 className="font-sidebar text-sidebar-text">Session Log2</h1>
      </div>
    </div>
  );
};

export default Sidebar;
