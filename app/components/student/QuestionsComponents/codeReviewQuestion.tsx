"use client";
import React, { useState, useEffect } from "react";
import endQuestion from "@/app/api/questionEnds";
import StartQuestion from "@/app/api/questionStarts";
import { githubToken } from "../Quiz_Component/review-guidelines";
import Image from "next/image";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

interface prQuestions {
  question: string;
  id: number;
}

interface CodeReviewProps {
  currQuestion: number;
  setCurrQuestion: (question: number) => void;
  examDetails: ExamDetailsResponse | null;
  loading: boolean;
  error: any;
  enableFooterBtn: (flg: boolean) => void;
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

let prBasedQuestion: prQuestions[] = [];
let exam_id: number;

const CodeReview: React.FC<CodeReviewProps> = ({
  currQuestion,
  setCurrQuestion,
  examDetails,
  loading,
  error,
  enableFooterBtn,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [repoUrl, setRepoUrl] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);
  const github_token = githubToken();

  const router = useRouter();
  const [boolean, setBoolean] = useState(true);

  useEffect(() => {
    if (examDetails && boolean) {
      setBoolean(false);

      if (examDetails?.data?.data?.examSection) {
        prBasedQuestion = [];
        examDetails.data.data.examSection.forEach((section: ExamSection) => {
          section.examQuestions.forEach(
            (examQuestion: { question: ExamQuestion }) => {
              if (examQuestion.question.category === "pr based") {
                prBasedQuestion.push({
                  question: examQuestion.question.description,
                  id: examQuestion.question.id,
                });
              }
            }
          );
        });

        exam_id = examDetails.data.data.examSection[0].examId;
        const question_id = prBasedQuestion[currQuestion]?.id;

        const fetchQuestionResponse = async () => {
          try {
            const data = await StartQuestion(
              exam_id,
              question_id,
              github_token
            );
            // console.log("Repourl response 1");
            setRepoUrl(data.data.metadata.repoHtlmUrl);
          } catch (error: any) {
            handleError(error);
          }
        };

        fetchQuestionResponse();
      }
    }
  }, [examDetails, currQuestion, repoUrl]);

  useEffect(() => {
    console.log("Repo url resp", repoUrl);
  }, [repoUrl]);

  const handleError = (error: any) => {
    if (error.message === "Request failed with status code 409") {
      toast.error("Question already submitted.");
      setTimeout(() => {
        router.push("/student/completion-message");
      }, 2000);
    } else {
      toast.error(`Error: ${error.message}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading exam details. Please try again later.</p>;

  function handleCheck() {
    setIsSubmitted(true);
    enableFooterBtn(true);
  }

  // function NextQuestion() {
  //   const question_id = prBasedQuestion[currQuestion]?.id;
  //   endQuestion(exam_id, question_id, github_token)
  //     .then(() => {
  //       setCurrQuestion(currQuestion + 1);
  //       setIsSubmitted(false);
  //       return StartQuestion(
  //         exam_id,
  //         prBasedQuestion[currQuestion + 1]?.id,
  //         github_token
  //       );
  //     })
  //     .then((data) => {
  //       setRepoUrl(data.data.metadata.repoHtlmUrl);
  //     })
  //     .catch(handleError);
  // }

  function openRepo() {
    // console.log("Hii 2", repoUrl);
    if (repoUrl) {
      window.open(repoUrl);
    } else {
      toast.error("Repository URL is not available");
    }
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "18px",
            padding: "16px",
            minWidth: "300px",
          },
        }}
      />
      <div className="flex flex-1 flex-col">
        <div className="bg-white rounded-lg -mt-1 overflow-hidden flex grow">
          <div className="p-4 sm:p-6 lg:p-8  overflow-scroll">
            <div className="flex flex-col gap-y-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    prBasedQuestion[currQuestion]?.question
                  ),
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col bg-white rounded-lg ">
            <hr className=" border-t border-gray-200" />
            <div className="flex flex-row  items-center justify-center gap-4 lg:text-center px-5 py-5">
              <p className="text-sm sm:text-base  ">
                You will have to submit the answer to this question on GitHub.
              </p>
              <button
                className="flex items-center justify-center gap-x-2   px-4 py-2 text-xs sm:text-sm border border-[#4D80F4] text-[#4D80F4] rounded-full hover:bg-[#3C59B3] hover:text-white transition-colors duration-300"
                onClick={openRepo}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span className="lg:w-[150px] w-[100px] ">
                  Take me to GitHub
                </span>
                <Image
                  src={
                    hovered
                      ? "/images/external-link.png"
                      : "/images/external-link-blue.png"
                  }
                  height={16}
                  width={16}
                  alt=""
                  className="inline-block"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div
              className="flex flex-row gap-4 lg:gap-10 bg-white rounded-lg p-3 items-center sm:items-start"
              onClick={handleCheck}
            >
              <div className="w-6 h-6 relative">
                {isSubmitted ? (
                  <Image
                    src="/images/check.png"
                    className="cursor-pointer relative object-cover"
                    alt=""
                    fill
                  />
                ) : (
                  <Image
                    src="/images/square.png"
                    className="cursor-pointer relative object-cover"
                    alt=""
                    fill
                  />
                )}
              </div>
              <div className="lg:text-center text-sm lg:text-base font-normal">
                I am done with my submission on GitHub
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeReview;

export const TotalQuestions = () => {
  return prBasedQuestion;
};

export const examId = () => {
  return exam_id;
};
