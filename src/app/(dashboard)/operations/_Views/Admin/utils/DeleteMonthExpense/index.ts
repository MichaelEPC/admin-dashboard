"use server";

import { revalidatePath } from "next/cache";
import { deleteMonthExpenseFromDB } from "./DeleteMonthExpense";

const deleteMonthExpenseAction = async (id: string) => {
  try {
    if (!id || id === "") return false;

    const res = await deleteMonthExpenseFromDB(id);
    revalidatePath("/operations");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default deleteMonthExpenseAction;
