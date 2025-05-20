"use server";

import { getIncomeProfitMonthlyAction } from "./getIncomeGeneratedAction";

export const getCategoriesByProducts = async ({ list }: { list: any[] }) => {
  const categories = list.map((item: any) => {
    return item.name;
  });
  return Array.from(new Set(categories));
};

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
    const data = await getIncomeProfitMonthlyAction({ date });
    // @ts-ignore
    const categories = await getCategoriesByProducts({ list: data });

    return { data, categories };
  } catch (error) {
    console.log(error);
  }
};
