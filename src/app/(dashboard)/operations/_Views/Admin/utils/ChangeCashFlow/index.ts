"use server";

import { revalidatePath } from "next/cache";
import { changeCashFlowsFromDB } from "./ChangeCashFlow";

interface ControlProps {
  id: string;
  name: string;
  amount: string | number;
  category: string;
  date: string;
}

export const changeCashFlowsAction = async ({
  id,
  name,
  amount,
  date,
  category,
}: ControlProps) => {
  try {
    const res = await changeCashFlowsFromDB({
      id,
      name,
      amount,
      date,
      category,
    });
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};
