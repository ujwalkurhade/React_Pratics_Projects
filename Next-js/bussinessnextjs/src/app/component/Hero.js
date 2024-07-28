import laptop from "../Images/BillSittingusinglaptop1.png";
import Ellipse1 from "../Images/Ellipse1.png";
import Ellipse2 from "../Images/Ellipse2.png";
import Cuboid1 from "../Images/Cuboid1.png";
import BigPlant1 from "../Images/BigPlant1.png";
import Succlentangle1 from "../Images/Succlentangle1.png";

const Hero = () => {
  return (
    <div className=" w-[100%] h-[100%] p-[40px] bg-[#1090CB1A] border-2  flex justify-between items-center overflow-hidden ">
      <div className="w-[496px] h-[504px] bg-violet-100 rounded-full -z-[0] overflow-hidden mt-[-20rem] ml-[-10rem] absolute  ">
        {/* <img src={Ellipse2} /> */}
      </div>

      <div className="mt-[-10rem] ">
        <div className="relative">
          <div className="w-[630px] h-[193px] ">
            <span className="text-black text-[40px] font-semibold">
              Experienced{" "}
            </span>
            <span className="text-sky-600 text-[40px] font-semibold">
              mobile and web
            </span>
            <span className="text-black text-[40px] font-semibold">
              {" "}
              applications and website builders measuring.
            </span>
          </div>
          <div>
            <div className="w-[613px] h-[125px] text-zinc-600 text-base font-normal leading-loose">
              KODEX TECHNOLOGY (PVT) LTD is a team of
              experienced mobile and web applications and
              website builders measuring dozens of
              completed projects. We build and develop
              mobile applications for several top
              platforms, including Android & IOS.{" "}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[125px] h-[41px] bg-sky-600 rounded-md ml-[15px] mr-[32px]  text-white  text-[13px] font-normal">
              <h3 className="text-center mt-[8px]">
                <button type="button" className="w-[100%]">
                  Contact us
                </button>
              </h3>
            </div>
            <div className="w-[125px] h-[41px] bg-white rounded-md border-2 border-sky-600 ml-[15px] mr-[32px]  text-sky-600  text-[13px] font-normal">
              <h3 className="text-center mt-[8px]">
                <button type="button" className="w-[100%]">
                  View More
                </button>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[-10rem] relative mr-[5rem]">
        <div className="w-[496px] h-[504px] bg-yellow-50 rounded-full z- absolute mt-[10rem]">
          <img src={Ellipse1} />
        </div>
        <div className="w-[68px] h-[68px]  rotate-[98.89deg] mt-[11rem] ml-[22rem] absolute">
          <img src={Cuboid1} />
        </div>
        <div>
          <img
            className="w-[509px] h-[763px] z-30 relative"
            src={laptop}
          />
        </div>
        <div className="w-[66px] h-[66px] absolute mt-[-30rem]">
          <img src={Succlentangle1} />
        </div>

        {/*  */}
        <div className="w-[185px] h-[185px] mt-[-15rem] ml-[22rem] z-10 absolute">
          <img src={BigPlant1} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
