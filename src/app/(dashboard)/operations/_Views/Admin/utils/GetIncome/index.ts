"use server";

import { getNetProfitIncomeFromDB } from "./getIncome";

export const getNetProfitIncomeAction = async () => {
  try {
    const res = await getNetProfitIncomeFromDB();
    return res;
  } catch (error) {
    console.log(error);
  }
};
