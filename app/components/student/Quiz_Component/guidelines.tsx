"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GuidelinesProps {
  enableFooterBtn: (flg: boolean) => void;
}

const Guidelines: React.FC<GuidelinesProps> = (props: GuidelinesProps) => {
  const [isAgreed, setIsAgreed] = useState(false);

  function handleAgreed() {
    setIsAgreed(true);
    props.enableFooterBtn(true);
  }

  return (
    <div className="flex flex-1 flex-row">
      <div className="flex flex-col flex-1 gap-4 lg:gap-14">
        <div className="grow flex-1 rounded-lg bg-white flex flex-col lg:flex-row  p-2 lg:p-10 justify-center items-center lg:overflow-hidden overflow-scroll">
          <div className="flex lg:flex-1 flex-col lg:flex-row gap-4 lg:gap-10">
            <div className="flex items-center lg:basis-2/6">
              <h1 className="lg:text-[64px] text-[32px] font-sans">
                Guidelines
              </h1>
            </div>
            <div className="flex-1 lg:basis-4/6 flex-col gap-10 font-sans font-normal justify-center">
              <div className="flex flex-col mb-6 gap-4">
                <h1 className="lg:text-3xl text-[20px] font-sans">
                  General Instructions
                </h1>
                <div className="lg:p-5 items-center p-5 border border-black rounded-lg flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0H6V2H12V0ZM8 13H10V7H8V13ZM16.03 6.39L17.45 4.97C17.02 4.46 16.55 3.98 16.04 3.56L14.62 4.98C13.0273 3.69833 11.0443 2.99969 9 3C4.03 3 0 7.03 0 12C0 16.97 4.02 21 9 21C10.6943 21.0009 12.3544 20.5232 13.7891 19.622C15.2238 18.7207 16.3748 17.4325 17.1094 15.9057C17.8441 14.379 18.1325 12.6758 17.9415 10.9923C17.7506 9.30874 17.088 7.71341 16.03 6.39ZM9 19C5.13 19 2 15.87 2 12C2 8.13 5.13 5 9 5C12.87 5 16 8.13 16 12C16 15.87 12.87 19 9 19Z"
                      fill="black"
                    />
                  </svg>
                  <p className=" ml-3 lg:text-[16px] text-[16px]">
                    You will have <strong>90 minutes </strong>to complete the
                    test
                  </p>
                </div>
                <div className="lg:p-5 items-center p-5 border border-black rounded-lg flex lg:h-auto h-[64px">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7V13H15"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 17C3 14.6131 3.94821 12.3239 5.63604 10.636C7.32387 8.94821 9.61305 8 12 8C14.2149 8.00226 16.3511 8.82116 18 10.3L21 13"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.4902 18.7783L4.35742 5"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>

                  <p className="ml-3">
                    You <strong>cannot revisit</strong> questions
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="lg:text-3xl text-[20px] font-sans">
                  Rules to follow for proctoring
                </h1>
                <div className="p-5 items-center border border-black rounded-lg flex flex-row gap-3">
                  <svg
                    className="lg:w-[24px] w-[35px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H16.83L15 2H9L7.17 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4ZM20 18H4V6H8.05L9.88 4H14.12L15.95 6H20V18ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z"
                      fill="black"
                    />
                  </svg>
                  <p className="">
                    You will need to keep your <strong>camera on</strong> for
                    proctoring reasons
                  </p>
                </div>
                <div className="p-5 items-center border border-black rounded-lg flex flex-row gap-3">
                  <svg
                    className="lg:w-[24px] w-[35px]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 14C11.1667 14 10.4583 13.7083 9.875 13.125C9.29167 12.5417 9 11.8333 9 11V5C9 4.16667 9.29167 3.45833 9.875 2.875C10.4583 2.29167 11.1667 2 12 2C12.8333 2 13.5417 2.29167 14.125 2.875C14.7083 3.45833 15 4.16667 15 5V11C15 11.8333 14.7083 12.5417 14.125 13.125C13.5417 13.7083 12.8333 14 12 14ZM11 21V17.925C9.26667 17.6917 7.83333 16.9167 6.7 15.6C5.56667 14.2833 5 12.75 5 11H7C7 12.3833 7.48767 13.5627 8.463 14.538C9.43833 15.5133 10.6173 16.0007 12 16C13.3833 16 14.5627 15.5123 15.538 14.537C16.5133 13.5617 17.0007 12.3827 17 11H19C19 12.75 18.4333 14.2833 17.3 15.6C16.1667 16.9167 14.7333 17.6917 13 17.925V21H11ZM12 12C12.2833 12 12.521 11.904 12.713 11.712C12.905 11.52 13.0007 11.2827 13 11V5C13 4.71667 12.904 4.47933 12.712 4.288C12.52 4.09667 12.2827 4.00067 12 4C11.7167 4 11.4793 4.096 11.288 4.288C11.0967 4.48 11.0007 4.71733 11 5V11C11 11.2833 11.096 11.521 11.288 11.713C11.48 11.905 11.7173 12.0007 12 12Z"
                      fill="black"
                    />
                  </svg>
                  <p className="">
                    You will need to keep your <strong>mic on </strong>for
                    proctoring reasons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div
            className="flex flex-row gap-4 lg:gap-10 bg-white rounded-lg p-3 items-center sm:items-start"
            onClick={handleAgreed}
          >
            <div className="w-6 h-6 relative">
              {isAgreed ? (
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
              I have read the guidelines and agree to give the test to the best
              of capabilities without resorting to underhanded means
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
