import "server-only";

import { revalidatePath } from "next/cache";
import { db } from "../db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";
import { getCompanyFromUser } from "./companyTools";

export const changeGoal = async (goal: string) => {
  const company = await getCompany();

  if (!company || company == "none" || company === null) {
    return "none";
  }
  // @ts-expect-error
  const originalState = await JSON.parse(company.taskList);
  originalState.goal = goal;
  await db
    .update(companyTable)
    .set({
      taskList: JSON.stringify(originalState),
    })
    .where(eq(companyTable.id, company.id));

  revalidatePath("/home");
};

export const resetTaskGoal = async () => {
  const company = await getCompany();
  if (!company || company == "none" || company === null) {
    return "none";
  }
  // @ts-expect-error
  const originalState = await JSON.parse(company.taskList);
  originalState.taskCompleted = 0;
  await db
    .update(companyTable)
    .set({
      taskList: JSON.stringify(originalState),
    })
    .where(eq(companyTable.id, company.id));

  revalidatePath("/home");
};

export const addNewTask = async (
  idEmployee: string,
  taskName: string,
  taskDays: string,
  taskState: string,
) => {
  const company = await getCompanyFromUser();

  if (!company || company == "none") {
    return;
  }

  // @ts-expect-error
  const taskList = JSON.parse(company.taskList);

  const uniqueId = crypto.randomUUID();
  taskList.pendingTask.push({
    id: uniqueId,
    idEmployee: idEmployee,
    taskName: taskName,
    taskState: taskState,
    taskDays: taskDays,
    completed: false,
  });
  taskList.totalTask.push({
    id: uniqueId,
    idEmployee: idEmployee,
    taskName: taskName,
    taskState: taskState,
    taskDays: taskDays,
    completed: false,
  });

  await db
    .update(companyTable)
    .set({
      taskList: JSON.stringify(taskList),
    })
    .where(eq(companyTable.id, company.id));
};

export const getTotalTask = async () => {
  const company = await getCompanyFromUser();

  if (!company || company == "none") {
    return;
  }

  // @ts-expect-error
  const taskList = await JSON.parse(company.taskList);

  return taskList.totalTask;
};

export const deleteTask = async (idTask: string) => {
  const company = await getCompanyFromUser();

  if (!company || company == "none") {
    return;
  }

  // @ts-expect-error
  const taskList = JSON.parse(company.taskList);
  taskList.pendingTask = await taskList.pendingTask.filter(
    // @ts-expect-error
    (task: any) => task.id !== idTask.id,
  );
  taskList.completedTask = await taskList.completedTask.filter(
    // @ts-expect-error
    (task: any) => task.id !== idTask.id,
  );
  taskList.totalTask = await taskList.totalTask.filter(
    // @ts-expect-error
    (task: any) => task.id !== idTask.id,
  );

  await db
    .update(companyTable)
    .set({
      taskList: JSON.stringify(taskList),
    })
    .where(eq(companyTable.id, company.id));
};

export const completeTask = async (idTask: string) => {
  const company = await getCompanyFromUser();

  if (!company || company == "none") {
    return;
  }

  // @ts-expect-error
  const taskList = JSON.parse(company.taskList);
  let taskLook = {};

  taskList.pendingTask = await taskList.pendingTask.filter((task: any) => {
    // @ts-expect-error
    if (task.id !== idTask?.id) {
      taskLook = task;
      return false;
    }
    return true;
  });

  taskList.totalTask = await taskList.totalTask.filter((task: any) => {
    // @ts-expect-error
    if (task.id === idTask?.id || task.id === idTask) {
      task.completed = true;
    }
    return true;
  });

  taskList.completedTask.push(taskLook);

  await db
    .update(companyTable)
    .set({
      taskList: JSON.stringify(taskList),
    })
    .where(eq(companyTable.id, company.id));
};
