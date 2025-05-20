"use server";

import { getIncomesGeneratedAction } from "./getIncomeGeneratedAction";

export const getIncomeGeneratedNumber = async ({
  date,
}: {
  date: {
    day: number;
    month: number | string;
    years: number;
  };
}) => {
  try {
    const number = await getIncomesGeneratedAction({ date });
    return number;
  } catch (error) {
    console.log(error);
  }
};
