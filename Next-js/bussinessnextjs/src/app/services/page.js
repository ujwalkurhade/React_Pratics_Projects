import React from "react";
import Image from "next/image";

import Speaker from "../Images/Speaker.png";

import app1 from "../Images/app1.png";
import app2 from "../Images/app2.png";
import app3 from "../Images/app3.png";
import app4 from "../Images/app4.png";
import ProductDevelopment from "../Images/ProductDevelopment.png";
import Team from "../component/Team";
import Retangle4 from "../component/Retangle4";

const services = () => {
  return (
    <div className=" w-[100%]flex justify-center items-center flex-col">
      {/*  */}
      <div className="w-[100%]">
        <div className="w-[100%] h-[743px] bg-sky-600 bg-opacity-10 flex justify-center flex-col items-center mt-[-10rem] ">
          <div className="w-[135px] h-[135px] bg-white rounded-full flex justify-center items-center">
            <img
              className="w-[73px] h-[73px]"
              src={Speaker}
            />
          </div>
          {/*  */}
          <div>
            <span className="text-black text-[40px] font-medium">
              Our{" "}
            </span>
            <span className="text-sky-600 text-[40px] font-semibold">
              Services
            </span>
          </div>
          {/*  */}
          <div className="w-[440px] text-center text-stone-500 text-lg font-normal leading-loose">
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum
            has been the industry's
          </div>
          {/*  */}
        </div>

        {/*  */}
        <div className="w-[78%] flex justify-center items-center ml-[10rem] absolute mt-[-10rem]">
          {/* <div className="w-[1203px] h-[441px] bg-white rounded-[10px] shadow"></div> */}
          <div className="w-[100%] h-[395px] bg-white shadow flex justify-center ml-[20px] flex-col gap-10">
            {/* app1 */}
            <div className="flex justify-around items-center gap-20">
              <div className="flex justify-center items-center gap-[3rem] ">
                <div className="w-[91px] h-[90px] bg-red-50 rounded-[20px] flex justify-center items-center">
                  <img src={app1} />
                </div>
                <div className=" text-violet-950 text-[25px] font-medium leading-[44.48px] tracking-tight">
                  Web Application
                  <div className="w-[300px] h-14 text-neutral-500 text-base font-normal leading-7 tracking-tight">
                    Platform independant business solutions
                    for maximum availability
                  </div>
                </div>
              </div>
              {/* app2 */}
              <div className="flex justify-center items-center gap-[3rem]">
                <div className="w-[91px] h-[90px] bg-red-50 rounded-[20px] flex justify-center items-center">
                  <img src={app2} />
                </div>
                <div className=" text-violet-950 text-[25px] font-medium leading-[44.48px] tracking-tight">
                  SEO
                  <div className="w-[283px] h-14 text-neutral-500 text-base font-normal leading-7 tracking-tight">
                    Let the world find you on top of others
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[294.02px] h-[0px] origin-top-left rotate-90 border mt-[-15rem] ml-[35rem] absolute border-neutral-300"></div>
            <div className="w-[874px] h-[0px] border border-neutral-300 ml-[8rem]"></div>
            {/* app3 */}
            <div className="flex justify-around items-center gap-50">
              <div className="flex justify-center items-center gap-[1rem] ml-5">
                <div className="w-[91px] h-[90px] bg-red-50 rounded-[20px] flex justify-center items-center">
                  <img src={app3} />
                </div>
                <div className=" text-violet-950 text-[25px] font-medium leading-[44.48px] tracking-tight">
                  Mobile Applications
                  <div className="w-[323px] h-[53px] text-neutral-500 text-base font-normal leading-7 tracking-tight">
                    The simplest but robust technology to
                    accompany with you
                  </div>
                </div>
              </div>
              {/* app4 */}
              <div className="flex justify-center items-center gap-[1rem] ml-[10rem]">
                <div className="w-[91px] h-[90px] bg-red-50 rounded-[20px] flex justify-center items-center">
                  <img src={app4} />
                </div>
                <div className=" text-violet-950 text-[25px] font-medium leading-[44.48px] tracking-tight">
                  AR/VR Soulations
                  <div className="w-[386px] h-14 text-neutral-500 text-base font-normal leading-7 tracking-tight">
                    Advanced autonomous technologies to
                    make life simple
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[80%] mt-[28rem] mb-[10rem] flex justify-center items-center">
          <div className="flex  flex-col items-start ">
            <div className="w-[516px] h-[91px]">
              <span className="text-sky-600 text-3xl font-semibold leading-[51px]">
                Lorem Ipsum
              </span>
              <span className="text-neutral-800 text-3xl font-semibold leading-[51px]">
                {" "}
                is simply dummy text of the printing.{" "}
              </span>
            </div>
            <div className="w-[476px] h-[306px] mt-[5rem] text-neutral-600 text-base font-normal leading-7">
              KODEX TECHNOLOGY (PVT) LTD is a team of
              experienced mobile and web applications and
              website builders measuring dozens of
              completed projects. We build and develop
              mobile applications for several top
              platforms, including Android & IOS. <br />
              KODEX TECHNOLOGY (PVT) LTD is a team of
              experienced mobile and web applications and
              website builders measuring dozens{" "}
            </div>
            <div className="w-[125px] h-[41px] bg-white rounded-md border-2 border-sky-600 ml-[15px]   text-sky-600  text-[13px] font-normal">
              <h3 className="text-center mt-[8px]">
                <button type="button" className="w-[100%]">
                  View More
                </button>
              </h3>
            </div>
          </div>
          <div>
            <img
              className="w-[905px] h-[509px]"
              src={ProductDevelopment}
            />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-[100%] h-[388px] bg-sky-600 flex justify-center items-center mb-[10rem] mt-[5rem]">
        <div className="w-[1084px] h-[124px]  justify-start items-start gap-40 inline-flex">
          <div className="w-[114px] h-[124px] relative">
            <div className="left-[36px] top-0 absolute text-white text-[65px] font-semibold leading-[115.64px] tracking-wide">
              6
            </div>
            <div className="left-0 top-[96px] absolute text-white text-base font-normal leading-7 tracking-tight">
              Happy Clients
            </div>
          </div>
          <div className="w-[161px] h-[124px] relative">
            <div className="left-[56px] top-0 absolute text-white text-[65px] font-semibold leading-[115.64px] tracking-wide">
              11
            </div>
            <div className="left-0 top-[96px] absolute text-white text-base font-normal leading-7 tracking-tight">
              Completed Projects
            </div>
          </div>
          <div className="w-[114px] h-[124px] relative">
            <div className="left-[10px] top-0 absolute text-white text-[65px] font-semibold leading-[115.64px] tracking-wide">
              7M
            </div>
            <div className="left-0 top-[96px] absolute text-white text-base font-normal leading-7 tracking-tight">
              Transsactions
            </div>
          </div>
          <div className="w-[215px] h-[124px] relative">
            <div className="left-0 top-0 absolute text-white text-[65px] font-semibold leading-[115.64px] tracking-wide">
              6000+
            </div>
            <div className="left-[62px] top-[96px] absolute text-white text-base font-normal leading-7 tracking-tight">
              Customers
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/* <Team /> */}
      <Retangle4 />
    </div>
  );
};

export default services;
