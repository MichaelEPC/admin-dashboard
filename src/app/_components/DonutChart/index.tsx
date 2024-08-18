"use client";
import { DonutChart, Legend } from "@tremor/react";
import React, { useEffect } from "react";

const votesData = [
  {
    name: "Super Good",
    sales: 10,
  },
  {
    name: "Good",
    sales: 45,
  },
  {
    name: "Medium",
    sales: 50,
  },
  {
    name: "Not well",
    sales: 12,
  },
  {
    name: "Bad",
    sales: 12,
  },
  {
    name: "Terrible",
    sales: 14,
  },
];

const valueFormatter = (number: number) =>
  `Votes: ${Intl.NumberFormat("us").format(number).toString()}`;

export function DonutChartGraphic({ dataReceived }: { dataReceived: object }) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    if (!dataReceived.feedBack) return;
    let info = dataReceived.feedBack;
    info = JSON.parse(info);
    setData(info.rating);
  }, [dataReceived]);

  return (
    <>
      <div className="mb-4 flex h-auto w-full items-center justify-center">
        <h3 className="font-semibold text-text-color underline">
          Employees experience
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center space-x-6">
        <DonutChart
          data={data}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={["blue", "cyan", "green", "yellow", "orange", "red"]}
          className="w-40"
        />
        <div className="mt-2 flex h-auto w-full items-center justify-center">
          <Legend
            categories={[
              "Super Good",
              "Good",
              "Medium",
              "Not well",
              "Bad",
              "Terrible",
            ]}
            colors={["blue", "cyan", "green", "yellow", "orange", "red"]}
            className="max-w-xs"
          />
        </div>
      </div>
      {!data && (
        <div className="flex h-auto w-full items-center justify-center">
          <p className="mt-1 text-sm font-normal text-text-color">
            Tell the employees to rate they experience!
          </p>
        </div>
      )}
    </>
  );
}
