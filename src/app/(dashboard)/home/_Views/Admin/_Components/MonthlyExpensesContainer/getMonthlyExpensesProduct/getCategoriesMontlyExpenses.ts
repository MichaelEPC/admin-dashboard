"use server";

export const categoriesMonthlyExpenses = async ({ list }: { list: any[] }) => {
  if (!list) return [];

  const categorieNames = list
    .map((item: any) => {
      if (item.name) return item.name;
    })
    .filter((items: any) => items);

  if (categorieNames == undefined || categorieNames == null) return [];

  return Array.from(new Set(categorieNames));
};
