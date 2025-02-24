"use server";

import { revalidatePath } from "next/cache";
import changeMonthExpenseFromDB from "./ChangeMonthExpenses";

interface ControlProps {
  id: string;
  name: string;
  amount: string | number;
  date: string;
}

const changeMonthExpenseAction = async ({
  id,
  name,
  amount,
  date,
}: ControlProps) => {
  try {
    const res = await changeMonthExpenseFromDB({ id, name, amount, date });
    revalidatePath("/operations");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default changeMonthExpenseAction;
