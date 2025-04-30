"use server";
import { getUserFromToken } from "app/utils/authTool";
import { COOKIE_NAME } from "app/utils/const";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import signinDemo from "./signInDemo";

export const isUserLog = async () => {
  const cookieToken = cookies().get(COOKIE_NAME);
  if (!cookieToken) {
    await signinDemo({ email: "Hola@gmail.com", password: "Hola@gmail.com" });
  }
  // @ts-ignore
  const user = await getUserFromToken(cookieToken);
  if (!user) {
    redirect("/signin");
  }
  return user;
};
