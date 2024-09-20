"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <main className="container mx-auto px-4 py-8 flex-grow flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center mt-10 sm:mt-16 relative left-[10%] md:left-[5%] lg:left-[4%]">
        <h1 className="text-2xl sm:text-4xl font-sans font-medium">
          <span
            className={`text-[24px] md:text-[30px] lg:text-4xl font-sans font-medium ${
              isDarkMode
                ? "bg-gradient-to-r from-[#F2CA91] to-[#F67678] bg-clip-text text-transparent"
                : "bg-gradient-to-r from-[#F2CA91] to-[#F67678] bg-clip-text text-transparent"
            }`}
          >
            Hello, Username
          </span>
          <br />{" "}
          <p className=" text-[24px] md:text-[30px] lg:text-4xl text-neutral-500">
            How can I help you today?
          </p>
        </h1>
      </div>
      <div className="w-[55%] md:w-[60%] lg:w-[35%] grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mx-auto relative left-[10%] md:left-[5%] lg:left-[4%]">
        <div
          className={`w-full h-36 ${
            isDarkMode ? "bg-zinc-900" : "bg-[#F0F2F6]"
          } shadow-md rounded-lg p-4 flex flex-col items-center justify-center`}
        >
          <Link href="/admin/chat">
            <button className="flex flex-col items-center">
              <Image
                src="/images/create-assessment-img.png"
                alt="Create Assessment"
                width={48}
                height={48}
                className="mb-2"
              />
              <h3 className="text-lg font-sans text-center">
                Create an assessment
              </h3>
            </button>
          </Link>
        </div>

        <div
          className={`w-full h-36 ${
            isDarkMode ? "bg-zinc-900" : "bg-[#F0F2F6]"
          } shadow-md rounded-lg p-4 flex flex-col items-center justify-center`}
        >
          <Link href="/admin/view-assessment">
            <button className="flex flex-col items-center">
              <Image
                src="/images/view-assessment-img.png"
                alt="View Assessments"
                width={48}
                height={48}
                className="mb-2 sm:mb-0 sm:mr-2"
              />
              <h3 className="text-lg font-sans text-center pt-1">
                View Assessments
              </h3>
            </button>
          </Link>
        </div>

        <div
          className={`w-full h-36 ${
            isDarkMode ? "bg-zinc-900" : "bg-[#F0F2F6]"
          } shadow-md rounded-lg p-4 flex flex-col items-center justify-center`}
        >
          <button className="flex flex-col items-center">
            <Image
              src="/images/view-students-img.png"
              alt="View Students"
              width={48}
              height={48}
              className="mb-2 sm:mb-0 sm:mr-2"
            />
            <h3 className="text-lg font-sans text-center pt-1">
              View Students
            </h3>
          </button>
        </div>

        <div
          className={`w-full h-36 ${
            isDarkMode ? "bg-zinc-900" : "bg-[#F0F2F6]"
          } shadow-md rounded-lg p-4 flex flex-col items-center justify-center`}
        >
          <button className="flex flex-col items-center">
            <Image
              src="/images/view-reports-img.png"
              alt="View Reports"
              width={48}
              height={48}
              className="mb-2 sm:mb-0 sm:mr-2"
            />
            <h3 className="text-lg font-sans text-center pt-1">View Reports</h3>
          </button>
        </div>
      </div>
    </main>
  );
}
