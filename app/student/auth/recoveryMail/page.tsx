import React from "react";
import RecoveryMail from "@/app/components/student/auth/RecoveryMail/page";
import Welcome from "@/app/components/student/auth/Welcome/page";
function RecoveryPage() {
  return (
    <div className="h-screen  w-screen flex flex-col md:flex-row font-sans bg-[#F0F2F6]">
      <div className="w-full md:w-[600px] lg:w-[600px]  shadow-sm  border-r text-[#191C45]">
        <Welcome />
      </div>
      <div className="flex justify-center items-center w-screen bg-[#F0F2F6] flex-grow">
        <RecoveryMail />
      </div>
    </div>
  );
}

export default RecoveryPage;
