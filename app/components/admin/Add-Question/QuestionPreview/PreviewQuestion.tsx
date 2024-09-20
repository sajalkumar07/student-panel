import React from "react";

const PreviewQuestion = () => {
  return (
    <div className="border-t border-white border-solid rounded-[70px] pb-4 ">
      <div className="text-[#AED69F]  mt-5 ">
        <div className="mx-10">
          <pre>Previewing Question paper.</pre>
          <p className="text-[#AED69F] pr-">
            You can keep on adding questions by typing in chat or remove
            questions from question paper by clicking on the “Cross”
          </p>
        </div>

        <div className="py-2 flex space-x-4 mx-10">
          <div>
            <button className="bg-[#1c1c1c] text-white  rounded-full  w-38 flex justify-center items-center px-4">
              Curate from our question bank
            </button>
          </div>
          <div>
            <button className="bg-[#1c1c1c] text-white  rounded-full  w-28 flex justify-center items-center ">
              Publish Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewQuestion;
