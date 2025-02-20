import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

interface ControlProps {
  id: string;
  name: string;
  amount: string | number;
  category: string;
  date: string;
}

export const changeCashFlowsFromDB = async ({
  id,
  name,
  amount,
  category,
  date,
}: ControlProps) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }

    // @ts-expect-error
    const cashFlows = await JSON.parse(company.cashflow);
    // @ts-expect-error
    const newList = cashFlows.map((cashflow) => {
      if (cashflow.id === id)
        return {
          id: id,
          name: name,
          amount: amount,
          category: category,
          date: date,
        };

      return cashflow;
    });

    await db
      .update(companyTable)
      .set({
        cashflow: JSON.stringify(newList),
      })
      .where(eq(companyTable.id, company.id));

    if (JSON.stringify(newList) !== JSON.stringify(cashFlows)) return true;

    return false;
  } catch (error) {
    console.log(error);
  }
};
