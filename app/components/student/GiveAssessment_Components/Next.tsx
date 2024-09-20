import React from "react";

interface NextProps {
  handleNext: () => void;
  handlePrev: () => void;
  currentQuestion: number;
  questions: any[]; // Replace 'any' with the actual type of the questions array
}

const Next: React.FC<NextProps> = ({
  handleNext,
  handlePrev,
  currentQuestion,
  questions,
}) => {
  return (
    <div className=" flex items-center gap-[110px] ">
      <div className="flex items-center gap-[16px] ">
        <img
          className="w-[36px] h-[36px]"
          src="https://s3-alpha-sig.figma.com/img/0505/4007/8e151362a672011e812c2d882ecc0ac6?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YduJeFGgPsIAHlrThlrtP7FsveNwMRF~~oQ8Z60Wh0XHSKxksPrtI1wcZDQ1P55pWwZJVnOL8o0pUl3andQn9uAp9kxUgV9bsFe80edae5HnSUpR8y6F4QRb2~1fKu023Uw4P1s2hZGtEt2x9iVlq644LQWAPSJ9Xmc7zrRUP~nffdgGXsLSy2ysiam5uULg-oq6dB8WcnG8ZAGPziVq7DNcX55L20Iy8N74inPUntkvM4fUWN8gAeuOZ~EXiB3zFx5UAqf0E-MrS37GLOoS2SIm6RwcfsoMFkkfIP1cnRS7i0l-OLPwtdwvOB5wOS50kENVgA0MI3Tz2pGNwWs6pA__"
          alt=""
        />
        <h1>Powered by Liftu.tech</h1>
      </div>
      <div className="flex gap-[20px]">
        {currentQuestion > 0 && (
          <div className="w-[136px] h-[52px] flex justify-evenly  items-center  text-white  rounded-[32px]  bg-[#191C45]">
            <svg className="transform rotate-180"
            width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.885 24.885L15 27L24 18L15 9L12.885 11.115L19.755 18L12.885 24.885Z" fill="white"/>
</svg>

            <button onClick={handlePrev}>Previous</button>
          </div>
        )}
        {currentQuestion < questions.length - 1 && (
          <div className="w-[136px] h-[52px] flex justify-evenly  items-center text-white rounded-[32px] bg-[#191C45]">
            <button className="w-[42px] h-[25px]" onClick={handleNext}>Next</button>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.885 24.885L15 27L24 18L15 9L12.885 11.115L19.755 18L12.885 24.885Z" fill="white"/>
</svg>

          </div>
        )}
      </div>
    </div>
  );
};

export default Next;