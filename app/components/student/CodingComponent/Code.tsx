import React from "react";

interface CodeProps {}

const Code: React.FC<CodeProps> = () => {
  return (
    <div className="w-[1053px] h-[386px] rounded-[8px] bg-[white] py-[8px] px-[16px] flex flex-col relative mt-5">
      <div className="flex justify-between">
        <div className="w-[115px] h-[32px] flex items-center justify-between rounded-[8px] py-[4px] px-[8px] bg-[#F5F5F5]">
          <h1>Code</h1>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3002 0.710224C13.2077 0.61752 13.0978 0.543973 12.9768 0.493791C12.8559 0.44361 12.7262 0.417779 12.5952 0.417779C12.4643 0.417779 12.3346 0.44361 12.2136 0.493791C12.0926 0.543973 11.9827 0.61752 11.8902 0.710224L7.00022 5.59022L2.11022 0.700223C2.01764 0.607642 1.90773 0.534202 1.78677 0.484097C1.6658 0.433992 1.53615 0.408203 1.40522 0.408203C1.27429 0.408203 1.14464 0.433992 1.02368 0.484097C0.902716 0.534202 0.792805 0.607642 0.700223 0.700223C0.607642 0.792805 0.534202 0.902716 0.484097 1.02368C0.433992 1.14464 0.408203 1.27429 0.408203 1.40522C0.408203 1.53615 0.433992 1.6658 0.484097 1.78677C0.534202 1.90773 0.607642 2.01764 0.700223 2.11022L5.59022 7.00022L0.700223 11.8902C0.607642 11.9828 0.534202 12.0927 0.484097 12.2137C0.433992 12.3346 0.408203 12.4643 0.408203 12.5952C0.408203 12.7262 0.433992 12.8558 0.484097 12.9768C0.534202 13.0977 0.607642 13.2076 0.700223 13.3002C0.792805 13.3928 0.902716 13.4662 1.02368 13.5163C1.14464 13.5665 1.27429 13.5922 1.40522 13.5922C1.53615 13.5922 1.6658 13.5665 1.78677 13.5163C1.90773 13.4662 2.01764 13.3928 2.11022 13.3002L7.00022 8.41022L11.8902 13.3002C11.9828 13.3928 12.0927 13.4662 12.2137 13.5163C12.3346 13.5665 12.4643 13.5922 12.5952 13.5922C12.7262 13.5922 12.8558 13.5665 12.9768 13.5163C13.0977 13.4662 13.2076 13.3928 13.3002 13.3002C13.3928 13.2076 13.4662 13.0977 13.5163 12.9768C13.5665 12.8558 13.5922 12.7262 13.5922 12.5952C13.5922 12.4643 13.5665 12.3346 13.5163 12.2137C13.4662 12.0927 13.3928 11.9828 13.3002 11.8902L8.41022 7.00022L13.3002 2.11022C13.6802 1.73022 13.6802 1.09022 13.3002 0.710224Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-[86px] h-[32px] flex items-center justify-between py-[4px] px-[12px] rounded-[8px] border border-1 border-black">
          <h1>Run</h1>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5.14014V19.1401L19 12.1401L8 5.14014Z" fill="black" />
          </svg>
        </div>
      </div>
      <hr className="w-full mt-4" />
      <textarea className="flex-grow border-none outline-none resize-none overflow-auto mt-2"></textarea>
    </div>
  );
};

export default Code;