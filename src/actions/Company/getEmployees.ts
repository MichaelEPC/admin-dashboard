"use server";
import { getCompany } from "./GetCompany";

export const getEmployees = async () => {
  try {
    const company = await getCompany();
    if (company === "none") return "Join a company";
    let employees = company?.employees;

    if (!employees) return;
    employees = JSON.parse(employees);
    return employees;
  } catch (error) {}
};
