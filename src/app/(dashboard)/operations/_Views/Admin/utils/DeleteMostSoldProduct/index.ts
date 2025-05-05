"use server";

import { revalidatePath } from "next/cache";
import { deleteSoldProductFromDB } from "./DeleteMostSoldProduct";

export const deleteSoldProductAction = async (id: string): Promise<boolean> => {
  try {
    if (!id?.trim()) return false;

    const res = await deleteSoldProductFromDB(id);

    if (!res) return false;

    revalidatePath("/operations");
    return true;
  } catch (error) {
    console.error("Error deleting sold product:", error);
    return false;
  }
};
