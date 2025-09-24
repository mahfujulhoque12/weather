import React from "react";

const detailsData = [
  {
    title: "Feels Like",
    value: "18°",
  },
  {
    title: "Humidity",
    value: "46%",
  },
  {
    title: "Wind",
    value: "14 km/h",
  },
  {
    title: "Feels Like",
    value: "18°",
  },
];

const Details = () => {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {detailsData.map((data, index) => (
        <div
          key={index}
          className="rounded-xl bg-button border border-button-border p-4"
        >
          <h3 className="text-paragraph text-sm font-normal">{data.title}</h3>
          <p className="text-2xl font-normal text-white pt-1">{data.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
