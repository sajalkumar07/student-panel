"use client";
import Welcome from "@/app/components/admin/auth/Welcome";
import React, { useState } from "react";

interface AuthService {
  sentResetLink(email: string): Promise<any>;
}
interface AuthServiceResponse {
  data: string;
  error: string | unknown;
}

const authService: AuthService = {
  sentResetLink: async (email) => {
    const responseObject: AuthServiceResponse = {
      data: "",
      error: "",
    };
    try {
      const response = await fetch(
        "https://api.liftu.tech/api/v1/user/recover",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "insomnia/2023.5.8",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      const details = await response.json();
      if (response.status !== 200) {
        throw new Error(`Error getting email`);
      }
      responseObject.data = details.data;
      return responseObject;
    } catch (error) {
      responseObject.error = error;
      return responseObject;
    }
  },
};

const ForgotPassword = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const response = await authService.sentResetLink(currentEmail);
    if (response.data) {
      setSuccess(response.data);
    } else {
      setError(response.error?.toString());
    }
  };

  return (
    <div className="h-screen w-full flex font-sans">
      <Welcome />
      <div className="flex justify-center items-center w-full bg-[#F0F2F6]">
        <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row m-3">
              <span className=" text-[#191C45] text-[32px] font-semibold  cursor-pointer">
                Let’s recover your account
              </span>
            </div>
            <form className="h-auto" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                value={currentEmail}
                onChange={(e) => setCurrentEmail(e.target.value)}
                className="w-full h-[60px] bg-white placeholder:text-black rounded-lg p-5 m-3 text-base"
                placeholder="Enter your email"
              />
              {error ? (
                <p className="ml-4 mb-7 text-red-500 text-sm sm:text-base">
                  {error}
                </p>
              ) : success ? (
                <p className="ml-4 mb-7 text-green-500 text-sm sm:text-base">
                  {success}
                </p>
              ) : (
                <p className="ml-4 mb-7 text-[#3C59B3] text-base cursor-pointer">
                  We'll send reset link to your email.
                </p>
              )}

              <button
                type="submit"
                className="w-full h-14 rounded-[36px] text-white text-xl bg-[#191C45] flex justify-center items-center hover:bg-[#3C59B3]"
              >
                Send PIN reset link
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
