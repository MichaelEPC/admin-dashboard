"use server";

import { getMostSoldProductAction } from "./getMostSoldProductction";

export const getMostSoldProduct = async () => {
  try {
    const list = await getMostSoldProductAction();
    return list;
  } catch (error) {
    console.log(error);
  }
};
