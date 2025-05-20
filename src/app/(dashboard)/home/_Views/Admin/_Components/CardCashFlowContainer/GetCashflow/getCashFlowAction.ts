import "server-only";

import { getCompany } from "app/actions/Company/GetCompany";

export const getCashFlowNumberAction = async () => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    let cashFlowNumber = 0;
    // @ts-expect-error
    const cashFlows = await JSON.parse(company.cashflow);

    cashFlows.map((cashflow: any) => {
      cashFlowNumber += cashflow.amount;
    });

    if (cashFlowNumber == undefined || cashFlowNumber == null) return 0;

    return cashFlowNumber;
  } catch (error) {
    console.log(error);
  }
};
