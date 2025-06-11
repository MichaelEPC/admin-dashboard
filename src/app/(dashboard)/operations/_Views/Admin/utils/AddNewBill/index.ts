"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { sendBillToDB } from "./addBillToDB";

const ControlProps = z.object({
  name: z.string(),
  amount: z.string(),
  category: z.string(),
  date: z.string(),
});

export const addBillAction = async (prevState: any, formData: FormData) => {
  const data = ControlProps.parse({
    name: formData.get("operation-name"),
    amount: formData.get("operation-amount"),
    category: formData.get("operation-category"),
    date: formData.get("date"),
  });
  try {
    if (!data) {
      return;
    }
    await sendBillToDB(data.name, data.amount, data.category, data.date);
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};
