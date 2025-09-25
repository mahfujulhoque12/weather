"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useWeatherStore } from "@/store/apiStore";

const Search = () => {
  const [input, setInput] = useState("");
  const { loadWeather } = useWeatherStore();

  const handleSearch = () => {
    if (input.trim()) {
      loadWeather(input.trim());
    }
  };

  return (
    <div className="mt-[32px]">
      <h1 className="text-center text-white font-light text-2xl sm:text-2xl md:text-4xl">
        How's the sky looking today?
      </h1>

      {/* search box */}
      <div className="mt-[32px] w-full sm:max-w-[768px] flex flex-col sm:flex-row mx-auto gap-3 text-base relative">
        <span className="absolute left-4 top-4">
          <IoSearch size={18} />
        </span>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for place"
          className="bg-button border border-button w-full placeholder:text-[#757575] py-3 px-12 rounded-lg text-white"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button
          onClick={handleSearch}
          className="bg-search-btn font-medium font-inter px-[32px] text-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-search-btn/80 py-3"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
