"use server";

import { getTotalTask } from "app/utils/TaskTool";
import { revalidatePath } from "next/cache";
import { getCompany } from "../Company/GetCompany";

export const getTasksByEmployeesAction = async () => {
  try {
    const company = await getCompany();
    if (!company || typeof company == "string") {
      return;
    }

    if (!company.employees || !company.taskList) return;
    const employeesList = await JSON.parse(company.employees);
    const taskList = await JSON.parse(company.taskList);

    const employeesTasks = employeesList.map((employee: any) => {
      let count = 0;
      taskList.totalTask.map((task: any) => {
        if (employee.id === task.idEmployee) {
          count++;
        }
      });
      return {
        employeeId: employee.id,
        employeeName: employee.name,
        count: count,
        job: employee.job,
      };
    });

    revalidatePath("/agenda");
    return employeesTasks;
  } catch (error) {}
};
