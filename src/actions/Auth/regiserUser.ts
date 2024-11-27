"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { signup } from "../../utils/authTool";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "app/utils/const";

const userSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  cellphone: z.string(),
  rol: z.string(),
  password: z.string(),
  companyName: z.string().optional().nullable(),
  companyCategory: z.string().optional().nullable(),
});

const registerUser = async (prevState: any, formData: FormData) => {
  try {
    const userData = userSchema.parse({
      email: formData.get("email"),
      name: formData.get("name"),
      cellphone: formData.get("cellphone"),
      rol: formData.get("rol"),
      password: formData.get("password"),
      companyName: formData.get("companyName"),
      companyCategory: formData.get("companyCategory"),
    });
    const { token } = await signup({ ...userData });
    cookies().set(COOKIE_NAME, token);
  } catch (error) {
    return { message: error };
  }
  redirect("/home");
};

export default registerUser;
