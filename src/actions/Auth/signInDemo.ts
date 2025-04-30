"use server";
import { signin } from "app/utils/authTool";
import { COOKIE_NAME } from "app/utils/const";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface ControlProps {
  email: string;
  password: string;
}

const signinDemo = async ({ email, password }: ControlProps) => {
  try {
    const { token } = await signin({ email, password });
    cookies().set(COOKIE_NAME, token);
  } catch (error) {
    return { message: error };
  }
  redirect("/home");
};

export default signinDemo;
