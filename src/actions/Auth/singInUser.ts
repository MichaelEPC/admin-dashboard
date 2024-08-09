"use server";
import { signin } from "app/utils/authTool";
import { COOKIE_NAME } from "app/utils/const";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const signInUser = async (prevState: any, formData: FormData) => {
  const data = userSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  try {
    const { token } = await signin(data);
    cookies().set(COOKIE_NAME, token);
  } catch (error) {
    return { message: error };
  }
  redirect("/home");
};

export default signInUser;
