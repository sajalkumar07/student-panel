"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

interface PinScreenProps {
  name: string;
  email: string;
  phone: string;
}

const PinScreen: React.FC<PinScreenProps> = ({ name, email, phone }) => {
  console.log(name, email, phone);
  const [initialPin, setInitialPin] = useState<string[]>(new Array(6).fill(""));
  const [confirmPin, setConfirmPin] = useState<string[]>(new Array(6).fill(""));
  const router = useRouter();
  const initialPinRefs = useRef<Array<HTMLInputElement | null>>([]);
  const confirmPinRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    initialPinRefs.current[0]?.focus();
  }, []);

  const setInitialPinRef = useCallback(
    (ref: HTMLInputElement | null, index: number) => {
      initialPinRefs.current[index] = ref;
    },
    []
  );

  const setConfirmPinRef = useCallback(
    (ref: HTMLInputElement | null, index: number) => {
      confirmPinRefs.current[index] = ref;
    },
    []
  );

  const handleInitialPinChange = (index: number, value: string) => {
    const newPin = [...initialPin];
    newPin[index] = value;
    setInitialPin(newPin);

    if (value.length === 1 && index < 5) {
      initialPinRefs.current[index + 1]?.focus();
    }
  };

  const handleConfirmPinChange = (index: number, value: string) => {
    const newPin = [...confirmPin];
    newPin[index] = value;
    setConfirmPin(newPin);

    if (value.length === 1 && index < 5) {
      confirmPinRefs.current[index + 1]?.focus();
    }
  };

  const handleNextClick = async () => {
    const initialPinValue = initialPin.join("");
    const confirmPinValue = confirmPin.join("");

    if (initialPinValue === confirmPinValue) {
      try {
        const response = await fetch("https://api.liftu.tech/api/v1/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            countryCode: "91",
            phone,
            passcode: initialPinValue,
          }),
        });

        if (response.status !== 200) {
          throw new Error(`Error signing up: Status Code ${response.status}`);
        }

        const details = await response.json();
        console.log(details);
        if (details) {
          toast.success("User created successfully");
          setTimeout(() => window.location.reload(), 2000);
        }
      } catch (error) {
        console.error(error);
        toast.error("Signup failed. Please try again.");
      }
    } else {
      toast.error("PINs do not match. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
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
      <div className="flex flex-col items-start mb-4">
        <div className="font-source-sans-pro text-2xl font-normal mb-4">
          Create your PIN
        </div>
        <div className="flex mb-4">
          {initialPin.map((_, index) => (
            <input
              key={index}
              ref={(ref) => setInitialPinRef(ref, index)}
              className="w-12 h-12 text-4xl text-center m-2 border border-gray-300 rounded no-caret"
              type="text"
              value={initialPin[index]}
              style={{ caretColor: "transparent" }}
              placeholder="-"
              maxLength={1}
              onChange={(e) => handleInitialPinChange(index, e.target.value)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start mb-4">
        <div className="font-source-sans-pro text-2xl font-normal mb-4">
          Confirm your PIN
        </div>
        <div className="flex mb-4">
          {confirmPin.map((_, index) => (
            <input
              key={index}
              ref={(ref) => setConfirmPinRef(ref, index)}
              className="w-12 h-12 text-4xl text-center m-2 border border-gray-300 rounded"
              style={{ caretColor: "transparent" }}
              placeholder="-"
              type="text"
              value={confirmPin[index]}
              maxLength={1}
              onChange={(e) => handleConfirmPinChange(index, e.target.value)}
            />
          ))}
        </div>
      </div>

      <button
        className="w-full h-14 rounded-[36px] text-white text-xl mt-10 m-3 bg-[#191C45] mb-10"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default PinScreen;
