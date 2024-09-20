"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

let queryCode: string | null;

interface ReviewGuidelinesProps {
  enableFooterBtn: (flg: boolean) => void;
}

const ReviewGuidelines: React.FC<ReviewGuidelinesProps> = (
  props: ReviewGuidelinesProps
) => {
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isSubmitted, setSubmitted] = useState(false);
  const [code, setCode] = useState<string | null>(null);

  // github access token after redirection from github authentication.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      queryCode = queryParams.get("code");

      if (queryCode) {
        setCode(queryCode);
        console.log("github-token:", queryCode);
        setSubmitted(true);
        props.enableFooterBtn(true);
      }
    }
  }, []);

  // Check if the provided github username is valid according to github username rules.
  const validateUsername = (username: string): boolean => {
    const githubUsernameRegex = /^(?!.*--)[a-zA-Z\d-]{1,39}(?<!-)$/;
    return githubUsernameRegex.test(username);
  };

  const handleGitHubLogin = () => {};

  return (
    <div className="flex flex-1 flex-row bg-white">
      <div className="grow flex-1 rounded-lg  flex flex-col lg:flex-row  p-2 lg:p-10 justify-start items-center lg:overflow-hidden overflow-scroll">
        <div className="flex lg:flex-1 flex-col lg:flex-row gap-4 lg:gap-10">
          <div className="flex items-center lg:basis-2/6">
            <h1 className="lg:text-[64px] text-[32px] font-sans">
              Code Assessment Section Guidelines
            </h1>
          </div>
          <div className="flex flex-1 lg:basis-4/6 flex-col gap-6 font-sans font-normal justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl lg:text-2xl font-sans font-normal">
                Link to your GitHub
              </h1>
              <p className="text-base font-normal">
                We need your GitHub username to invite you to the private
                repository we will create for you.
              </p>
              <div className="">
                <Link
                  href={`https://github.com/login/oauth/authorize?client_id=Ov23liWuV5m13vBUcydR&scope=user:email&redirect_uri=https://test.liftu.tech/student/give-assessment/review-guide`}
                >
                  <button
                    onClick={handleGitHubLogin}
                    className={`py-2 px-4 rounded-3xl font-bold ${
                      isSubmitted
                        ? " text-[#3E721E] bg-[#F0F2F6] cursor-not-allowed"
                        : "bg-[#191C45] hover:bg-[#4D80F4] text-white cursor-pointer"
                    }`}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? "Authenticated" : "Authenticate on GitHub"}
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl lg:text-2xl font-sans">
                Instructions for Pull Request
              </h1>
              <div className="flex flex-row gap-5 p-5 items-center border border-black rounded-lg">
                <div className="">
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0H6V2H12V0ZM8 13H10V7H8V13ZM16.03 6.39L17.45 4.97C17.02 4.46 16.55 3.98 16.04 3.56L14.62 4.98C13.0273 3.69833 11.0443 2.99969 9 3C4.03 3 0 7.03 0 12C0 16.97 4.02 21 9 21C10.6943 21.0009 12.3544 20.5232 13.7891 19.622C15.2238 18.7207 16.3748 17.4325 17.1094 15.9057C17.8441 14.379 18.1325 12.6758 17.9415 10.9923C17.7506 9.30874 17.088 7.71341 16.03 6.39ZM9 19C5.13 19 2 15.87 2 12C2 8.13 5.13 5 9 5C12.87 5 16 8.13 16 12C16 15.87 12.87 19 9 19Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p className="">
                  You will have <strong>90 minutes </strong> to complete the
                  test
                </p>
              </div>
              <p>
                In the question screen you will see a link that will take you to
                a private GitHub repository that we created for you. Once you
                visit the link, you will create a pull request based on the
                question.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl lg:text-2xl font-sans">
                Instructions for Submission
              </h1>
              <p>
                Once your done with your code changes and pull request creation,
                you can click on the
                <strong> “I am done with my submission”</strong> checkbox and
                then proceed to the next question.
              </p>
              <p>
                Alternately if time runs out, your changes will automatically be
                submitted and your access to the GitHub repository will be
                removed. Make sure to commit your changes regularly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewGuidelines;

// export the github token to other files where required.
export const githubToken = () => {
  return queryCode;
};
