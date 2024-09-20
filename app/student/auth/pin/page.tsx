import React from "react";
import PinScreen from "@/app/components/student/auth/PinScreen/PinScreen";
import Welcome from "@/app/components/student/auth/Pin/page";
function LoginPage() {
  return (
    <div className="h-screen  w-screen flex flex-col md:flex-row font-sans bg-[#F0F2F6">
      <div className="w-full md:w-[600px] lg:w-[600px] shadow-sm  border-r text-[#191C45]">
        <Welcome></Welcome>
      </div>
      <div className="flex justify-center items-center w-full bg-[#F0F2F6] flex-grow">
        <PinScreen name="" email="" phone="" />
      </div>
    </div>
  );
}

export default LoginPage;
