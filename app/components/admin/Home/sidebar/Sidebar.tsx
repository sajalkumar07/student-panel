//side bar
"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "@/app/context/ThemeContext";

const Sidebar: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed left-0 top-0 h-screen ${
        isDarkMode ? "bg-zinc-900" : "bg-[#F0F2F6]"
      } transition-all duration-300 rounded-tr-3xl z-[10]`}
    >
      <div className={`${isOpen ? "w-64" : "w-16"} h-full`}>
        <div className="flex flex-col items-center">
          <button
            className={`p-2 mt-4 ${
              isDarkMode
                ? "text-white hover:bg-zinc-950"
                : "text-black hover:bg-zinc-600"
            } rounded-md`}
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <Link href="/admin/chat">
            <button
              className={`p-2 mt-4 ${
                isDarkMode
                  ? "text-white hover:bg-zinc-950"
                  : "text-black bg-white hover:bg-zinc-600"
              } rounded-full flex items-center justify-center ${
                isOpen ? "bg-[rgba(39,39,39,1)]" : "bg-[rgba(39,39,39,1)]"
              }`}
            >
              {isOpen ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span className="ml-2">New Session</span>
                </>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </button>
          </Link>

          {isOpen && (
            <div className="mt-8 flex flex-col items-center">
              <h2
                className={`pb-2 font-bold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Session Log
              </h2>
              <button
                className={`p-2 ${
                  isDarkMode
                    ? "text-white hover:bg-zinc-950"
                    : "text-black hover:bg-zinc-600"
                } rounded-md`}
              >
                Current Session 0
              </button>
              <button
                className={`p-2 ${
                  isDarkMode
                    ? "text-white hover:bg-zinc-950"
                    : "text-black hover:bg-zinc-600"
                } rounded-md`}
              >
                Current Session 1
              </button>
              <button
                className={`p-2 ${
                  isDarkMode
                    ? "text-white hover:bg-zinc-950"
                    : "text-black hover:bg-zinc-600"
                } rounded-md`}
              >
                Current Session 2
              </button>
              <button
                className={`p-2 ${
                  isDarkMode
                    ? "text-white hover:bg-zinc-950"
                    : "text-balck hover:bg-zinc-600"
                } rounded-md`}
              >
                Current Session 3
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
