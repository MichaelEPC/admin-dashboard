"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { sendCashFlowToDB } from "./addCashFlowDB";

const ControlProps = z.object({
  name: z.string(),
  category: z.string(),
  amount: z.string(),
  date: z.string(),
});

export const addNewCashFlowAction = async (
  prevState: any,
  formData: FormData,
) => {
  const data = ControlProps.parse({
    name: formData.get("operationName"),
    category: formData.get("operationCategory"),
    amount: formData.get("operationAmount"),
    date: formData.get("operationDate"),
  });
  try {
    if (!data) {
      return;
    }
    await sendCashFlowToDB(data.name, data.category, data.amount, data.date);
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};
