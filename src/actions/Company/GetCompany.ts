"use server";
import { isUserLog } from "../Auth/CheckUserSingIn";
import { redirect } from "next/navigation";
import { getCompanyFromUser } from "app/utils/companyTools";

export const getCompany = async () => {
  const user = await isUserLog();
  if (!user) {
    redirect("/signin");
  }
  const company = await getCompanyFromUser();
  if (!company) {
    return "none";
  }
  return company;
};
