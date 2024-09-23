"use server";
import { acceptJoinRequest } from "app/utils/companyTools";
import { revalidatePath } from "next/cache";

export const acceptJoinRequestAction = async (
  companyId: string,
  userId: string,
) => {
  try {
    await acceptJoinRequest(companyId, userId);
    revalidatePath("/team");
  } catch (error) {}
};
