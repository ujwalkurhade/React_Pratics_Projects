import React from "react";
import app1 from "../Images/app1.png";
import app2 from "../Images/app2.png";
import app3 from "../Images/app3.png";
import app4 from "../Images/app4.png";

const Group = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className=" w-[80%] flex gap-20 items-center mt-[15rem] mb-[14rem]">
        <div className="w-[499px] h-[437px] relative ">
          <div className="w-[499px] h-[324px] left-0 top-0 absolute">
            <div className="w-[499px] h-[109px] left-0 top-[33px] absolute text-black text-3xl font-semibold leading-[48px]">
              Lorem Ipsum is simply dummy text of the
              printing.{" "}
            </div>
            <div className="w-[487px] h-[151px] left-0 top-[173px] absolute text-zinc-600 text-xl font-normal leading-10">
              KODEX TECHNOLOGY (PVT) LTD is a team of
              experienced mobile and web applications and
              website builders measuring dozens of
              completed projects.
            </div>
            <div className="w-[54px] h-[5px] left-0 top-0 absolute bg-indigo-800"></div>
          </div>
          <div className="w-[193px] h-[51px] left-0 top-[386px] absolute">
            <div className="w-[193px] h-[51px] left-0 top-0 absolute bg-white rounded-[10px] border border-sky-600"></div>
            <div className="left-[54px] top-[9px] absolute text-sky-600 text-base font-normal leading-loose">
              <button type="button" className="w-[100%]">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className="w-[766px] h-[395px] bg-white shadow flex justify-center ml-[20px] flex-col gap-10">
          {/* app1 */}
          <div className="flex justify-around items-center gap-20">
            <div className="flex justify-center items-center">
              <div className="w-[91px] h-[90px] bg-red-50 rounded-[20px] flex justify-center items-center">
                <img src={app1} />
              </div>
              <div className="text-center text-violet-950 text-[25px] font-medium leading-[44.48px] tracking-tight">
                Web Application
              </div>
            </div>
            {/* app2 */}
            <div className="flex justify-center items-center">
              <div className="w-[91px] h-[90px] bg-red-50 rounded-[20px] flex justify-center items-center">
                <img src={app2} />
              </div>
              <div className="text-center text-violet-950 text-[25px] font-medium leading-[44.48px] tracking-tight">
                SEO
              </div>
            </div>
          </div>
          {/* app3 */}
          <div className="flex justify-around items-center gap-20">
            <div className="flex justify-center items-center">
              <div className="w-[91px] h-[90px] bg-red-50 rounded-[20px] flex justify-center items-center">
                <img src={app3} />
              </div>
              <div className="text-center text-violet-950 text-[25px] font-medium leading-[44.48px] tracking-tight">
                Mobile Applications
              </div>
            </div>
            {/* app4 */}
            <div className="flex justify-center items-center">
              <div className="w-[91px] h-[90px] bg-red-50 rounded-[20px] flex justify-center items-center">
                <img src={app4} />
              </div>
              <div className="text-center text-violet-950 text-[25px] font-medium leading-[44.48px] tracking-tight">
                AR/VR
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
