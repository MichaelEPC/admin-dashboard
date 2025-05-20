"use server";

import { AreaChartGraphic } from "app/app/_components/AreaChartWithTextAnimation";
import { getIncomeProfitMonthly } from "./GetIncomeGenerated";
import { getTodayDate } from "../utils";

export const AreaIncomesNetContainer = async () => {
  const date = await getTodayDate();

  // @ts-ignore
  const { data, netPorcent } = await getIncomeProfitMonthly({ date });

  return (
    <div className="h-full w-full">
      {/* @ts-ignore */}
      <AreaChartGraphic
        data={data}
        indexLocation="date"
        categories={["Income"]}
        formatLeft={"$"}
        formatRight={""}
        colors={["green"]}
        title={`Raise porcentage: ${netPorcent.toFixed(1)}%`}
        date={`${date.month}-${date.years}`}
      />
    </div>
  );
};
