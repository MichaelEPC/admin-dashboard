"use server";

import { userAlreadyVote } from "app/utils/companyTools";
import { isUserLog } from "../Auth/CheckUserSingIn";

export const userAlreadyVoteAction = async () => {
  console.log("hola");

  try {
    const user = await isUserLog();
    if (!user) {
      return;
    }

    const res = await userAlreadyVote(user);
    return res;
  } catch (error) {}
};
