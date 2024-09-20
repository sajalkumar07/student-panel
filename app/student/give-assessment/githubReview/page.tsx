"use client";
//github Review
import React, { useEffect, useState } from "react";
import { ExamBaseLayout } from "@/app/components/exam/ExamBaselayout";
import { IExamHeaderProps } from "@/app/components/exam/ExamHeader";
import { IExamFooterProps } from "@/app/components/exam/ExamFooter";
import useExamDetails from "@/app/api/ExamDetails";
import endQuestion from "@/app/api/questionEnds";
import { endExam } from "@/app/api/ExamEnds";
import { githubToken } from "../../../components/student/Quiz_Component/review-guidelines";
import CodeReview, {
  TotalQuestions,
} from "@/app/components/student/QuestionsComponents/codeReviewQuestion";

interface ExamQuestion {
  id: number;
  description: string;
  category: string;
}

interface ExamSection {
  examId: number;
  examQuestions: {
    question: ExamQuestion;
    questionId: number;
  }[];
}

interface ExamDetailsData {
  examSection: ExamSection[];
}
interface ExamDetailsResponse {
  data: {
    data: ExamDetailsData;
  };
}
const Page: React.FC = () => {
  const [currQuestion, setCurrQuestion] = useState<number>(0);
  const { examDetails, loading, error } = useExamDetails() as {
    examDetails: ExamDetailsResponse | null;
    loading: boolean;
    error: any;
  };
  const github_token = githubToken();
  const progress = ((currQuestion + 1) / (TotalQuestions().length + 1)) * 100;

  function endAssessment() {
    try {
      console.log(
        "ExamDetails Response",
        examDetails?.data.data.examSection[0].examId
      );

      const question_id =
        examDetails?.data.data.examSection[0].examQuestions[0].questionId;

      const exam_id = examDetails?.data.data.examSection[0].examId;

      if (exam_id && question_id) {
        endQuestion(exam_id, question_id, github_token)
          .then(() => endExam(exam_id))
          .catch((error) => {
            console.error("Error ending question or exam:", error);
          });
      }
    } catch (error) {
      console.error("Error in endAssessment:", error);
    }
  }

  const [footerProps, setFooterProps] = useState<IExamFooterProps>({
    btnLinkURL: "/student/completion-message",
    isEnabled: false,
    onButtonClick: endAssessment,
  });

  const headerProps: IExamHeaderProps = {
    progress: progress,
    isTimerActive: true,
  };

  const enableFooterBtn = (isEnabled: boolean) => {
    setFooterProps({
      ...footerProps,
      isEnabled,
      onButtonClick: () => {
        endAssessment();
      },
    });
  };

  return (
    <ExamBaseLayout headerProps={headerProps} footerProps={footerProps}>
      <CodeReview
        examDetails={examDetails}
        loading={loading}
        error={error}
        currQuestion={currQuestion}
        setCurrQuestion={setCurrQuestion}
        enableFooterBtn={enableFooterBtn}
      />
    </ExamBaseLayout>
  );
};

export default Page;
