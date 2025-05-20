"use server";

import { getProductsNumberAction } from "./getProductNumberAction";

export const getProductsNumber = async () => {
  try {
    const number = await getProductsNumberAction();
    return number;
  } catch (error) {
    console.log(error);
  }
};
