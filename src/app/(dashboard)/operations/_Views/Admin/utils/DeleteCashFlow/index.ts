"use server";

import { revalidatePath } from "next/cache";
import { deleteCashFlowsFromDB } from "./DeleteCashFlow";

export const deleteCashFlowsAction = async (id: string) => {
  try {
    const res = await deleteCashFlowsFromDB(id);
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};
