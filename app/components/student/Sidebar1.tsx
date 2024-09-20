import React, { MouseEvent } from "react";
import { IoMenu, IoAddOutline } from "react-icons/io5";

interface Sidebar1Props {
  toggleSidebar: () => void;
}

const Sidebar1: React.FC<Sidebar1Props> = ({ toggleSidebar }) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    toggleSidebar();
  };

  return (
    <div
      className="sidebar w-24 h-screen bg-[#F0F2F6] text-sidebar border-r-2 border-white rounded-tr-2xl rounded-br-2xl p-5"
      onClick={handleClick}
    >
      <div className="icons flex flex-col items-center justify-center gap-10">
        <IoMenu className="menu text-2.5vw" />
        <IoAddOutline className="add text-2.5vw bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Sidebar1;