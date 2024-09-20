import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="w-[100%] bg-white  lg:h-[100%] h-full flex rounded-br-[50px] flex-col justify-between shadow-lg">
      <div className="flex ">
        <div className="w-[35%] h-[100px] bg-[#4D80F4] rounded-br-[80px]"></div>
        <div className="w-[25%] h-[100px] bg-[#F1C24D] rounded-tr-[100px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-[0px]"></div>
        <div className="w-[25%] h-[100px]">
          <div className="w-full h-[50px] bg-[#191C45] rounded-br-[80px] rounded-bl-[80px]"></div>
          <div className="w-full h-[50px] bg-[#3C59B3] rounded-tr-[80px] rounded-tl-[80px]"></div>
        </div>
        <div className="w-[15%] h-[100px] bg-[#4D80F4]"></div>
      </div>
      <div className="flex gap-8 items-center flex-col md:p-auto">
        <h1 className="md:w-[75%] w-[80%] font-bold flex md:text-[3vw] text-[5vw] md:m-auto mt-[10px] lg:pt-0 pt-5">
          Welcome to Liftu.tech!
        </h1>
        <p className="md:w-[75%] w-[80%] font-semibold md:m-auto mb-[20px] lg:pb-0 pb-3">
          Upskill, assess and apply to your dream jobs, all under one banner.
        </p>
      </div>
      <div className="hidden md:flex justify-between">
        <div className="w-[32%] h-[182px] flex flex-col">
          <div className="w-[55%] h-[82px] bg-[#4D80F4] rounded-tr-[0px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px]"></div>
          <div className="h-[100px] bg-[#191C45] rounded-br-[80px]"></div>
        </div>
        <div className="w-[32%] mt-20 h-[100px] bg-[#F1C24D] rounded-tl-[80px] rounded-bl-[80px]"></div>
        <div className="w-[18%] h-[70px] mt-28 bg-[#4D80F4] rounded-tr-[100px] rounded-tl-[0px] rounded-br-[100px] rounded-bl-[100px]"></div>
        <div className="w-[18%] h-[70px] mt-28 bg-[#3C59B3] rounded-[100%]"></div>
      </div>
    </div>
  );
};

export default Welcome;
