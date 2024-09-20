"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import useExamDetails from "@/app/api/ExamDetails";
import { useSearchParams } from "next/navigation";

const CompletionMessage: React.FC = () => {
  const [showImage, setShowImage] = useState(true);
  const { examDetails, error, errorResponse } = useExamDetails();
  const [message, setMessage] = useState("");
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const timerFinished = searchParams.get("timerFinished");
    console.log("timerFinished: ", timerFinished);

    if (timerFinished === "true") {
      console.log("Timer finished condition met");
      setShowImage(false);
      setMessage("Test submitted. Timer finished.");
    } else if (error) {
      console.log("Error condition met:", error, errorResponse);
      if (errorResponse == "not enrolled") {
        setShowImage(false);
        setMessage("You do not have any assessments right now!");
      } else if (errorResponse == "UNAUTHENTICATED_REQUEST") {
        setShowImage(false);
        setMessage("Unauthenticated User.");
      } else {
        setShowImage(false);
        setMessage(error);
      }
    } else {
      setMessage("Congratulations on completing the assessment!");
      setSrc("/images/congratulations-image.jpg");
      setAlt("Congratulations");
    }
  }, [error, errorResponse, searchParams]);

  return (
    <div className="w-screen h-screen bg-[#F5F5F5] grid grid-rows-[1fr_auto] p-4 md:p-10 rounded-md">
      <div className="w-full h-[90%]  gap-y-3 bg-white p-6 flex flex-col items-center justify-center overflow-hidden">
        <div className="p-2">
          <h1 className="font-sans font-semibold text-xl md:text-2xl text-center">
            {message}
          </h1>
        </div>
        <div>
          <Image
            src={src}
            alt={alt}
            className={showImage ? "visible" : "hidden"}
            width={400}
            height={200}
          />
        </div>
        <div className="">
          <h1 className="font-sans text-xl md:text-[17px] text-center">
            You will receive a mail when results are published.
          </h1>
        </div>
        <div>
          <h1 className="font-sans text-xl md:text-[17px] text-center">
            You can close this window.
          </h1>
        </div>
      </div>

      <div className="flex justify-center gap-[20px] absolute bottom-5 left-0 right-0">
        <div className="flex items-center gap-[16px]">
          <img
            className="w-[36px] h-[36px]"
            src="https://s3-alpha-sig.figma.com/img/0505/4007/8e151362a672011e812c2d882ecc0ac6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ihSJUoKp24x8rDRyAWKWHe5MFTzZ7oxIPNcOsqatJbEzQvA3S6iZinz3K4JP4-SUNGQ5s1adbDDAkckCRyvgdsPtn6vRBhtbOeS2OOuR-YnvkDJLO~yKnm5OsDPQ6HNjcqqICuh2c2wCOawru0ZMgXU9-I1IoV-0h-Yh-ZYXLGFlDYLZvom5SlgO6rAJOnQxoT1U2qQxsVsBY8GSxa9ZAB0w6jjj1x54TQ2s20o3h6CJPfxWxvRhbSX2ALjwpFzeZqSUHV3hlaKdZznQM1lT8cNLeuS~kjYGUfEBr11xxL9j0RQFEx6~5b2cMphYSdgLCYuypVjIEeJ2m3Uo9O1i9g__"
            alt=""
          />
          <h1>Powered by Liftu.tech</h1>
        </div>
      </div>
    </div>
  );
};

export default CompletionMessage;
