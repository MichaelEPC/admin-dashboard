"use server";
import { getAllCompanies } from "app/utils/companyTools";

export const getCompanies = async () => {
  const companies = await getAllCompanies();
  return companies;
};
