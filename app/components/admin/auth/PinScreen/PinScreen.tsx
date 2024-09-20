"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { CircleSpinner } from "react-spinners-kit";

interface TPinScreenProps {
  handleSignup?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pin: string
  ) => Promise<void>;
  showLoading?: boolean;
}
const PinScreen: React.FC<TPinScreenProps> = ({
  handleSignup,
  showLoading,
}) => {
  const [initialPin, setInitialPin] = useState<string[]>(new Array(6).fill(""));
  const [confirmPin, setConfirmPin] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState<string>("");
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

  const handleNextClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const initialPinValue = initialPin.join("");
    const confirmPinValue = confirmPin.join("");

    if (initialPinValue === confirmPinValue) {
      handleSignup && handleSignup(e, confirmPinValue);
    } else {
      setError("PINs do not match. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-start mb-4">
        <div className="font-source-sans-pro text-2xl font-normal mb-4">
          Create your PIN
        </div>
        <div className="flex mb-4">
          {initialPin.map((_, index) => (
            <input
              key={index}
              ref={(ref) => setInitialPinRef(ref, index)}
              className="w-12 h-12 text-4xl text-center m-2 border border-gray-300 rounded"
              type="text"
              value={initialPin[index]}
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
              type="text"
              value={confirmPin[index]}
              maxLength={1}
              onChange={(e) => handleConfirmPinChange(index, e.target.value)}
            />
          ))}
        </div>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        className="w-full h-14 rounded-[36px] text-white text-xl mt-10 m-3 bg-[#191C45] mb-10 flex justify-center items-center hover:bg-[#3C59B3]"
        onClick={handleNextClick}
      >
        {showLoading ? <CircleSpinner /> : "Next"}
      </button>
    </div>
  );
};

export default PinScreen;
