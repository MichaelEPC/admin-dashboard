"use server";

import { getUserFromId } from "app/utils/authTool";
import { getTotalTaskAction } from "./GetTotalTask";
import { isUserLog } from "../Auth/CheckUserSingIn";

export const getMyTaskAction = async () => {
  try {
    const taskList = await getTotalTaskAction();
    const user = await isUserLog();
    const individualTask = await Promise.all(
      taskList.map(async (task: any) => {
        if (!user) return;

        if (task.id === user.id) {
          return { name: user.name, ...task };
        }
        return null;
      }),
    );

    console.log(individualTask);
    return individualTask.filter((task) => task !== null);
  } catch (error) {}
};
