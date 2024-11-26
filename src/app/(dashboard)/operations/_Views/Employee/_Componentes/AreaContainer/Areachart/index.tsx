"use client";

import { AreaChart } from "@tremor/react";

const valueFormatter = function (number: number) {
  return "" + new Intl.NumberFormat("us").format(number).toString();
};

interface OperationItemsProps {
  chartData: [];
  resume: string;
}

export const AreaChartOperation: React.FC<OperationItemsProps> = ({
  chartData,
  resume,
}: OperationItemsProps) => {
  return (
    <div className="flex h-96 w-full flex-col rounded-lg border-2 border-ligh-gray bg-white p-2 shadow-md">
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Earns - loss
      </h3>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {/* @ts-expect-error */}
        {`Gains: ${resume.toFixed(0)}%`}
      </p>
      <AreaChart
        className="mt-4 h-72"
        data={chartData}
        index="date"
        categories={["Earnings", "Losses"]}
        colors={["green", "red"]}
        valueFormatter={valueFormatter}
      />
    </div>
  );
};
