"use server";
import { getUserFromToken } from "app/utils/authTool";
import { COOKIE_NAME } from "app/utils/const";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const isUserLog = async () => {
  const cookieToken = cookies().get(COOKIE_NAME);
  if (!cookieToken) {
    redirect("/signin");
  }
  const user = getUserFromToken(cookieToken);
  if (!user) {
    redirect("/signin");
  }
  return user;
};
