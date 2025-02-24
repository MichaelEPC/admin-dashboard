"use server";

import { getMonthExpenseFromDB } from "./getMonthExpenses";

export const getMonthExpensesAction = async () => {
  try {
    const res = await getMonthExpenseFromDB();
    return res;
  } catch (error) {
    console.log(error);
  }
};
