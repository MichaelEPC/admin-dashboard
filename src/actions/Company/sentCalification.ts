"use server";

import { changeRating } from "app/utils/companyTools";
import { isUserLog } from "../Auth/CheckUserSingIn";
import { revalidatePath } from "next/cache";

export const changeRatingAction = async (nameCalification: string) => {
  try {
    const user = await isUserLog();
    if (!user) {
      return;
    }
    await changeRating(nameCalification, user);
  } catch (error) {}
  revalidatePath("/home");
};
