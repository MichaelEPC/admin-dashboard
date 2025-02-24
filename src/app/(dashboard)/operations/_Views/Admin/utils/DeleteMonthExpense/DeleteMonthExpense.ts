import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

export const deleteMonthExpenseFromDB = async (id: string) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }

    // @ts-expect-error
    const monthExpenses = await JSON.parse(company.monthlyExpenses);
    const newList = monthExpenses
      .map((monthExpense: any) => {
        if (monthExpense.id !== id) return monthExpense;
      })
      .filter((monthExpense: any) => monthExpense);

    await db
      .update(companyTable)
      .set({
        monthlyExpenses: JSON.stringify(newList),
      })
      .where(eq(companyTable.id, company.id));
    return monthExpenses;
  } catch (error) {
    console.log(error);
  }
};
