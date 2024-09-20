"use client";
import React, { useState, useEffect } from "react";
import useExamDetails from "@/app/api/ExamDetails";
import endQuestion from "@/app/api/questionEnds";
import { endExam } from "@/app/api/ExamEnds";
import { githubToken } from "../Quiz_Component/review-guidelines";
import { useRouter } from "next/navigation";

interface TimerProps {
  isActive: boolean;
}
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
  durationInMinutes: number;
  actualStartTime: string;
}

interface ExamDetailsResponse {
  data: {
    data: ExamDetailsData;
  };
}

interface UseExamDetailsResult {
  examDetails: ExamDetailsResponse | null;
}

const Timer: React.FC<TimerProps> = ({ isActive }) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const { examDetails } = useExamDetails() as UseExamDetailsResult;
  const github_token = githubToken();
  const router = useRouter();

  useEffect(() => {
    if (examDetails && examDetails.data && examDetails.data.data) {
      const { durationInMinutes, actualStartTime } = examDetails.data.data;
      const actualStartTimeMs = new Date(actualStartTime).getTime();
      const currentTimeMs = new Date().getTime();
      const elapsedTimeInMinutes =
        (currentTimeMs - actualStartTimeMs) / (1000 * 60);
      const remainingTimeInMinutes = durationInMinutes - elapsedTimeInMinutes;

      if (remainingTimeInMinutes > 0) {
        setMinutes(Math.floor(remainingTimeInMinutes));
        setSeconds(Math.floor((remainingTimeInMinutes % 1) * 60));
      } else {
        setMinutes(0);
        setSeconds(0);
      }
    }
  }, [examDetails]);

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

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            if (minutes === 0) {
              clearInterval(interval);
              endAssessment();
              router.push("/student/completion-message?timerFinished=true"); // Redirect to completion page
              console.log("Timer finished!");
              return 0;
            } else {
              setMinutes(minutes - 1);
              return 59;
            }
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  return (
    <div className="flex flex-row gap-2 items-center bg-white px-4 py-2 rounded-bl-lg">
      <div className="">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1H9V3H15V1ZM11 14H13V8H11V14ZM19.03 7.39L20.45 5.97C20.02 5.46 19.55 4.98 19.04 4.56L17.62 5.98C16.0273 4.69833 14.0443 3.99969 12 4C7.03 4 3 8.03 3 13C3 17.97 7.02 22 12 22C13.6943 22.0009 15.3544 21.5232 16.7891 20.622C18.2238 19.7207 19.3748 18.4325 20.1094 16.9057C20.8441 15.379 21.1325 13.6758 20.9415 11.9923C20.7506 10.3087 20.088 8.71341 19.03 7.39ZM12 20C8.13 20 5 16.87 5 13C5 9.13 8.13 6 12 6C15.87 6 19 9.13 19 13C19 16.87 15.87 20 12 20Z"
            fill="black"
          />
        </svg>
      </div>
      <div>
        <span className="text-base font-semibold">
          {minutes < 10 ? `0${minutes}` : minutes}
        </span>
        :
        <span className="text-base font-semibold">
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
    </div>
  );
};

export default Timer;
