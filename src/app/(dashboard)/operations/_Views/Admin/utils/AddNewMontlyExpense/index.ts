"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { sendMonthExpenseToDB } from "./AddMonthlyExpense";

const ControlProps = z.object({
  name: z.string(),
  amount: z.string(),
  date: z.string(),
});

export const addNewMonthExpensesAction = async (
  prevState: any,
  formData: FormData,
) => {
  const data = ControlProps.parse({
    name: formData.get("operationName"),
    amount: formData.get("operationAmount"),
    date: formData.get("operationDate"),
  });
  try {
    if (!data) {
      return;
    }
    const res = await sendMonthExpenseToDB(data.name, data.amount, data.date);
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};
