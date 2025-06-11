"use server";

import { revalidatePath } from "next/cache";
import deleteBillFromDB from "./DeleteBillFromDB";

const deleteBillAction = async (id: string) => {
  try {
    const res = await deleteBillFromDB(id);
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};

export default deleteBillAction;
