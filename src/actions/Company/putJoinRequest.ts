"use server";

import { sentJoinRequest } from "app/utils/companyTools";
import { isUserLog } from "../Auth/CheckUserSingIn";

export const putJoinRequest = async (companyId: string) => {
  try {
    const user = await isUserLog();
    if (!user) {
      return;
    }
    await sentJoinRequest(companyId, user);
  } catch (error) {}
};
