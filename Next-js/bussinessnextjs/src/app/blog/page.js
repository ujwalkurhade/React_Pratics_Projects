import React from "react";

import Blog1 from "../Images/Blog1.png";
import BlogContant from "../component/BlogContant";
import Retangle4 from "../component/Retangle4";

const bloge = () => {
  return (
    <div>
      <div className="w-[100%] flex items-center justify-center flex-col">
        <div className="w-[318px] h-[135px] text-center">
          <span className="text-black text-[42px] font-bold leading-[74.72px] tracking-wide">
            Latest news
            <br />{" "}
          </span>
          <span className="text-sky-600 text-[42px] font-bold leading-[74.72px] tracking-wide">
            Updates
            <br />
          </span>
        </div>
        <div className="w-[432px] h-[71px] mt-[2rem] text-center text-neutral-500 text-xl font-medium leading-[37.90px]">
          Lorem Ipsum is simply dummy text of the printing.
        </div>
        <div className="w-[400px] h-[49px] bg-zinc-100 rounded-[10px] mt-[2rem] border-2 border-slate-950 overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-[100%] h-[100%] p-1 border-none"
          />
        </div>
        <div className="flex justify-between items-center m-[2rem] gap-5">
          <div className="w-[162px] h-12 bg-slate-200 rounded-[30px]">
            <div className="mt-2 text-center flex items-center justify-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum
            </div>
          </div>
          <div className="w-[162px] h-12 bg-slate-200 rounded-[30px]">
            {" "}
            <div className="mt-2 text-center flex items-center justify-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum
            </div>
          </div>
          <div className="w-[162px] h-12 bg-slate-200 rounded-[30px]">
            {" "}
            <div className="mt-2 text-center flex items-center justify-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum
            </div>
          </div>
          <div className="w-[162px] h-12 bg-slate-200 rounded-[30px]">
            {" "}
            <div className="mt-2 text-center flex items-center justify-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum
            </div>
          </div>
          <div className="w-[162px] h-12 bg-slate-200 rounded-[30px]">
            {" "}
            <div className="mt-2 text-center flex items-center justify-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] justify-center items-center flex mt-[5rem] mb-[4rem]">
        <div className="w-[80%] flex justify-center items-center gap-[4rem]">
          <div>
            <img
              className="w-[545px] h-[340px]"
              src={Blog1}
            />
          </div>
          <div className="flex  flex-col ">
            <div className="w-[525px] h-[92px] text-black text-[27px] font-semibold leading-[48.03px] tracking-tight">
              Lorem Ipsum is simply dummy text of the
              printing.
            </div>
            <div className="w-[525px] h-[105px] text-neutral-700 text-base mt-6 font-normal leading-[33.74px] tracking-tight">
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy
              text ever since the .
            </div>

            <div className="flex gap-4">
              <img
                className="w-[54px] h-[54px] rounded-full"
                src="https://via.placeholder.com/54x54"
              />
              <div className="flex  flex-col">
                <div className="text-black text-lg font-medium leading-[37.96px] tracking-tight">
                  Name here
                </div>
                <div className="text-neutral-500 text-sm font-normal leading-[29.53px] tracking-tight">
                  20.12.2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div>
        <BlogContant />
        <BlogContant />
      </div>
      <Retangle4 />
    </div>
  );
};

export default bloge;
