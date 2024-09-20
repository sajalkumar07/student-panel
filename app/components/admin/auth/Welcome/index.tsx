import React from "react";

const Welcome: React.FC = () => {
  return (
    <>
      <div
        className={
          "w-[40%] h-[100vh] hidden md:flex rounded-br-[35px] flex-col justify-between bg-white shadow-xl"
        }
      >
        <div className="flex">
          <div className="w-[35%] h-[100px] bg-[#4D80F4] rounded-br-[80px]"></div>
          <div className="w-[25%] h-[100px] bg-[#F1C24D] rounded-tr-[100px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-[0px]"></div>
          <div className="w-[25%] h-[100px]">
            <div className="w-full h-[50px] bg-[#191C45] rounded-br-[80px] rounded-bl-[80px]"></div>
            <div className="w-full h-[50px] bg-[#3C59B3] rounded-tr-[80px] rounded-tl-[80px]"></div>
          </div>
          <div className="w-[15%] h-[100px] bg-[#4D80F4]"></div>
        </div>
        <div className="flex gap-[40px] items-center flex-col">
          <h1 className="w-[75%] font-bold flex items-center text-[3vw]">
            Welcome to Liftu.tech!
          </h1>
          <p className="w-[75%] font-semibold">
            From creating assessments for your requirements to hiring the right
            candidate. We are your one stop tech support!
          </p>
        </div>
        <div className="flex">
          <div className="w-[32%] h-[182px] flex flex-col">
            <div className="w-[55%] h-[82px] bg-[#4D80F4] rounded-tr-[0px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px]"></div>
            <div className="h-[100px] bg-[#191C45] rounded-br-[80px]"></div>
          </div>
          <div className="w-[32%] mt-20 h-[100px] bg-[#F1C24D] rounded-tl-[80px] rounded-bl-[80px]"></div>
          <div className="w-[18%] h-[70px] mt-28 bg-[#4D80F4] rounded-tr-[100px] rounded-tl-[0px] rounded-br-[100px] rounded-bl-[100px]"></div>
          <div className="w-[18%] h-[70px] mt-28 bg-[#3C59B3] rounded-[100%]"></div>
        </div>
      </div>
      <div
        className={
          "md:h-[100vh] flex md:hidden rounded-br-[35px] flex-col md:justify-between bg-white shadow-xl"
        }
      >
        <div className="flex">
          <div className="w-[35%] h-[100px] bg-[#4D80F4] rounded-br-[80px]"></div>
          <div className="w-[25%] h-[100px] bg-[#F1C24D] rounded-tr-[100px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-[0px]"></div>
          <div className="w-[25%] h-[100px]">
            <div className="w-full h-[50px] bg-[#191C45] rounded-br-[80px] rounded-bl-[80px]"></div>
            <div className="w-full h-[50px] bg-[#3C59B3] rounded-tr-[80px] rounded-tl-[80px]"></div>
          </div>
          <div className="w-[15%] h-[100px] bg-[#4D80F4]"></div>
        </div>
        <div className="flex gap-[20px] items-center flex-col py-8 ">
          <h1 className="w-[75%] font-bold flex items-center text-[1.5rem]  text-[#191C45]">
            Welcome to Liftu.tech!
          </h1>
          <p className="w-[75%] font-semibold ">
            From creating assessments for your requirements to hiring the right
            candidate. We are your one stop tech support!
          </p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
