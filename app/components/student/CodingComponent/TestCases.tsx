"use client"
import React, { useState } from "react";

interface TestCaseProps {}

const TestCase: React.FC<TestCaseProps> = () => {
  const [showTestcases, setShowTestcases] = useState<boolean>(true);
  const [showOutput, setShowOutput] = useState<boolean>(false);

  return (
    <div className="w-1053px h-[162px] flex flex-col mt-2 bg-[white] rounded-[8px] py-[8px] px-[16px]">
      <div className="flex items-center gap-[8px]">
        <div
          className={`w-[91px] h-[30px] rounded-[8px] py-[4px] px-[8px] cursor-pointer ${
            showTestcases ? "bg-[#F5F5F5]" : ""
          }`}
          onClick={() => {
            setShowTestcases(true);
            setShowOutput(false);
          }}
        >
          <h1>Testcases</h1>
        </div>
        <div
          className={`w-[91px] h-[30px] rounded-[8px] py-[4px] px-[8px]  cursor-pointer ${
            showOutput ? "bg-[#F5F5F5]" : ""
          }`}
          onClick={() => {
            setShowTestcases(false);
            setShowOutput(true);
          }}
        >
          <h1>Output</h1>
        </div>
      </div>
      <hr className="w-full mt-2" />
      <div className="flex flex-col mt-2">
        {showTestcases && (
          <div className=" rounded-[8px] py-[4px] px-[8px]">Testcases</div>
        )}
        {showOutput && (
          <div className=" rounded-[8px] py-[4px] px-[8px]">Output</div>
        )}
      </div>
    </div>
  );
};

export default TestCase;
