import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getNetProfitIncomeFromDB = async () => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const monthExpenses = await JSON.parse(company.incomes);
    if (!monthExpenses) return [];

    return monthExpenses;
  } catch (error) {
    console.log(error);
  }
};
