"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { sendClientToDB } from "./addClientToDB";

const ControlProps = z.object({
  name: z.string(),
  date: z.string(),
});

export const addClientAction = async (prevState: any, formData: FormData) => {
  const data = ControlProps.parse({
    name: formData.get("operation-name"),
    date: formData.get("date"),
  });
  try {
    if (!data) {
      return;
    }
    await sendClientToDB(data.name, data.date);
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};
