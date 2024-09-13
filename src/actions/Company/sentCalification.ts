"use server";

import { changeRating } from "app/utils/companyTools";
import { isUserLog } from "../Auth/CheckUserSingIn";

export const changeRatingAction = async (nameCalification: string) => {
  try {
    const user = await isUserLog();
    if (!user) {
      return;
    }
    await changeRating(nameCalification, user);
  } catch (error) {}
};
