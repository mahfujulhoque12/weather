import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaRegSun } from "react-icons/fa";
import { HiSun } from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
      <div className="flex items-center gap-1">
        <span className="text-[#FACC15]">
          <HiSun className="text-[25px] sm:text-[38px]" />
        </span>
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Weather Today
        </h2>
      </div>
      <div>
        <button className="bg-button flex items-center gap-1 text-white border border-button-border px-4 py-2 rounded-lg text-sm font-normal font-inter">
          <FaRegSun />
          Units
          <AiOutlineCaretDown size={18} />
        </button>
      </div>
    </div>
  );
};

export default Header;
