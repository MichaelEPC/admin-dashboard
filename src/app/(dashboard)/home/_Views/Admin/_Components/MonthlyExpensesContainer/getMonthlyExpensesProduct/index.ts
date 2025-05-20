"use server";

import { categoriesMonthlyExpenses } from "./getCategoriesMontlyExpenses";
import { getMonthlyExpensesAction } from "./getMostSoldProductction";

export const getMonthlyExpenses = async ({
  date,
}: {
  date: { day: number; month: string; years: number };
}) => {
  try {
    const monthlyExpenses = await getMonthlyExpensesAction({ date });
    const categories = await categoriesMonthlyExpenses({
      // @ts-ignore
      list: monthlyExpenses,
    });
    return { monthlyExpenses, categories };
  } catch (error) {
    console.log(error);
  }
};
