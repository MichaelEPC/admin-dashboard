import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const sendMonthExpenseToDB = async (
  name: string,
  amount: string,
  date: string,
) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const monthExpenses = await JSON.parse(company.monthlyExpenses);
    const uniqueId = crypto.randomUUID();
    monthExpenses.push({
      id: uniqueId,
      name: capitalizeFirstLetter(name),
      amount: parseFloat(amount),
      date: date,
    });

    await db
      .update(companyTable)
      .set({
        monthlyExpenses: JSON.stringify(monthExpenses),
      })
      .where(eq(companyTable.id, company.id));
  } catch (error) {
    console.log(error);
  }
};
