"use server";

import { revalidatePath } from "next/cache";
import deleteIncomeFromDB from "./DeleteIncomeFromDB";

const deleteIncomeAction = async (id: string) => {
  try {
    const res = await deleteIncomeFromDB(id);
    revalidatePath("/operations");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default deleteIncomeAction;
