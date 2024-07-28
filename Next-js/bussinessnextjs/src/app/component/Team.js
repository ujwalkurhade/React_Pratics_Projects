import React from "react";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import team1 from "../Images/team1.png";
import team2 from "../Images/team2.png";
import team3 from "../Images/team3.png";
import team4 from "../Images/team4.png";

const Team = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" w-[100%] flex justify-center items-center mb-[10rem]">
      <div className=" w-[80%]">
        <div className="text-black text-[25px] font-medium leading-[42.50px] mb-[10rem]">
          Our Team
        </div>
        <div>
          <Carousel responsive={responsive}>
            <div className="flex  flex-col  gap-5">
              <img
                className="w-[332px] h-[281px] rounded-tl-[14px] rounded-tr-[14px]"
                src={team1}
              />
              <div>
                <div className="text-neutral-500 text-base font-medium leading-[33.74px] tracking-tight">
                  CEO
                </div>
                <div className="text-black text-lg font-semibold leading-[37.96px] tracking-tight">
                  John kabras
                </div>
              </div>
            </div>

            {/*  */}
            <div className="flex justify-center items-center flex-col ">
              <img
                className="w-[332px] h-[281px] rounded-tl-[14px] rounded-tr-[14px]"
                src={team2}
              />
              <div>
                <div className="text-neutral-500 text-base font-medium leading-[33.74px] tracking-tight">
                  COO
                </div>
                <div className="text-black text-lg font-semibold leading-[37.96px] tracking-tight">
                  Philips shene moris
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center items-center flex-col ">
              <img
                className="w-[332px] h-[281px] rounded-tl-[14px] rounded-tr-[14px]"
                src={team3}
              />
              <div>
                <div className="text-neutral-500 text-base font-medium leading-[33.74px] tracking-tight">
                  Tech lead
                </div>
                <div className="text-black text-lg font-semibold leading-[27.16px] tracking-tight">
                  Equarn shamir mohomad
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center items-center flex-col ">
              <img
                className="w-[332px] h-[281px] rounded-tl-[14px] rounded-tr-[14px]"
                src={team4}
              />
              <div>
                <div className="text-neutral-500 text-base font-medium leading-[33.74px] tracking-tight">
                  Head of UX
                </div>
                <div className="text-black text-lg font-semibold leading-[37.96px] tracking-tight">
                  Janka indrajith
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Team;
