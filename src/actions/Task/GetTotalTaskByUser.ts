"use server";

import { getTotalTask } from "app/utils/TaskTool";
import { isUserLog } from "../Auth/CheckUserSingIn";
import { revalidatePath } from "next/cache";

export const getTotalTaskByUserAction = async () => {
  try {
    const res = await getTotalTask();
    const user = await isUserLog();
    if (!user) {
      return;
    }

    const taskListByUser = res
      .filter((task: any) => task.idEmployee === user.id)
      .map((task: any) => ({ userName: user.name, ...task }));

    revalidatePath("/home");

    return taskListByUser;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};
