"use server";
import { getUserFromToken } from "app/utils/authTool";
import { redirect } from "next/navigation";

export const isUserLog = async () => {
  const user = await getUserFromToken();
  if (!user) {
    redirect("/signin");
  }
  return user;
};
