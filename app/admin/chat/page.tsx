"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import Header from "@/app/components/admin/Home/header/Header";
import Sidebar from "@/app/components/admin/Home/sidebar/Sidebar";
import SearchBarChat from "@/app/components/admin/Chat/SearchBarChat";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";

const responses: { [key: string]: string } = {
  hello: "Hello! How can I assist you?",
  "how are you": "I'm just a bot, but thanks for asking!",
  goodbye: "Gooodbye! Have a great day!",
  "I want to create an assessment": "What do you want to name the assessment?",
  "College XYZ Prelim Test": "What topic do you want the test to be on?",
  "Front End Dev": "Let's start adding questions for College XYZ Prelim Test",
};

const ChatPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const searchParams = useSearchParams();
  const userInput = searchParams.get("input") || "";
  const [response, setResponse] = useState<string>("");
  const [conversationHistory, setConversationHistory] = useState<
    { input: string; response: string }[]
  >([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const generateResponse = (input: string): string => {
    const cleanedInput = input.toLowerCase().trim();
    for (const key in responses) {
      if (cleanedInput === key.toLowerCase()) {
        return responses[key];
      }
    }
    return "I'm sorry, I didn't understand that.";
  };

  useEffect(() => {
    if (userInput) {
      const currentResponse = generateResponse(userInput);
      setResponse(currentResponse);
      setConversationHistory((prevHistory) => [
        ...prevHistory,
        { input: userInput, response: currentResponse },
      ]);
    }
  }, [userInput]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [conversationHistory]);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-zinc-950 text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div
          className="flex flex-1 flex-col items-center justify-center overflow-y-auto max-h-[calc(100vh-120px)]"
          ref={chatContainerRef}
        >
          {conversationHistory.map((chat, index) => (
            <div key={index} className="max-w-md w-full mb-4 mx-auto">
              <div className="flex items-center p-4 rounded-md">
                <img
                  src="/images/Liftu-Image.jpeg"
                  alt="User"
                  width={48}
                  height={48}
                  className="h-6 w-6 mr-3 rounded-2xl"
                />
                {chat.input}
              </div>
              <div className="flex items-center p-4 rounded-md">
                <img
                  src="/images/liftu-bot.png"
                  alt="ChatBot"
                  width={48}
                  height={48}
                  className="h-6 w-6 mr-3 rounded-2xl"
                />
                {chat.response}
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-bottom items-center gap-3">
          <SearchBarChat
            setUserInput={(input) =>
              setConversationHistory((prevHistory) => [
                ...prevHistory,
                { input, response: generateResponse(input) },
              ])
            }
          />
        </div>
      </div>
    </div>
  );
};

const SuspendedChatPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ChatPage />
  </Suspense>
);

export default SuspendedChatPage;
