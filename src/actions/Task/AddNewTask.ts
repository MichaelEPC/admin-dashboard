"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { addNewTask } from "app/utils/TaskTool";

const controlProps = z.object({
  idEmployee: z.string(),
  taskName: z.string(),
  taskDays: z.string(),
  taskState: z.string(),
});

export const addNewTaskAction = async (prevState: any, formData: FormData) => {
  const data = controlProps.parse({
    idEmployee: formData.get("idEmployee"),
    taskName: formData.get("taskName"),
    taskDays: formData.get("taskDays"),
    taskState: formData.get("taskState"),
  });

  try {
    if (!data) {
      return;
    } else {
      await addNewTask(
        data.idEmployee,
        data.taskName,
        data.taskDays,
        data.taskState,
      );
      revalidatePath("/agenda");
    }
  } catch (error) {}
};
