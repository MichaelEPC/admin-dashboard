"use server";

import { revalidatePath } from "next/cache";
import { getSoldProductsFromDB } from "./getSoldProducts";

export const getSoldProductsAction = async () => {
  try {
    const soldProducts = await getSoldProductsFromDB();
    revalidatePath("/operations");
    return soldProducts;
  } catch (error) {
    console.log(error);
  }
};
