import "server-only";

import { revalidatePath } from "next/cache";
import { db } from "../db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

export const changeGoal = async (goal: string) => {
  const company = await getCompany();

  if (!company || company == "none" || company === null) {
    return "none";
  }
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
