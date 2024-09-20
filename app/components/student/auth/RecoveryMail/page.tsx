"use client";
import { useState } from "react";
import { forgotPin } from "@/app/api/forgotPin";
import toast, { Toaster } from "react-hot-toast";

const RecoveryMail = () => {
  const [recoveryMail, setRecoveryMail] = useState("");

  const handleRecovery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await forgotPin(recoveryMail);
      console.log(data);
      if (data.status === "success") {
        toast.success("Reset password mail sent");
      } else {
        throw new Error("Reset failed");
      }
    } catch (error) {
      toast.error("Reset password failed. Please try again.");
    }
  };

  return (
    <div className="mb-40 lg:w-[600px] w-[360px] lg:m-auto mr-5">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "18px",
            padding: "16px",
            minWidth: "300px",
          },
        }}
      />
      <div className="text-[#191C45] text-[24px] sm:text-[28px] md:text-[32px] font-semibold mb-6 mx-3 sm:mb-8 sm:mx-4">
        Let’s recover your account
      </div>
      <form onSubmit={handleRecovery} className="h-auto">
        <input
          type="email"
          value={recoveryMail}
          onChange={(e) => setRecoveryMail(e.target.value)}
          className="w-full h-[50px] sm:h-[55px] md:h-[60px] bg-white placeholder:text-black rounded-lg p-4 sm:p-5 m-2 sm:m-3 text-sm sm:text-base"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="w-full h-12 sm:h-14 rounded-[28px] sm:rounded-[36px] text-white text-lg sm:text-xl mt-8 sm:mt-10 m-2 sm:m-3 bg-[#191C45] mb-8 sm:mb-10"
        >
          Send PIN reset link
        </button>
      </form>
    </div>
  );
};

export default RecoveryMail;
