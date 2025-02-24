"use client";

import React from "react";

interface Props {
  cashflow: {
    name: string;
    amount: string | number;
    category: string;
    date: string;
  };
}

const HistoryItemsMonthExpenses = ({ cashflow }: Props) => {
  return (
    <article className="relative mb-2 flex h-10 w-full skew-x-1 items-center justify-center bg-gradient-to-r from-principal-color to-second-color px-20 py-1 graphicmd:justify-between">
      <div className="mr-2 h-auto w-6 rounded-full bg-white graphicmd:mr-0">
        <svg
          className={`h-6 w-6 ${cashflow.category === "Income" ? "fill-green-500" : "fill-red-500"} `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d={`${
              cashflow.category === "Income"
                ? "M19.071 4.929c-3.899-3.898-10.243-3.898-14.143 0-3.898 3.899-3.898 10.244 0 14.143 3.899 3.898 10.243 3.898 14.143 0 3.899-3.9 3.899-10.244 0-14.143zm-3.536 10.607-2.828-2.829-3.535 3.536-1.414-1.414 3.535-3.536-2.828-2.829h7.07v7.072z"
                : "M4.929 4.929c-3.898 3.899-3.898 10.244 0 14.143 3.899 3.898 10.243 3.898 14.143 0 3.898-3.899 3.898-10.244 0-14.143-3.9-3.899-10.244-3.899-14.143 0zm10.606 10.607h-7.07l2.828-2.829-3.535-3.536 1.414-1.414 3.535 3.536 2.828-2.829v7.072z"
            }`}
          ></path>
        </svg>
      </div>
      <p className="font-semibold text-white">{cashflow.name}</p>
      <p className="hidden font-semibold text-white graphicmd:block">
        {cashflow.date}
      </p>
    </article>
  );
};

export default HistoryItemsMonthExpenses;
