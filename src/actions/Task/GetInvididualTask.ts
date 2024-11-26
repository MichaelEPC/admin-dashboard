"use server";

import { getUserFromId } from "app/utils/authTool";
import { getTotalTaskAction } from "./GetTotalTask";

export const getIndividualTaskAction = async (id: string) => {
  try {
    const taskList = await getTotalTaskAction();
    const individualTask = await Promise.all(
      taskList.map(async (task: any) => {
        if (task.id === id) {
          const user = await getUserFromId(task.idEmployee);
          if (!user) {
            return;
          }
          return { name: user.name, ...task };
        }
        return null;
      }),
    );
    return individualTask.filter((task) => task !== null);
  } catch (error) {}
};
