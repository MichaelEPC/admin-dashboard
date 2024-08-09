"use server";

import { COOKIE_NAME } from "app/utils/const";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const logOut = async () => {
  try {
    cookies().delete(COOKIE_NAME);
  } catch (error) {
    return { message: error };
  }
  redirect("/signin");
};

export default logOut;
