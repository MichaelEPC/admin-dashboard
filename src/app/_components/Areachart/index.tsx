"use client";
import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    Employees: 30,
    Task_Completed: 15,
  },
  {
    date: "Feb 22",
    Employees: 20,
    Task_Completed: 10,
  },
  {
    date: "Mar 22",
    Employees: 10,
    Task_Completed: 14,
  },
  {
    date: "Apr 22",
    Employees: 50,
    Task_Completed: 25,
  },
  {
    date: "May 22",
    Employees: 60,
    Task_Completed: 180,
  },
  {
    date: "Jun 22",
    Employees: 71,
    Task_Completed: 181,
  },
  {
    date: "Jul 22",
    Employees: 31,
    Task_Completed: 40,
  },
  {
    date: "Aug 22",
    Employees: 50,
    Task_Completed: 75,
  },
  {
    date: "Sep 22",
    Employees: 71,
    Task_Completed: 40,
  },
  {
    date: "Oct 22",
    Employees: 14,
    Task_Completed: 47,
  },
  {
    date: "Nov 22",
    Employees: 75,
    Task_Completed: 35,
  },
  {
    date: "Dec 22",
    Employees: 44,
    Task_Completed: 114,
  },
];

const valueFormatter = function (number: number) {
  return "" + new Intl.NumberFormat("us").format(number).toString();
};

export function AreaChartGraphic() {
  return (
    <div className="flex h-96 w-full flex-col rounded-lg border-2 border-ligh-gray bg-white p-2 shadow-md">
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Year productivity
      </h3>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        96%
      </p>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        categories={["Employees", "Task_Completed"]}
        colors={["indigo", "cyan"]}
        valueFormatter={valueFormatter}
      />
    </div>
  );
}
