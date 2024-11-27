"use server";

import { denyJoinRequest } from "app/utils/companyTools";
import { revalidatePath } from "next/cache";

export const denyJoinRequestAction = async (
  companyId: string,
  userId: string,
) => {
  try {
    await denyJoinRequest(companyId, userId);
    revalidatePath("/team");
  } catch (error) {}
};
