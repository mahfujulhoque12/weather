import Image from "next/image";
import React from "react";
import { HiSun } from "react-icons/hi";

const TempBox = () => {
  return (
    <div className="p-[32px] rounded-2xl w-full bg-gradient-to-br from-[#2563EB] to-[#9333EA] text-white font-medium">
      <div className="flex justify-between gap-3">
        {/* ----------- */}
        <div>
          <h2 className="text-white font-semibold text-xl sm:text-2xl">
            Berlin, Germany
          </h2>
          <p className="text-sm font-normal text-[#DBEAFE] mb-6">
            Tuesday, Aug 5, 2025
          </p>
          <span className="text-[#FACC15]">
            <HiSun />
          </span>
        </div>
        {/* ----------- */}

        {/* ----------- */}
        <div>
          <Image
            src={"/weather/stick.png"}
            width={16}
            height={16}
            alt="stick"
          />
        </div>
        {/* ----------- */}
      </div>

      {/* temp */}
      <div>
        <h2 className="text-[72px] font-light text-end">20°</h2>
      </div>
    </div>
  );
};

export default TempBox;
