"use server";

import { getTotalTaskAction } from "./GetTotalTask";

export const getPendingTaskAction = async () => {
  try {
    const tasks = await getTotalTaskAction();
    const pendingTasks = tasks.filter((task: any) => {
      return task.pendingTasks === false;
    });
    return pendingTasks;
  } catch (error) {}
};
