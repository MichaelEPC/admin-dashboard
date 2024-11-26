"use server";

import { getTotalTask } from "app/utils/TaskTool";
import { getEmployees } from "../Company/getEmployees";

export const getTotalTaskWithNameUserAction = async () => {
  try {
    const res = await getTotalTask();
    const employees = await getEmployees();

    const taskListWithName = res.map((task: any) => {
      if (!employees || typeof employees === null) {
        return;
      }

      const match = employees.map((employee: any) => {
        if (employee.id === task.idEmployee) {
          return {
            employeeName: employee.name,
            ...task,
          };
        }
        return null;
      });
      const withOutNull = match.filter((task: any) => task !== null);

      return withOutNull[0];
    });

    return taskListWithName;
  } catch (error) {
    console.error("Error fetching tasks with user names", error);
    throw error;
  }
};
