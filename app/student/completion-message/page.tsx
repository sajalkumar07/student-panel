import React from "react";
import CompletionMessage from "@/app/components/student/Completion_Message/CompletionMessage";

const Page: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-[#F5F5F5]">
      <div className="flex justify-between">
        <CompletionMessage />
      </div>
    </div>
  );
};

export default Page;
