import React from "react";

import happy from "../Images/happy.png";
import vector from "../Images/Vector4.png";
import RecentActivities from "../Images/RecentActivities.png";
import websitemockup from "../Images/website-mockup-png.png";
import focus from "../Images/focus.png";
const Retangle2 = () => {
  return (
    <div>
      <img
        src={vector}
        className="absolute  mt-[20rem] ml-[80px]"
      />

      <div className="mt-[10rem] flex justify-center flex-col ">
        <div className="flex justify-center flex-col items-center gap-7 ">
          <div className="w-[847px] h-11 text-center text-neutral-800 text-[33px] font-semibold leading-[52.80px]">
            Lorem Ipsum is simply dummy text of the
            printing.{" "}
          </div>
          <div className="w-[692px] text-center text-zinc-500 text-lg font-normal leading-loose ">
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum
            has been the industry's
          </div>
        </div>

        {/*  */}

        <div className="w-[100%]  flex  justify-center items-center mt-[100px]  mb-[2rem] ">
          <div className="flex flex-col gap-10 ">
            <div className="flex gap-5">
              <div className="w-[58px] h-[58px] bg-teal-500 rounded-full flex items-center justify-center">
                <img src={happy} />
              </div>
              <div>
                <div className="w-[308px] text-black text-[17px] font-medium leading-[29.75px]">
                  Lorem Ipsum is simply dummy text
                </div>
                <div className="w-[308px] text-zinc-500 text-sm font-normal leading-normal">
                  Lorem Ipsum is simply dummy text
                </div>
              </div>
            </div>
            <div className="  flex flex-col gap-5">
              <h2>
                <div className="w-[516px] h-[91px]">
                  <span className="text-sky-600 text-3xl font-semibold leading-[51px]">
                    Lorem Ipsum
                  </span>
                  <span className="text-neutral-800 text-3xl font-semibold leading-[51px]">
                    is simply dummy text of the printing.{" "}
                  </span>
                </div>
              </h2>

              <div className="w-[476px] h-[141px] text-neutral-600 text-base font-normal leading-7">
                KODEX TECHNOLOGY (PVT) LTD is a team of
                experienced mobile and web applications and
                website builders measuring dozens of
                completed projects. We build and develop
                mobile applications for several top
                platforms, including Android & IOS.{" "}
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[738px] h-[511px]"
              src={RecentActivities}
            />
          </div>
        </div>
        {/*  */}
        <div className="w-[100%]  flex  justify-center items-center  mt-[8rem] ">
          <div className="">
            <img
              className="w-[738px] h-[511px]"
              src={websitemockup}
            />
          </div>
          <div className="flex flex-col gap-5 mr-[4rem]">
            <div className="flex gap-5">
              <div className="w-[58px] h-[58px] bg-sky-500 rounded-full flex items-center justify-center">
                <img src={happy} className="bg-white" />
              </div>
              <div>
                <div className="w-[308px] text-black text-[17px] font-medium leading-[29.75px]">
                  Lorem Ipsum is simply dummy text
                </div>
                <div className="w-[308px] text-zinc-500 text-sm font-normal leading-normal">
                  Lorem Ipsum is simply dummy text
                </div>
              </div>
            </div>
            <div className="  flex flex-col gap-5">
              <h2>
                <div className="w-[516px] h-[91px]">
                  <span className="text-sky-600 text-3xl font-semibold leading-[51px]">
                    Lorem Ipsum
                  </span>
                  <span className="text-neutral-800 text-3xl font-semibold leading-[51px]">
                    is simply dummy text of the printing.{" "}
                  </span>
                </div>
              </h2>

              <div className="w-[476px] h-[141px] text-neutral-600 text-base font-normal leading-7">
                KODEX TECHNOLOGY (PVT) LTD is a team of
                experienced mobile and web applications and
                website builders measuring dozens of
                completed projects. We build and develop
                mobile applications for several top
                platforms, including Android & IOS.{" "}
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-[100%]  flex  justify-center items-center mt-[6rem] mb-[2rem]">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5">
              <div className="w-[58px] h-[58px] bg-purple-500 rounded-full flex items-center justify-center">
                <img src={happy} />
              </div>
              <div>
                <div className="w-[308px] text-black text-[17px] font-medium leading-[29.75px]">
                  Lorem Ipsum is simply dummy text
                </div>
                <div className="w-[308px] text-zinc-500 text-sm font-normal leading-normal">
                  Lorem Ipsum is simply dummy text
                </div>
              </div>
            </div>
            <div className="  flex flex-col gap-5">
              <h2>
                <div className="w-[516px] h-[91px]">
                  <span className="text-sky-600 text-3xl font-semibold leading-[51px]">
                    Lorem Ipsum
                  </span>
                  <span className="text-neutral-800 text-3xl font-semibold leading-[51px]">
                    is simply dummy text of the printing.{" "}
                  </span>
                </div>
              </h2>

              <div className="w-[476px] h-[141px] text-neutral-600 text-base font-normal leading-7">
                KODEX TECHNOLOGY (PVT) LTD is a team of
                experienced mobile and web applications and
                website builders measuring dozens of
                completed projects. We build and develop
                mobile applications for several top
                platforms, including Android & IOS.{" "}
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[738px] h-[511px]"
              src={focus}
            />
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="flex items-center justify-center gap-10 mt-[10rem] ">
        <div className="w-[572px] h-[459px] bg-zinc-100 rounded-[20px] flex justify-center items-center flex-col">
          <div className="w-[365px] h-[84px] text-center text-neutral-800 text-[25px] font-semibold leading-[42.50px]">
            Lorem Ipsum is simply dummy text.
          </div>
          <div className="w-[476px] h-[141px] text-center text-neutral-600 text-base font-normal leading-7 mt-5">
            KODEX TECHNOLOGY (PVT) LTD is a team of
            experienced mobile and web applications and
            website builders measuring dozens of completed
            projects. We build and develop mobile
            applications for several top platforms,
            including Android & IOS.{" "}
          </div>
          <div className="w-[153px] h-[49px] bg-sky-600 rounded-[10px] flex justify-center items-center">
            <div className="text-center text-white text-base font-medium leading-7">
              <button type="button" className="w-[100%]">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="w-[572px] h-[459px] bg-sky-600 rounded-[20px] flex justify-center items-center flex-col">
          <div className="w-[365px] h-[84px] text-center text-white text-[25px] font-semibold leading-[42.50px]">
            Lorem Ipsum is simply dummy text.
          </div>
          <div className="w-[476px] h-[141px] text-center text-white text-base font-normal leading-7 mt-5">
            KODEX TECHNOLOGY (PVT) LTD is a team of
            experienced mobile and web applications and
            website builders measuring dozens of completed
            projects. We build and develop mobile
            applications for several top platforms,
            including Android & IOS.{" "}
          </div>
          <div className="w-[153px] h-[49px] bg-white rounded-[10px] flex justify-center items-center">
            <div className="text-center text-sky-600 text-base font-medium leading-7">
              <button type="button" className="w-[100%]">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retangle2;
