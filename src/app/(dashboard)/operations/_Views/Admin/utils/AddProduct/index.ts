"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { sendProductToDB } from "./AddProduct";

const ControlProps = z.object({
  name: z.string(),
  category: z.string(),
  date: z.string(),
});

export const addProductAction = async (prevState: any, formData: FormData) => {
  const data = ControlProps.parse({
    name: formData.get("operationName"),
    category: formData.get("OperationCategory"),
    date: formData.get("operationDate"),
  });
  try {
    if (!data) return;

    const res = await sendProductToDB(data.name, data.category, data.date);
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};
