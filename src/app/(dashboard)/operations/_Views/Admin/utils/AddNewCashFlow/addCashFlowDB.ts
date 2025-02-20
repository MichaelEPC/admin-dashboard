import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

export const sendCashFlowToDB = async (
  name: string,
  category: string,
  amount: string,
  date: string,
) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const cashFlows = await JSON.parse(company.cashflow);
    const uniqueId = crypto.randomUUID();
    cashFlows.push({
      id: uniqueId,
      name: name,
      category: category,
      amount: parseFloat(amount),
      date: date,
    });

    await db
      .update(companyTable)
      .set({
        cashflow: JSON.stringify(cashFlows),
      })
      .where(eq(companyTable.id, company.id));
  } catch (error) {
    console.log(error);
  }
};
