"use client"
import React, { useState } from "react";

interface FolderItem {
  name: string;
  id: number;
  question: string;
}

function CodeQuestionBar() {
  const [showQuestion, setShowQuestion] = useState<boolean>(true);
  const [showFolder, setShowFolder] = useState<boolean>(false);
  const [selectedCode, setSelectedCode] = useState<number | null>(null);

  const folderItems: FolderItem[] = [
    { name: "Code1.JS", id: 1, question: "Question for Code1" },
    { name: "Code2.JS", id: 2, question: "Question for Code2" },
    { name: "Code3.JS", id: 3, question: "Question for Code3" },
  ];

  const handleCodeClick = (codeId: number) => {
    setSelectedCode(codeId);
    setShowQuestion(true);
    setShowFolder(false);
  };

  return (
    <div className="w-[350px] h-[556px] rounded-[8px] py-[8px] px-[16px] bg-white mt-5 ">
      <div className="flex items-center gap-[8px]">
        <div
          className={`w-[91px] h-[30px] rounded-[8px] py-[4px] px-[8px] cursor-pointer ${
            showQuestion ? "bg-[#F5F5F5]" : ""
          }`}
          onClick={() => {
            setShowQuestion(true);
            setShowFolder(false);
            setSelectedCode(null);
          }}
        >
          Question
        </div>
        <div
          className={`w-[194px] h-[30px] rounded-[8px] py-[4px] px-[8px]  cursor-pointer ${
            showFolder ? "bg-[#F5F5F5]" : ""
          }`}
          onClick={() => {
            setShowQuestion(false);
            setShowFolder(true);
            setSelectedCode(null);
          }}
        >
          Repository-Folder View
        </div>
      </div>
      <hr className="w-full mt-2" />
      <div className=" w-full h-[500px] flex flex-col mt-2 overflow-auto">
        {showQuestion && (
          <div className="flex-grow mt-4">
            {selectedCode !== null &&
              folderItems.find((item) => item.id === selectedCode)?.question}
          </div>
        )}
        {showFolder && (
          <div className="flex flex-col">
            <div className="w-[295px] h-[24px] flex items-center justify-between">
              <h1>Folder1</h1>
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2902 0.290003C11.1977 0.197299 11.0878 0.123752 10.9668 0.0735703C10.8459 0.0233888 10.7162 -0.00244141 10.5852 -0.00244141C10.4543 -0.00244141 10.3246 0.0233888 10.2036 0.0735703C10.0826 0.123752 9.97274 0.197299 9.88022 0.290003L6.00022 4.17L2.12022 0.290003C2.02764 0.197421 1.91773 0.123981 1.79677 0.0738764C1.6758 0.0237714 1.54615 -0.00201797 1.41522 -0.00201797C1.28429 -0.00201798 1.15464 0.0237714 1.03368 0.0738764C0.912715 0.123981 0.802803 0.197421 0.710221 0.290003C0.61764 0.382585 0.544201 0.492495 0.494096 0.61346C0.443991 0.734424 0.418202 0.864072 0.418202 0.995003C0.418202 1.12593 0.443991 1.25558 0.494096 1.37655C0.544201 1.49751 0.61764 1.60742 0.710221 1.7L5.30022 6.29C5.39274 6.38271 5.50262 6.45625 5.6236 6.50644C5.74457 6.55662 5.87425 6.58245 6.00522 6.58245C6.13619 6.58245 6.26587 6.55662 6.38685 6.50644C6.50782 6.45625 6.61771 6.38271 6.71022 6.29L11.3002 1.7C11.6802 1.32 11.6802 0.680003 11.2902 0.290003Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex flex-col mt-2 gap-[10px] px-[16px]">
              {folderItems.map((item) => (
                <div
                  key={item.id}
                  className="w-[94px] h-[22px] flex gap-[8px] cursor-pointer"
                  onClick={() => handleCodeClick(item.id)}
                >
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.9375 0H2.0625C1.37219 0 0.8125 0.559687 0.8125 1.25V18.75C0.8125 19.4403 1.37219 20 2.0625 20H13.9375C14.6278 20 15.1875 19.4403 15.1875 18.75V6.25031L8.9375 0ZM13.9375 6.76813V6.875H8.3125V1.25H8.42L13.9375 6.76813ZM2.0625 18.75V1.25H7.0625V8.125H13.9375V18.75H2.0625Z"
                      fill="black"
                    />
                  </svg>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeQuestionBar;
