"use server";

import { revalidatePath } from "next/cache";
import ChangeClientsFromDB from "./ChangeBillFromDB";

interface ControlProps {
  id: string;
  name: string;
  date: string;
}

const changeClientsAction = async ({ id, name, date }: ControlProps) => {
  try {
    const res = await ChangeClientsFromDB({
      id,
      name,
      date,
    });
    revalidatePath("/operations");
  } catch (error) {
    console.log(error);
  }
};

export default changeClientsAction;
