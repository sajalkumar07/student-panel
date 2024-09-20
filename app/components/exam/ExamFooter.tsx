import Link from "next/link";
import React from "react";

export interface IExamFooterProps {
  btnLinkURL: string;
  isEnabled: boolean;
  onButtonClick: () => void;
  btnText?: string;
}
export const ExamFooter = (props: IExamFooterProps) => {
  const { btnLinkURL, isEnabled, onButtonClick, btnText } = props;
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="flex justify-center items-center gap-4">
        <img className="w-6 h-6" src="/images/liftU-log.png" alt="" />
        <div className="text-xs">Powered by Liftu.tech</div>
      </div>
      <div>
        <Link href={btnLinkURL}>
          <button
            className={`px-4 py-2 text-[#FFFFFF] font-bold rounded-[32px] ${
              isEnabled
                ? "bg-[#191C45] hover:bg-[#4D80F4] focus:text-[#3E721E] focus:bg-[#F0F2F6]"
                : "bg-[#CCCCCC]"
            }`}
            disabled={!isEnabled}
            onClick={() => {
              onButtonClick();
            }}
          >
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};
