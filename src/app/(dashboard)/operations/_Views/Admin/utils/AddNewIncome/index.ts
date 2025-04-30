"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { sendIncomeToDB } from "./addIncomeToDB";

const ControlProps = z.object({
  name: z.string(),
  revenue: z.string(),
  spent: z.string(),
  date: z.string(),
});

export const addIncomeAction = async (prevState: any, formData: FormData) => {
  const data = ControlProps.parse({
    name: formData.get("operationName"),
    revenue: formData.get("operationRevenue"),
    spent: formData.get("operationSpent"),
    date: formData.get("operationDate"),
  });
  try {
    if (!data) {
      return;
    }
    await sendIncomeToDB(data.name, data.revenue, data.spent, data.date);
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};
