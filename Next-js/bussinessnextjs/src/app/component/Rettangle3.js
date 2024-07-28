import React from "react";

import caspio from "../Images/caspio.png";
import beneoshop from "../Images/beneoshop.png";
import leotrippi from "../Images/leotrippi.png";
import HyperGrid from "../Images/HyperGrid.png";

const Rettangle3 = () => {
  return (
    <div className="mt-[8rem] flex items-center justify-center flex-col">
      <div className="text-black text-2xl font-medium leading-[38.16px]">
        You will be in good Company
      </div>

      <div className="w-[1085px] h-[185px] justify-start items-start gap-[115px] inline-flex">
        <img
          className="w-[185px] h-[185px]"
          src={beneoshop}
        />
        <img
          className="w-[185px] h-[185px]"
          src={caspio}
        />
        <img
          className="w-[185px] h-[185px]"
          src={HyperGrid}
        />
        <img
          className="w-[185px] h-[185px]"
          src={leotrippi}
        />
      </div>
    </div>
  );
};

export default Rettangle3;
