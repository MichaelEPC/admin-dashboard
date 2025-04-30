"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { sendProductSoldToDB } from "./addProductSoldToDB";

const ControlProps = z.object({
  product: z.string(),
  amount: z.string(),
  date: z.string(),
});

export const addSoldProductAction = async (
  prevState: any,
  formData: FormData,
) => {
  const data = ControlProps.parse({
    product: formData.get("operationProduct"),
    amount: formData.get("operationAmount"),
    date: formData.get("operationDate"),
  });
  try {
    if (!data) return;

    await sendProductSoldToDB(data.product, data.amount, data.date);
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};
