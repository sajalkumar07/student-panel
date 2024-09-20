import React from "react";
import Auth from "@/app/components/student/auth/page";
import Welcome from "@/app/components/student/auth/Welcome/page";
function LoginPage() {
  return (
    <div className="h-screen  w-screen flex flex-col md:flex-row font-sans bg-[#F0F2F6]">
      <div className="w-full md:w-[600px] lg:w-[600px]  shadow-sm  border-r text-[#191C45]">
        <Welcome />
      </div>
      <div className="flex justify-center items-center w-screen bg-[#F0F2F6] flex-grow">
        <Auth />
      </div>
    </div>
  );
}

export default LoginPage;
