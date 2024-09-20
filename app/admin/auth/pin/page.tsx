import React from "react";
import PinScreen from "@/app/components/admin/auth/PinScreen/PinScreen";
import Welcome from "@/app/components/admin/auth/Pin";
function LoginPage() {
  return (
    <div className="h-screen w-full flex font-sans">
      <Welcome></Welcome>
      <div className="flex justify-center items-center w-full bg-[#F0F2F6]">
        <PinScreen />
      </div>
    </div>
  );
}

export default LoginPage;
