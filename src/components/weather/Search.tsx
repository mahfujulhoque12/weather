/* eslint-disable @typescript-eslint/no-explicit-any */
/* components/Search.tsx */
"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useWeatherStore } from "@/store/apiStore";

const Search = () => {
  const [input, setInput] = useState("");
  const { fetchSuggestions, suggestions, loadWeather, setSuggestions } =
    useWeatherStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    fetchSuggestions(value);
  };

  const handleSelect = (city: any) => {
    setInput(city.name);
    setSuggestions([]);
    loadWeather(city.name);
  };

  const handleSearch = () => {
    if (input.trim()) {
      loadWeather(input.trim());
      setSuggestions([]);
    }
  };

  return (
    <div className="mt-[32px] relative">
      <h1 className="text-center text-white font-light text-2xl sm:text-2xl md:text-4xl">
        How&lsquo;s the sky looking today?
      </h1>

      <div className="mt-[32px] w-full sm:max-w-[768px] flex flex-col sm:flex-row mx-auto gap-3 text-base relative">
        <span className="absolute left-4 top-4">
          <IoSearch size={18} />
        </span>

        <input
          value={input}
          onChange={handleChange}
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

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 mt-1 bg-button border border-button-border rounded-b-lg z-50 max-h-60 overflow-y-auto text-white">
            {suggestions.map((city, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-[#374151] cursor-pointer"
                onClick={() => handleSelect(city)}
              >
                {city.name}, {city.state ? city.state + ", " : ""}
                {city.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
