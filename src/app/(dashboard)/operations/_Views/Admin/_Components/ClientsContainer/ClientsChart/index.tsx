"use client";

import React, { useEffect } from "react";
import { TableChartOperation } from "./TableChart";
import HistoryEarningsChart from "./History";
import { OpenDialogAddCashFlow } from "./OpenDialogForm/OpenDialogAddBill";
import { filterData, getRecentYear } from "../../../utils/ChangeData";
import ShowMoreContainer from "./ShowMoreContainer";

interface props {
  list: [];
  years: number[];
}
const ClientsChart = ({ list, years }: props) => {
  const [year, setYear] = React.useState(getRecentYear(list));
  // @ts-ignore
  const [data, setData] = React.useState(filterData(list, getRecentYear(list)));

  useEffect(() => {
    // @ts-ignore
    setData(filterData(list, year));
  }, [year, list]);

  return (
    <div className="min-h-[360px] w-[1000px] rounded-lg border-2 border-principal-color bg-white p-4 shadow-md prex1:w-[650px]">
      <div className="flex items-center justify-between">
        <div className="relative flex h-auto w-32 skew-x-3 items-center rounded-md bg-gradient-to-r from-principal-color to-second-color px-6 py-2 shadow-lg graphicmb:w-52 graphicsm:w-72">
          <span className="font-bold uppercase tracking-wide text-white">
            Clients
          </span>
          <div className="absolute right-4 flex -skew-x-6 space-x-1">
            <div className="h-4 w-1 bg-white"></div>
            <div className="h-4 w-1 bg-white"></div>
            <div className="h-4 w-1 bg-white"></div>
          </div>
        </div>

        <div className="flex">
          <OpenDialogAddCashFlow />
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
      {/* @ts-ignore */}
      <TableChartOperation list={data.slice(0, 3)} />
      {/* @ts-ignore */}
      <HistoryEarningsChart cashflows={data} />
      <div className="mt-2 flex h-auto w-full items-center justify-center">
        <ShowMoreContainer list={list} years={years} />
      </div>
    </div>
  );
};

export default ClientsChart;
