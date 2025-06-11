"use client";

import React from "react";

interface Props {
  cashflow: {
    name: string;
    amount: string | number;
    profit: number;
    date: string;
  };
  hideDate?: boolean;
}

const HistoryItemsEarnings = ({ cashflow, hideDate }: Props) => {
  return (
    <article
      className={`relative mb-2 flex h-10 w-full skew-x-1 items-center justify-center bg-gradient-to-r from-principal-color to-second-color px-20 py-1 ${hideDate ? "justify-center" : "graphicmd:justify-between"}`}
    >
      <div className="mr-2 h-auto w-6 rounded-full bg-white graphicmd:mr-0">
        <svg
          className={`h-6 w-6 fill-green-500`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zM10 7l6 5-6 5V7z"></path>
        </svg>
      </div>
      <p className={`font-semibold text-white ${hideDate ? "ml-2" : ""}`}>
        {cashflow.name}
      </p>
      <p
        className={`hidden font-semibold text-white ${hideDate ? "hidden" : "graphicmd:block"}`}
      >
        {cashflow.date}
      </p>
    </article>
  );
};

export default HistoryItemsEarnings;
