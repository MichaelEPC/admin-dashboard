"use client";

import { DonutChart, Legend } from "@tremor/react";

const valueFormatter = (number: number) =>
  `Res: ${Intl.NumberFormat("us").format(number).toString()}`;

export function DonutChartOperation({ data }: { data: [] }) {
  return (
    <>
      <div className="mb-4 flex h-auto w-full items-center justify-center">
        <h3 className="text-lg font-semibold text-principal-color underline">
          Mounthly performance
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center space-x-6">
        <DonutChart
          data={data}
          category="Total"
          index="name"
          valueFormatter={valueFormatter}
          colors={[
            "blue",
            "cyan",
            "green",
            "yellow",
            "orange",
            "red",
            "pink",
            "lime",
            "grey",
            "fuchsia",
            "purple",
            "amber",
          ]}
          className="w-40"
        />
        <div className="mt-2 flex h-auto w-full items-center justify-center">
          <Legend
            categories={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            colors={[
              "blue",
              "cyan",
              "green",
              "yellow",
              "orange",
              "red",
              "pink",
              "lime",
              "grey",
              "fuchsia",
              "purple",
              "amber",
            ]}
            className="max-w-xs"
          />
        </div>
      </div>
      {!data && (
        <div className="flex h-auto w-full items-center justify-center">
          <p className="mt-1 text-sm font-normal text-text-color">
            Get better operations, get better performance.
          </p>
        </div>
      )}
    </>
  );
}
