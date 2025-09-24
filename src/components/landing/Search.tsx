import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="mt-[32px]">
      <h1 className="text-center text-white font-light text-2xl sm:text-2xl md:text-4xl">
        How's the sky looking today?
      </h1>

      {/* search box start  */}
      <div className="mt-[32px] w-full sm:max-w-[768px] flex flex-col sm:flex-row mx-auto gap-3 text-base relative">
        <span className="absolute left-4 top-4">
          <IoSearch size={18} />
        </span>

        <input
          placeholder="search for place"
          className="bg-button border border-button w-full placeholder:text-[#757575] py-3 px-12 rounded-lg  text-white"
        />
        <button className="bg-search-btn font-medium font-inter px-[32px] text-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-search-btn/80 py-3">
          Search
        </button>
      </div>
      {/* search box end  */}
    </div>
  );
};

export default Search;
