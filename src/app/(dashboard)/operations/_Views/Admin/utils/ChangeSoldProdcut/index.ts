"use server";

import { revalidatePath } from "next/cache";
import { changeSoldProductFromDB } from "./ChangeSoldProduct";

interface ControlProps {
  id: string;
  amount: string | number;
  date: string;
}

export const ChangeSoldProductAction = async ({
  id,
  amount,
  date,
}: ControlProps) => {
  try {
    const res = await changeSoldProductFromDB({
      id,
      amount,
      date,
    });
    revalidatePath("/operations");
    return true;
  } catch (error) {
    console.log(error);
  }
};
