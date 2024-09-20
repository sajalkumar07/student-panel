"use client"
import React, { useState } from "react";
import Next from "../GiveAssessment_Components/Next";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

function QuizApp() {
  const questions: Question[] = [
    {
      question:
        "What is the best way to sort a Large Table containing mix of linked data? ",
      options: ["option1", "option2", "option3", "option4"],
      correctAnswer: "4",
    },
    {
      question: "What is 1 + 2?",
      options: ["4", "3", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 2 + 1?",
      options: ["4", "3", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 2 + 2?",
      options: ["4", "3", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 2 + 2?",
      options: ["4", "3", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 2 + 2?",
      options: ["4", "3", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 2 + 2?",
      options: ["4", "3", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 2 + 2?",
      options: ["4", "3", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 2 + 2?",
      options: ["4", "3", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 2 + 2?",
      options: ["4", "3", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris",
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrev = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  return (
    <div className="flex flex-col h-[90vh]  items-center justify-between">
      <div className="w-[992px] h-[225px] py-[40px] px-[160px] rounded-[8px] bg-[white] mt-10">
        {currentQuestion < questions.length && (
          <div className="w-[672px] h-[145px]">
            <p>{questions[currentQuestion].question}</p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <div className="flex gap-[16px]">
                  <input type="checkbox" />
                  <li key={index}>{option}</li>
                </div>
              ))}
            </ul>
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

export default QuizApp;