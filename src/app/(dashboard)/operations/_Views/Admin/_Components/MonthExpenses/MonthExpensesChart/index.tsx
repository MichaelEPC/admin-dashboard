"use client";

import React, { useEffect } from "react";
import HistoryEarningsChart from "./History";
import { OpenDialogAddMonthExpenses } from "./OpenDialogForm/OpenDialogAddMonthExpenses";
import { filterData, getRecentYear } from "../../../utils/ChangeData";
import ShowMoreContainer from "./ShowMoreContainer";
import { BarChartOperation } from "./BarChart";

interface props {
  list: [];
  years: number[];
}
const EarningsChart = ({ list, years }: props) => {
  const [year, setYear] = React.useState(getRecentYear(list));
  const [stackBar, setStackBar] = React.useState(true);
  // @ts-ignore
  const [data, setData] = React.useState(filterData(list, getRecentYear(list)));

  useEffect(() => {
    // @ts-ignore
    setData(filterData(list, year));
  }, [year, list]);

  return (
    <div className="prex1:w-[1000px] min-h-[360px] w-full rounded-lg border-2 border-principal-color bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="relative flex h-auto w-32 skew-x-3 items-center rounded-md bg-gradient-to-r from-principal-color to-second-color px-0 py-2 shadow-lg graphicmb:w-52 graphicsm:w-72 xl:px-6">
          <span className="ml-1 font-bold uppercase tracking-wide text-white">
            Month Expenses
          </span>
          <div className="absolute right-4 flex -skew-x-6 space-x-1">
            <div className="h-4 w-1 bg-white"></div>
            <div className="h-4 w-1 bg-white"></div>
            <div className="h-4 w-1 bg-white"></div>
          </div>
        </div>

        <div className="flex items-center">
          <OpenDialogAddMonthExpenses />
          <div className="">
            <select
              className="ml-4 rounded-lg"
              onChange={(e) => {
                setStackBar(e.target.value === "true");
              }}
            >
              <option key={1} value="true">
                Stacked
              </option>
              <option key={2} value="false">
                Divided
              </option>
            </select>
            <select
              className="ml-4 rounded-lg"
              onChange={(e) => {
                setYear(Number(e.target.value));
              }}
            >
              {list.length === 0 ? (
                <option value="">---</option>
              ) : (
                years.map((singleYear: number) => (
                  <option key={singleYear} value={singleYear}>
                    {singleYear}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>
      </div>
      {/* @ts-ignore */}
      <BarChartOperation list={data} stackBar={stackBar} />
      {/* @ts-ignore */}
      <HistoryEarningsChart cashflows={data} />
      <div className="mt-2 flex h-auto w-full items-center justify-center">
        <ShowMoreContainer list={list} years={years} />
      </div>
    </div>
  );
};

export default EarningsChart;
