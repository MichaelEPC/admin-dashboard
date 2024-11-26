"use server";

import { getTotalTaskAction } from "./GetTotalTask";

export const getCompletedTaskAction = async () => {
  try {
    const tasks = await getTotalTaskAction();
    const completedTasks = tasks.filter((task: any) => {
      return task.taskCompleted === true;
    });
    return completedTasks;
  } catch (error) {}
};
