"use server";

import { deleteTask } from "app/utils/TaskTool";
import { revalidatePath } from "next/cache";

export const deleteTaskAction = async (idTask: string) => {
  try {
    await deleteTask(idTask);
    revalidatePath("/agenda");
  } catch (error) {}
};
