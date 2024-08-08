"use client";

import { DonutChart, Legend } from "@tremor/react";

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

export function DonutChartGraphic() {
  return (
    <>
      <div className="mb-4 flex h-auto w-full items-center justify-center">
        <h3 className="font-semibold text-text-color underline">
          Employees experience
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center space-x-6">
        <DonutChart
          data={votesData}
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
    </>
  );
}
