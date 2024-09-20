import React from "react";
import AssesmentMenu from "../student/GiveAssessment_Components/AssesmentMenu";
import ProgressBar from "../student/GiveAssessment_Components/ProgressBar";
import Timer from "../student/GiveAssessment_Components/Timer";
import Tutorial from "../student/Quiz_Component/tutorial";

export interface IExamHeaderProps {
  progress: number;
  isTimerActive: boolean;
}

export const ExamHeader: React.FC<IExamHeaderProps> = (
  props: IExamHeaderProps
) => {
  const { progress, isTimerActive } = props;
  return (
    <div className="flex flex-row flex-1 justify-between">
      <AssesmentMenu></AssesmentMenu>

      <ProgressBar progress={progress}></ProgressBar>

      <Tutorial></Tutorial>

      <Timer isActive={isTimerActive}></Timer>
    </div>
  );
};
