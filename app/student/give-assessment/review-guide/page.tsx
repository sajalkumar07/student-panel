"use client";
import React, { useState } from "react";
import ReviewGuidelines from "@/app/components/student/Quiz_Component/review-guidelines";
import { ExamBaseLayout } from "@/app/components/exam/ExamBaselayout";
import { IExamFooterProps } from "@/app/components/exam/ExamFooter";
import { IExamHeaderProps } from "@/app/components/exam/ExamHeader";

const Page: React.FC = () => {
  const [footerProps, setFooterProps] = useState<IExamFooterProps>({
    btnLinkURL: "/student/give-assessment/githubReview",
    isEnabled: false,
    onButtonClick: () => {},
  });
  const headerProps: IExamHeaderProps = {
    progress: 1,
    isTimerActive: false,
  };

  const enableFooterBtn = (isEnabled: boolean) => {
    setFooterProps({ ...footerProps, isEnabled });
  };
  return (
    <ExamBaseLayout headerProps={headerProps} footerProps={footerProps}>
      <ReviewGuidelines enableFooterBtn={enableFooterBtn}></ReviewGuidelines>
    </ExamBaseLayout>
  );
};

export default Page;
