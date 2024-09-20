import React from "react";
import Welcome from "@/app/components/student/auth/Pin/page";
import ForgotPin from "@/app/components/student/auth/ResetPin/page";
function ForgotPage() {
  return (
    <div className="h-screen  w-screen flex flex-col md:flex-row font-sans bg-[#F0F2F6">
      <div className="w-full md:w-[600px] lg:w-[600px] shadow-sm border-r text-[#191C45]">
        <Welcome></Welcome>
      </div>
      <div className="flex justify-center items-center w-full bg-[#F0F2F6] flex-grow">
        <ForgotPin />
      </div>
    </div>
  );
}

export default ForgotPage;
