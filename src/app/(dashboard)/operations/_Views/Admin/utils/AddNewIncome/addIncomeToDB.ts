import "server-only";

import { db } from "app/db/index";
import { companyTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import { getCompany } from "app/actions/Company/GetCompany";

export const sendIncomeToDB = async (
  name: string,
  revenue: string,
  spent: string,
  date: string,
) => {
  try {
    const company = await getCompany();
    if (!company || company == "none" || company === null) {
      return "none";
    }
    // @ts-expect-error
    const incomes = await JSON.parse(company.incomes);
    const uniqueId = crypto.randomUUID();
    incomes.unshift({
      id: uniqueId,
      name: name,
      revenue: parseFloat(revenue),
      spent: parseFloat(spent),
      profit: parseFloat(revenue) - parseFloat(spent),
      date: date,
    });

    await db
      .update(companyTable)
      .set({
        incomes: JSON.stringify(incomes),
      })
      .where(eq(companyTable.id, company.id));
  } catch (error) {
    console.log(error);
  }
};
