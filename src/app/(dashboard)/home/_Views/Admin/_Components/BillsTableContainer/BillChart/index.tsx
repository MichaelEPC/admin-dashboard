"use client";

import React, { useEffect } from "react";
import { TableChartOperation } from "./TableChart";
import HistoryEarningsChart from "./History";
import {
  filterData,
  getRecentYear,
} from "app/app/(dashboard)/operations/_Views/Admin/utils/ChangeData";
import ShowMoreContainer from "./ShowMoreContainer";

interface props {
  list: [];
  years: number[];
}
const BillsChart = ({ list, years }: props) => {
  const [year, setYear] = React.useState(getRecentYear(list));
  // @ts-ignore
  const [data, setData] = React.useState(filterData(list, getRecentYear(list)));

  useEffect(() => {
    // @ts-ignore
    setData(filterData(list, year));
  }, [year, list]);

  return (
    <div className="min-h-[360px] w-full rounded-lg p-4 shadow-md">
      {/* Soon */}
      {/* <div className="flex items-center justify-end">
        <div className="flex">
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
      </div> */}
      {/* @ts-ignore */}
      <TableChartOperation list={data.slice(0, 5)} />
      {/* @ts-ignore */}
      <HistoryEarningsChart cashflows={data} />
      <div className="mt-2 flex h-auto w-full items-center justify-center">
        <ShowMoreContainer list={list} years={years} />
      </div>
    </div>
  );
};

export default BillsChart;
