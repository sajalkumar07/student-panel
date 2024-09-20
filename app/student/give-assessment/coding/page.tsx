import React from "react";
import AssesmentMenu from "@/app/components/student/GiveAssessment_Components/AssesmentMenu";
import ProgressBar from "@/app/components/student/GiveAssessment_Components/ProgressBar";
import Timer from "@/app/components/student/GiveAssessment_Components/Timer";
import Code from "@/app/components/student/CodingComponent/Code";
import CodeQuestionBar from "@/app/components/student/CodingComponent/CodingBar";
import TestCase from "@/app/components/student/CodingComponent/TestCases";
import Bottom from "@/app/components/student/CodingComponent/Bottom";

const Page: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-[#F0F2F6]">
      <div className="flex justify-between">
        <AssesmentMenu />
        <ProgressBar progress={0} />
        <Timer isActive={false}/>
      </div>
      <div className="flex justify-evenly">
        <CodeQuestionBar />
        <div className="flex flex-col">
          <Code />
          <TestCase />
        </div>
      </div>
      <div className="w-full flex justify-center mt-5">
        <Bottom />
      </div>
    </div>
  );
};

export default Page;
