import React from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { wrapperStyle } from "../common/CustomStyle";
import TempBox from "./TempBox";
import Details from "./Details";
import Daily from "./Daily";
import Hourly from "./Hourly";

const WeatherCard = () => {
  return (
    <div className="w-full">
      {/* weather details part start  */}
      <div className="flex flex-col lg:flex-row gap-6 mt-[32px]">
        {/* detial left part start  */}
        <div className="w-full lg:w-[65%]">
          <TempBox />
          <Details />
          <Daily />
        </div>
        {/* detial left part end  */}

        {/* detial right part start  */}
        <div className="w-full lg:w-[35%]">
          <Hourly />
        </div>
        {/* detial right part end  */}
      </div>
      {/* weather details part end  */}
    </div>
  );
};

export default WeatherCard;
