"use server";

import { getTotalTask } from "app/utils/TaskTool";
import { revalidatePath } from "next/cache";

export const getTotalTaskAction = async () => {
  try {
    const res = await getTotalTask();
    revalidatePath("/agenda");
    return res;
  } catch (error) {}
};
