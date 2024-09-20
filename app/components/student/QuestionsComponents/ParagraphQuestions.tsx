"use client"
import React, { useState } from "react";
import Next from "../GiveAssessment_Components/Next";
interface Question {
  question: string;
}

function ParagraphQuestions(): JSX.Element {
  const questions: Question[] = [
    {
      question:
        "What is the best way to sort a Large Table containing mix of linked data?",
    },
    {
      question: "What is 1 + 2?",
    },
    {
      question: "What is 2 + 1?",
    },
    {
      question: "What is 2 + 2?",
    },
    {
      question: "What is 2 + 2?",
    },
    {
      question: "What is 2 + 2?",
    },
    {
      question: "What is 2 + 2?",
    },
    {
      question: "What is 2 + 2?",
    },
    {
      question: "What is 2 + 2?",
    },
    {
      question: "What is 2 + 2?",
    },
    {
      question: "What is the capital of France?",
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const handleNext = (): void => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrev = (): void => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  return (
    <div className="flex flex-col h-[90vh]  items-center justify-between">
      <div className="w-[997px] h-[500px] py-[40px] px-[160px] rounded-[8px] bg-[white] mt-10">
        {currentQuestion < questions.length && (
          <div className="w-[677px] h-[145px]">
            <h1>{questions[currentQuestion].question}</h1>
            <textarea
              className="w-[677px] h-[380px] bg-[#F0F2F6] p-[16px] rounded-[8px] mt-5 border-none outline-none"
              placeholder="Type your answer here"
              name=""
              id=""
              cols={30}
              rows={10}
            ></textarea>
          </div>
        )}
      </div>
      <Next
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentQuestion={currentQuestion}
        questions={questions}
      />
    </div>
  );
}

export default ParagraphQuestions;
