import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

export const deleteCashFlowsFromDB = async (id: string) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }

    // @ts-expect-error
    const cashFlows = await JSON.parse(company.cashflow);
    const newList = cashFlows
      .map((cashflow: any) => {
        if (cashflow.id !== id) return cashflow;
      })
      .filter((cashflow: any) => cashflow != null);

    await db
      .update(companyTable)
      .set({
        cashflow: JSON.stringify(newList),
      })
      .where(eq(companyTable.id, company.id));
    return cashFlows;
  } catch (error) {
    console.log(error);
  }
};
