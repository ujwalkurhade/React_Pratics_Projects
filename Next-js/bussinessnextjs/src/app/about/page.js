import React from "react";
import Image from "next/image";
import Rectangle1 from "../Images/Rectangle1.png";
import Rectangle2 from "../Images/Rectangle2.png";
import Rectangle3 from "../Images/Rectangle3.png";
import Rectangle4 from "../Images/Rectangle4.png";
import Frame1 from "../Images/Frame1.png";
import Group from "../component/Group";
import Team from "../component/Team";
import Retangle4 from "../component/Retangle4";

const about = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 mt-[10px]">
        <img
          src={Frame1}
          className="w-[385px] h-[301px] absolute mt-[26rem] ml-[60rem] -z-10"
        />
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center gap-4 items-center ">
            <img
              className="w-[227px] h-[229px] rounded-[20px]"
              src={Rectangle1}
            />
            <img
              className="w-72 h-[316px] rounded-[20px]"
              src={Rectangle2}
            />
          </div>
          <div>
            <div className="text-sky-600 text-[25px] font-normal">
              About us
            </div>
            <div className="w-[565px] h-32 text-neutral-800 text-[40px] font-semibold leading-[68px]">
              Lorem Ipsum is simply dummy text of the
              printing.{" "}
            </div>
            <div className="w-[463px] text-zinc-500 text-lg font-normal leading-loose">
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8">
          <img
            className="w-[500px] h-[324px] rounded-[20px]"
            src={Rectangle3}
          />
          <img
            className="w-[500px] h-[324px] rounded-[20px]"
            src={Rectangle4}
          />
        </div>
      </div>

      <div className="w-[80%] mt-[10rem]  flex justify-center  items-center flex-col ">
        <div className="w-[807px] h-[148px] text-sky-600 text-[45px] font-semibold leading-[72px]">
          Lorem Ipsum is simply dummy text of the printing.{" "}
        </div>
        <div className="w-[60rem] h-[167px] text-zinc-600 text-xl ml-[10rem] font-normal leading-10 mt-[3rem]">
          KODEX TECHNOLOGY (PVT) LTD is a team of
          experienced mobile and web applications and
          website builders measuring dozens of completed
          projects. We build and develop mobile
          applications for several top platforms, including
          Android & IOS. We build and develop mobile
          applications for several top platforms, including
          Android & IOS.{" "}
        </div>
      </div>
      <Group />
      {/* <Team /> */}
      <Retangle4 />
    </div>
  );
};

export default about;
