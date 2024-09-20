"use client";
import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex flex-1 flex-row items-center gap-4 justify-center">
      <h1 className="hidden lg:block">Progress</h1>

      <div className="w-4/6 h-4 bg-white rounded-lg">
        <div
          className="h-4 bg-[#4FB42A] rounded-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
