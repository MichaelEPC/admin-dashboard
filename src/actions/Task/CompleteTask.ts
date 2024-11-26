"use server";

import { completeTask } from "app/utils/TaskTool";
import { revalidatePath } from "next/cache";

export const CompleteTaskAction = async (taskId: string) => {
  try {
    await completeTask(taskId);
    revalidatePath("/operations");
  } catch (error) {}
};
