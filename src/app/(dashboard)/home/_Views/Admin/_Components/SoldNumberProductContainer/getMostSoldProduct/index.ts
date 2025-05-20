"use server";

import { getSellsProductsAction } from "./getMostSoldProductction";

export const getCategoriesByProducts = async ({ list }: { list: any[] }) => {
  const categories = list.map((item: any) => {
    return item.name;
  });
  return Array.from(new Set(categories));
};

export const getSellsProducts = async () => {
  try {
    const list = await getSellsProductsAction();
    const categories = await getCategoriesByProducts({ list });

    return { list, categories };
  } catch (error) {
    console.log(error);
  }
};
