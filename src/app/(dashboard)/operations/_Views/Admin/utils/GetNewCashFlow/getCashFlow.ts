import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getCashFlowsFromDB = async () => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }

    // @ts-expect-error
    const cashFlows = await JSON.parse(company.cashflow);

    return cashFlows;
  } catch (error) {
    console.log(error);
  }
};
