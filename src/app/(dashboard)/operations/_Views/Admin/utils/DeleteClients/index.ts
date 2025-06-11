"use server";

import { revalidatePath } from "next/cache";
import deleteClientsFromDB from "./DeleteClientsFromDB";

const deleteClientsAction = async (id: string) => {
  try {
    const res = await deleteClientsFromDB(id);
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};

export default deleteClientsAction;
