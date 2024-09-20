import React from "react";

 // Import ProgressProvider
import AssesmentMenu from "@/app/components/student/GiveAssessment_Components/AssesmentMenu";
import ProgressBar from "@/app/components/student/GiveAssessment_Components/ProgressBar";
import Timer from "@/app/components/student/GiveAssessment_Components/Timer";
import QuizApp from "@/app/components/student/QuestionsComponents/QuizQuestions";

const Page: React.FC = () => {
  return (
    
      <div className="w-screen h-screen bg-[#F0F2F6]">
        <div className="flex justify-between">
          <AssesmentMenu></AssesmentMenu>
          <ProgressBar progress={0}></ProgressBar>
          <Timer isActive={false}></Timer>
        </div>

        <div className="">
          <QuizApp></QuizApp>
        </div>
      </div>
  );
};

export default Page;