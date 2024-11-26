"use server";

import { revalidatePath } from "next/cache";

export const revalidateURL = (url: string) => {
  try {
    revalidatePath(`/${url}`);
  } catch (error) {
    console.error("Error fetching tasks with user names", error);
    throw error;
  }
};
