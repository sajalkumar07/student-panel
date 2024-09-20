"use client";
import React, { useEffect, useState } from "react";

import Guidelines from "@/app/components/student/Quiz_Component/guidelines";
import { ExamBaseLayout } from "@/app/components/exam/ExamBaselayout";
import { IExamHeaderProps } from "@/app/components/exam/ExamHeader";
import { IExamFooterProps } from "@/app/components/exam/ExamFooter";
import { useRouter } from "next/navigation";
import useExamDetails from "@/app/api/ExamDetails";
import { startExam } from "@/app/api/ExamStarts";

interface ExamSection {
  examId: number;
}

interface ExamDetails {
  data: {
    data: {
      examSection: ExamSection[];
      examStatus: string;
    };
  };
}

const Page: React.FC = () => {
  const router = useRouter();

  const { examDetails, loading, error } = useExamDetails() as {
    examDetails: ExamDetails | null;
    loading: boolean;
    error: any;
  };

  useEffect(() => {
    if (examDetails?.data.data.examStatus == "ended") {
      console.log("ExamStaus", examDetails?.data.data.examStatus);
      router.push("/student/completion-message");
    }
  }, [examDetails]);

  function startAssessment() {
    const exam_id = examDetails?.data.data.examSection[0]?.examId;

    if (exam_id !== undefined) {
      startExam(exam_id);
    }
  }

  const [footerProps, setFooterProps] = useState<IExamFooterProps>({
    btnLinkURL: "/student/give-assessment/review-guide",
    isEnabled: false,
    onButtonClick: startAssessment,
  });
  const headerProps: IExamHeaderProps = {
    progress: 1,
    isTimerActive: false,
  };

  const enableFooterBtn = (isEnabled: boolean) => {
    setFooterProps({
      ...footerProps,
      isEnabled,
      onButtonClick: () => {
        startAssessment();
      },
    });
  };

  return (
    <ExamBaseLayout headerProps={headerProps} footerProps={footerProps}>
      <Guidelines enableFooterBtn={enableFooterBtn}></Guidelines>
    </ExamBaseLayout>
  );
};

export default Page;
