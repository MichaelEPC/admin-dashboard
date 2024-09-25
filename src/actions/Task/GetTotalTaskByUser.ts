"use server";

import { getTotalTask } from "app/utils/TaskTool";
import { isUserLog } from "../Auth/CheckUserSingIn";

export const getTotalTaskByUserAction = async () => {
  try {
    const res = await getTotalTask();
    const user = await isUserLog();
    if (!user) {
      return;
    }

    const taskListByUser = res.map((task: any) => {
      if (task.idEmployee === user.id) {
        return { userName: user.name, ...task };
      }
    });

    return taskListByUser;
  } catch (error) {}
};
