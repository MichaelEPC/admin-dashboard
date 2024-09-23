"use client";
import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan",
    Work: 30,
    Earnings: 1000,
  },
  {
    date: "Feb",
    Work: 20,
    Earnings: 2000,
  },
  {
    date: "Mar",
    Work: 10,
    Earnings: 4000,
  },
  {
    date: "Apr",
    Work: 50,
    Earnings: 1700,
  },
  {
    date: "May",
    Work: 60,
    Earnings: 1800,
  },
  {
    date: "Jun",
    Work: 71,
    Earnings: 2400,
  },
  {
    date: "Jul",
    Work: 31,
    Earnings: 4600,
  },
  {
    date: "Aug",
    Work: 50,
    Earnings: 4700,
  },
  {
    date: "Sep",
    Work: 71,
    Earnings: 2300,
  },
  {
    date: "Oct",
    Work: 14,
    Earnings: 1300,
  },
  {
    date: "Nov",
    Work: 75,
    Earnings: 3500,
  },
  {
    date: "Dec",
    Work: 44,
    Earnings: 7500,
  },
];

const valueFormatter = function (number: number) {
  return "" + new Intl.NumberFormat("us").format(number).toString();
};

export function AreaChartOperation() {
  return (
    <div className="flex h-96 w-full flex-col rounded-lg border-2 border-ligh-gray bg-white p-2 shadow-md">
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Earns and productivity
      </h3>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        96%
      </p>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        categories={["Work", "Earnings"]}
        colors={["blue", "green"]}
        valueFormatter={valueFormatter}
      />
    </div>
  );
}
