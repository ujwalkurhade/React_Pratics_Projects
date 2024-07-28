import React from "react";
import Socialmedia from "./Socialmedia";

const Footer = () => {
  return (
    <div className="w-[100%] h-[268px] relative mt-2">
      <div className="flex ">
        <div className="ml-[6rem] w-[30%] mb-[20px]">
          <div className="text-blue-900 text-base font-bold ">
            LOGO
          </div>
          <div className="mt-[20px] ">
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perferendis, facilis.
            </p>
            <p className="mt-[20px]">@Lorem</p>
          </div>
        </div>
        <div className="w-[20%]">
          <h2>About us</h2>
          <div className="mt-[5px]">
            Lorem <br /> Portfolio <br /> Careers <br />
            Contact us
          </div>
        </div>

        <div className="w-[20%]">
          Contact Us
          <p className="mt-[5px]">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non facilis omnis iure
            repellat!
          </p>
          <p className="mt-[10px]">+908 89097 890</p>
        </div>
        <Socialmedia />
        {/*  */}
      </div>

      <div className="w-[100%] left-0 top-[214px]  border border-neutral-300"></div>
      <div className="left-[588px] mt-[24px]  text-stone-500 text-[13px] font-normal leading-normal text-center">
        Copyright ® 2021 Lorem All rights Rcerved
      </div>
    </div>
  );
};

export default Footer;
