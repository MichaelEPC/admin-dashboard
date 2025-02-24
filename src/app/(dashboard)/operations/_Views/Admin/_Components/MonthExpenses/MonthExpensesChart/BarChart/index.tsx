"use client";

import React, { useEffect } from "react";
import { BarChart } from "@tremor/react";
import {
  getCategoriesFromMonthExpenses,
  nameMonthOnListMonthExpenses,
} from "../../../../utils/General/MonthExpenses";

interface OperationItemsProps {
  list: [];
  stackBar: boolean;
}

export const BarChartOperation: React.FC<OperationItemsProps> = ({
  list,
  stackBar,
}: OperationItemsProps) => {
  const [data, setData] = React.useState(
    nameMonthOnListMonthExpenses({ list }),
  );
  const [categories, setCategories] = React.useState(
    // @ts-ignore
    getCategoriesFromMonthExpenses(list),
  );

  useEffect(() => {
    setData(nameMonthOnListMonthExpenses({ list }));
    // @ts-ignore
    setCategories(getCategoriesFromMonthExpenses({ list }));
  }, [list]);

  const types: Array<"default" | "stacked" | "percent"> = [
    "default",
    "stacked",
    "percent",
  ];

  return (
    <div className="mt-2 flex flex-col gap-16">
      <div key={1} className="flex flex-col gap-4">
        <BarChart
          key={1}
          className="h-52"
          data={data}
          index="textualMonth"
          categories={categories}
          showLegend={false}
          stack={stackBar}
        />
      </div>
    </div>
  );
};
