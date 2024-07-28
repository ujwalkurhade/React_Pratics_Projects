import React from "react";

import star from "../Images/Star.png";
import pichart from "../Images/PaiChart.png";

const Retangle4 = () => {
  return (
    <div className="mb-[8rem]">
      <img
        className="w-[66px] h-[66px] origin-top-left mt-[-1rem] rotate-[-24.80deg] absolute  ml-[10rem]"
        src={star}
      />
      <img
        className="w-[54px] h-[54px] absolute mt-[8rem] ml-[65rem]"
        src={pichart}
      />

      <div className="w-[100%] h-[534px] bg-indigo-50 flex justify-center items-center flex-col gap-20">
        <div className="w-[516px] h-[91px] text-center text-neutral-800 text-3xl font-semibold leading-[51px]">
          Lorem Ipsum is simply dummy text of the printing.{" "}
        </div>
        <div className="flex gap-10">
          <div className="w-[532px] h-[67px] bg-white rounded-[10px] shadow">
            <div className="text-center text-neutral-500 text-base font-normal leading-7">
              <input
                type="text"
                placeholder=" Enter your email"
                className="w-[100%] h-[67px] p-5"
              />
            </div>
          </div>
          <div className="w-[173px] h-[67px] bg-black rounded-[10px] flex justify-center items-center">
            <div className="text-center text-red-50 text-base font-medium leading-7">
              <button type="button" className="w-[100%]">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retangle4;
