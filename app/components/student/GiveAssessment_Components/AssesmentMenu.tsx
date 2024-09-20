import React from "react";

interface AssesmentMenuProps {
  assessmentName?: string;
}

const AssesmentMenu: React.FC<AssesmentMenuProps> = (
  props: AssesmentMenuProps
) => {
  const { assessmentName } = props;
  return (
    <div className="flex flex-row items-center gap-6 rounded-br-lg  bg-white px-4 py-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 27H31.5V24H4.5V27ZM4.5 19.5H31.5V16.5H4.5V19.5ZM4.5 9V12H31.5V9H4.5Z"
          fill="black"
        />
      </svg>
      <div className="hidden lg:flex flex-row gap-4">
        <img className="flex w-6 h-" src="/images/Liftu-Image.jpeg" alt="" />
        <h1 className="text-base">
          {assessmentName ? assessmentName : "ReactJs Assessment"}
        </h1>
      </div>
    </div>
  );
};

export default AssesmentMenu;
