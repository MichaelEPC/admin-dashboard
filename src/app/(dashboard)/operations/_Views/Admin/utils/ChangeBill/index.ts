"use server";

import { revalidatePath } from "next/cache";
import ChangeBillFromDB from "./ChangeBillFromDB";

interface ControlProps {
  id: string;
  name: string;
  amount: string;
  category: string;
  date: string;
}

const changeBillAction = async ({
  id,
  name,
  amount,
  category,
  date,
}: ControlProps) => {
  try {
    const res = await ChangeBillFromDB({
      id,
      name,
      amount,
      category,
      date,
    });
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};

export default changeBillAction;
