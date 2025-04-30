"use server";

import { revalidatePath } from "next/cache";
import ChangeIncomeFromDB from "./ChangeIncomeFromDB";

interface ControlProps {
  id: string;
  name: string;
  gainAmount: string;
  investedAmount: string;
  date: string;
}

const changeIncomeAction = async ({
  id,
  name,
  gainAmount,
  investedAmount,
  date,
}: ControlProps) => {
  try {
    const res = await ChangeIncomeFromDB({
      id,
      name,
      gainAmount,
      investedAmount,
      date,
    });
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};

export default changeIncomeAction;
