"use server";

import { BarChartGraphic } from "app/app/_components/BarChartGraphic";
import { getMonthlyExpenses } from "./getMonthlyExpensesProduct";
import { getTodayDate } from "../utils";

export const MonthlyExpensesContainer = async () => {
  const todayDate = await getTodayDate();
  // @ts-ignore
  const { monthlyExpenses, categories } = await getMonthlyExpenses({
    date: todayDate,
  });

  return (
    <div className="h-auto w-full">
      {/* @ts-ignore */}
      <BarChartGraphic
        formatLeft="$"
        formatRight=""
        // @ts-ignore
        data={monthlyExpenses}
        categories={categories}
        indexLocation="date"
        date={`${todayDate.years}-${todayDate.month}`}
        stacked={true}
      />
    </div>
  );
};
