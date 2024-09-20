"use client";

import React, { Children } from "react";
import { ExamFooter, IExamFooterProps } from "../exam/ExamFooter";
import { ExamHeader, IExamHeaderProps } from "../exam/ExamHeader";

export interface IExamLayoutProps {
  headerProps: IExamHeaderProps;
  footerProps: IExamFooterProps;
  children: React.ReactNode;
}

export const ExamBaseLayout: React.FC<IExamLayoutProps> = (
  props: IExamLayoutProps
) => {
  const { footerProps, children, headerProps } = props;
  return (
    <div className="w-screen bg-[#F0F2F6] h-screen">
      <div className="flex flex-col h-full w-full lg-gap-10 gap-4">
        <div className="flex flex-row">
          <ExamHeader
            progress={headerProps.progress}
            isTimerActive={headerProps.isTimerActive}
          />
        </div>

        <div className="flex flex-1 grow px-2 lg:px-5 rounded-lg overscroll-x-contain overflow-hidden">
          {children}
        </div>
        <div className="flex flex-row justify-center py-4">
          <ExamFooter
            btnLinkURL={footerProps.btnLinkURL}
            onButtonClick={footerProps.onButtonClick}
            isEnabled={footerProps.isEnabled}
            btnText={footerProps.btnText ? footerProps.btnText : "Next"}
          ></ExamFooter>
        </div>
      </div>
    </div>
  );
};
