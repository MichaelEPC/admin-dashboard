"use server";

import { AreaChartGraphic } from "app/app/_components/AreaChartWithTextAnimation";
import { getIncomeProfitMonthly } from "./GetIncomeGenerated";
import { getTodayDate } from "../utils";

export const AreaAllIncomesNetContainer = async () => {
  const date = await getTodayDate();

  // @ts-ignore
  const { data, categories } = await getIncomeProfitMonthly({ date });

  return (
    <div className="h-full w-full">
      {/* @ts-ignore */}
      <AreaChartGraphic
        data={data}
        indexLocation="date"
        categories={categories}
        formatLeft={"$"}
        formatRight={""}
        date={`${date.month}-${date.years}`}
      />
    </div>
  );
};
