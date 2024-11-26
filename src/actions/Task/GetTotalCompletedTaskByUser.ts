"use server";

import { getTotalTask } from "app/utils/TaskTool";
import { isUserLog } from "../Auth/CheckUserSingIn";
import { revalidatePath } from "next/cache";

export const getTotalCompletedTaskByUserAction = async () => {
  try {
    const res = await getTotalTask();
    const user = await isUserLog();
    if (!user) {
      return;
    }

    const taskListByUser = res.map((task: any) => {
      if (task.idEmployee === user.id) {
        if (task.completed === true) {
          return { userName: user.name, ...task };
        }
      }
      return null;
    });

    revalidatePath("/home");
    return taskListByUser.filter((task: any) => task !== null);
  } catch (error) {}
};
