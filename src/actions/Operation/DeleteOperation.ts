"use server";

import { revalidatePath } from "next/cache";
import { deleteOperation } from "app/utils/operationTools";

export const deleteOperationAction = async (id: string) => {
  await deleteOperation(id);
  revalidatePath("/operations");
};
