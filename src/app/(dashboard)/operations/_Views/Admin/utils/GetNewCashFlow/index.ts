"use server";

import { revalidatePath } from "next/cache";
import { getCashFlowsFromDB } from "./getCashFlow";

export const getCashFlowAction = async () => {
  try {
    const cashFlows = await getCashFlowsFromDB();
    revalidatePath("/operations");
    return cashFlows;
  } catch (error) {
    console.log(error);
  }
};
