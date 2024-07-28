import React from "react";
import facebook from "../Images/facebook1.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
const Socialmedia = () => {
  return (
    <div className="flex justify-between items-center gap-5 mt-[30px]">
      <div className="w-[34px] h-[34px] bg-white rounded-full shadow flex items-center justify-center">
        <img src={facebook} />
      </div>

      <div className="w-[34px] h-[34px] bg-white rounded-full shadow flex items-center justify-center">
        <img src={instagram} />
      </div>

      <div className="w-[34px] h-[34px] bg-white rounded-full shadow flex items-center justify-center">
        <img src={linkedin} />
      </div>

      <div className="w-[34px] h-[34px] bg-white rounded-full shadow flex items-center justify-center">
        <img src={twitter} />
      </div>
    </div>
  );
};

export default Socialmedia;
