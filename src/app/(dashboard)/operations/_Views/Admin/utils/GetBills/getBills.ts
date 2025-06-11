import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getBillsFromDB = async () => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const bills = await JSON.parse(company.bills);

    if (!bills) return [];

    return bills;
  } catch (error) {
    console.log(error);
  }
};
