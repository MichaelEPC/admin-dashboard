"use client";

import React, { useEffect } from "react";
import { AreaChart } from "@tremor/react";
import { nameMonthOnList } from "../../../../utils/General";

const valueFormatter = function (number: number) {
  return "$" + new Intl.NumberFormat("us").format(number).toString();
};

interface OperationItemsProps {
  list: [];
}

export const AreaChartOperation: React.FC<OperationItemsProps> = ({
  list,
}: OperationItemsProps) => {
  const [data, setData] = React.useState(nameMonthOnList({ list }));

  useEffect(() => {
    setData(nameMonthOnList({ list }));
  }, [list]);

  return (
    <>
      <div className="flex h-auto w-full flex-col bg-white">
        <AreaChart
          className="mt-4 h-80"
          // @ts-ignore
          data={data}
          index="textualMonth"
          categories={["Income", "Expense"]}
          colors={["green", "red"]}
          valueFormatter={valueFormatter}
          onValueChange={(v: any) => console.log(v)}
        />
      </div>
    </>
  );
};
