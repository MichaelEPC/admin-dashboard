"use client";

import React from "react";

interface Props {
  cashflow: [];
}

const HistoryItemsEarnings = ({ cashflow }: Props) => {
  let image = "";
  switch (image) {
    case "Earning":
      image = "green";
      break;

    default:
      image = "red";
      break;
  }
  return (
    <article className="mb-2 flex h-10 w-full skew-x-1 items-center justify-between bg-gradient-to-r from-principal-color to-second-color px-20 py-1">
      <svg
        className={`${image === "green" ? "fill-green-400" : "fill-red-600"}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path>
      </svg>
      {/* @ts-ignore */}
      <p className="font-semibold text-white">{cashflow.name}</p>
      {/* @ts-ignore */}
      <p className="font-semibold text-white">{cashflow.date}</p>
    </article>
  );
};

export default HistoryItemsEarnings;
