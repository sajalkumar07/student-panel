"use client";
import React, { useState } from "react";

interface instructions {
  content: string;
}
const Tutorial: React.FC = () => {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const handleClick1 = () => {
    setIsVisible1(false);
    setIsVisible2(true);
  };

  const handleClick2 = () => {
    setIsVisible2(false);
    setIsVisible3(true);
  };

  const handleClick3 = () => {
    setIsVisible3(false);
  };

  return (
    <>
      <div className="absolute">
        {isVisible1 && (
          <>
            <svg
              className="mt-10 ml-2"
              width="56"
              height="100"
              viewBox="0 0 56 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="8" r="8" fill="#F67678" />
              <line x1="28.5" y1="16" x2="28.5" y2="114" stroke="black" />
            </svg>
            <div className="lg:w-[237px] lg:h-[150px] w-[90px] h-[150px] rounded-md ml-4 bg-[#FFFFFF] border border-[#000000] lg:text-base text-[9px] font-sans">
              <p className="p-2.5">
                This is the menu option through which you can seek technical
                help in case of any technical issues.
              </p>
              <button
                onClick={handleClick1}
                className="float-end mr-3 text-[#3C59B3] "
              >
                Okay
              </button>
            </div>
          </>
        )}
      </div>
      <div className="absolute left-2/3 transform -translate-x-1/2">
        {isVisible2 && (
          <>
            <svg
              className="mt-10 ml-2"
              width="56"
              height="100"
              viewBox="0 0 56 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="8" r="8" fill="#F67678" />
              <line x1="28.5" y1="16" x2="28.5" y2="114" stroke="black" />
            </svg>
            <div className="lg:w-[237px] lg:h-[150px] w-[90px] h-[160px] rounded-md ml-4 bg-[#FFFFFF] border border-[#000000] lg:text-base text-[11px] font-sans">
              <p className="p-2.5">
                This is the progress bar that will show you how many questions
                are still left
              </p>
              <button
                onClick={handleClick2}
                className="float-end mr-3 text-[#3C59B3]"
              >
                Okay
              </button>
            </div>
          </>
        )}
      </div>
      <div className="absolute left-3/4 ml-[12vw] transform -translate-x-1/2">
        {isVisible3 && (
          <>
            <svg
              className="mt-10 ml-[12vw]"
              width="56"
              height="100"
              viewBox="0 0 56 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="8" r="8" fill="#F67678" />
              <line x1="28.5" y1="16" x2="28.5" y2="114" stroke="black" />
            </svg>
            <div className="lg:w-[237px] lg:h-[150px] w-[90px] h-[150px] rounded-md ml-4 bg-[#FFFFFF] border border-[#000000] lg:text-base text-[11px] font-sans">
              <p className="p-2.5">
                This is the timer that will keep track of the time limit for
                each question
              </p>
              <button
                onClick={handleClick3}
                className="float-end mr-3 text-[#3C59B3]"
              >
                Okay
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tutorial;
