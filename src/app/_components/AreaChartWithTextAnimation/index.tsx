"use client";

import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 23",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 23",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 23",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 23",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 23",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 23",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 23",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 23",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 23",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 23",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 23",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 23",
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

export const AreaChartGraphic = ({
  data,
  indexLocation,
  categories,
  formatLeft,
  formatRight,
  date,
  colors,
  title,
}: {
  data: any[];
  indexLocation: string;
  categories: string[];
  formatLeft: string;
  formatRight: string;
  date?: string;
  colors?: string[];
  title?: string;
}) => {
  return (
    <div className="flex h-full w-full flex-col border-b-2 border-ligh-gray">
      <div className="h-auto w-full justify-start">
        <p className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {title}
        </p>
      </div>
      <div className="flex h-auto w-full justify-end">
        <p className="text-tremor-label text-gray-500 dark:text-dark-tremor-content">
          {`${date ? `Date: ${date}` : ""}`}
        </p>
      </div>
      {colors ? (
        <AreaChart
          className="h-80 w-full"
          data={data}
          index={indexLocation}
          categories={categories}
          valueFormatter={(profit: number) =>
            `${formatLeft}${profit}${formatRight}`
          }
          showLegend={false}
          // showXAxis={false}
          showTooltip={true}
          colors={colors}
        />
      ) : (
        <AreaChart
          className="h-80 w-full"
          data={data}
          index={indexLocation}
          categories={categories}
          valueFormatter={(profit: number) =>
            `${formatLeft}${profit}${formatRight}`
          }
          showLegend={false}
          // showXAxis={false}
          showTooltip={true}
        />
      )}
    </div>
  );
};
