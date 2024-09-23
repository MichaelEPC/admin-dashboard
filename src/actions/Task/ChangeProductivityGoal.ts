"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { changeGoal, resetTaskGoal } from "app/utils/TaskTool";

const goal = z.object({
  goal: z.string().optional(),
});

export const changeProductivityGoal = async (
  prevState: any,
  formData: FormData,
) => {
  const data = goal.parse({
    goal: formData.get("goal"),
  });
  try {
    if (!data.goal) {
      return;
    } else {
      const goal = data.goal;
      changeGoal(goal);
      revalidatePath("/home");
    }
  } catch (error) {}
};

export const resetTask = async () => {
  try {
    await resetTaskGoal();
    revalidatePath("/home");
  } catch (error) {}
};
