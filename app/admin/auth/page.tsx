"use client";
import React, { useState } from "react";
import Welcome from "@/app/components/admin/auth/Welcome";
import WelcomeForPinScreen from "@/app/components/admin/auth/Pin";
import Auth from "@/app/components/admin/auth";

function LoginPage() {
  const [showPinScreen, setShowPinScreen] = useState<boolean>(false);

  return (
    <div className="h-screen w-full flex flex-col md:flex-row font-sans">
      {showPinScreen ? <WelcomeForPinScreen /> : <Welcome />}
      <div className="flex justify-center items-center w-full bg-[#F0F2F6]">
        <Auth
          showPinScreen={showPinScreen}
          setShowPinScreen={setShowPinScreen}
        ></Auth>
      </div>
    </div>
  );
}

export default LoginPage;
