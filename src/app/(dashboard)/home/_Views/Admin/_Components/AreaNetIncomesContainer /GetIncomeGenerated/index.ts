"use server";

import { getIncomeProfitMonthlyAction } from "./getIncomeGeneratedAction";

export const getIncomeProfitMonthly = async ({
  date,
}: {
  date: {
    day: number;
    month: number | string;
    years: number;
  };
}) => {
  try {
    // @ts-ignore
    const { monthlyIncome: data, netPorcent } =
      await getIncomeProfitMonthlyAction({
        date,
      });
    // @ts-ignore

    return { data, netPorcent };
  } catch (error) {
    console.log(error);
  }
};
