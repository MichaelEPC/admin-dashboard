"use server";

import { acceptJoinRequest } from "app/utils/companyTools";

export const acceptJoinRequestAction = async (
  companyId: string,
  userId: string,
) => {
  try {
    await acceptJoinRequest(companyId, userId);
  } catch (error) {}
};
