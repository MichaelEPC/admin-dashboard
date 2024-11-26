"use server";

import { getTotalTask } from "app/utils/TaskTool";
import { isUserLog } from "../Auth/CheckUserSingIn";

export const getPendingTaskByUserAction = async () => {
  try {
    const res = await getTotalTask();
    const user = await isUserLog();
    if (!user) {
      return;
    }

    const taskListByUser = res.map((task: any) => {
      if (task.completed === false) {
        if (task.idEmployee === user.id) {
          return { userName: user.name, ...task };
        }
      }
      return null;
    });

    return taskListByUser.filter((task: any) => task !== null);
  } catch (error) {}
};
